# NotebookLM 水印移除原理研究报告

> **研究对象**：https://www.notebooklmwatermark.com/
> **研究日期**：2026-02-28
> **研究方向**：视频水印移除（Audio Overview MP4）

---

## 一、网站概述

该网站提供免费的 NotebookLM 内容水印移除服务，支持两种格式：

| 功能               | 格式 | 说明                                       |
| ------------------ | ---- | ------------------------------------------ |
| PDF 幻灯片水印移除 | PDF  | 移除 "Generated with NotebookLM" 页脚/页面 |
| 视频水印移除 ⭐    | MP4  | 移除音频概览视频的 Google 品牌片尾         |

**核心卖点**：

- 🔒 **100% 本地处理**：所有操作在用户浏览器内完成，0 字节上传至服务器
- 🆓 **完全免费**：无需注册、无付费墙
- ⚡ **快速处理**：利用用户设备 CPU/GPU

---

## 二、视频水印移除的技术原理 ⭐（重点）

### 2.1 核心技术栈

| 技术                                               | 作用                                                       |
| -------------------------------------------------- | ---------------------------------------------------------- |
| **FFmpeg.wasm** (`@ffmpeg/ffmpeg ~0.12.x`) | 在浏览器中运行 FFmpeg 视频处理引擎                         |
| `ffmpeg-core.wasm`                               | 编译为 WebAssembly 的 FFmpeg 核心，通过 unpkg.com 动态加载 |
| **Next.js** (React)                          | 前端框架，页面构建基础                                     |

### 2.2 两重处理机制

NotebookLM 的视频水印由 **两部分** 组成，该网站分别处理：

#### 处理一：视觉水印擦除（`delogo` 滤镜）

```
NotebookLM 会在视频右下角（或固定位置）叠加 Google/NotebookLM 的 LOGO 图标
```

**实现原理**：使用 FFmpeg 的 `delogo` 视频滤镜：

```bash
# delogo 滤镜参数
-vf "delogo=x=${k.x}:y=${k.y}:w=${k.w}:h=${k.h}:show=0"
```

- `x`, `y`：水印的起始坐标（根据视频分辨率动态计算）
- `w`, `h`：水印区域的宽度和高度
- `show=0`：不显示调试框

**技术原理**：`delogo` 滤镜通过**像素插值**（即用水印区域周围的像素填充该区域），在视觉上"消除"水印。这是一种有损但视觉效果良好的修复方式。

#### 处理二：尾部片尾裁剪（`-t` 时长限制）

```
NotebookLM 在视频最后 2.5 秒会显示"Made by Google / NotebookLM"的品牌片尾画面
```

**实现原理**：获取视频总时长后减去 2.5 秒：

```javascript
// 伪代码还原
const duration = getVideoDuration(inputFile);
const newDuration = (duration - 2.5).toFixed(2);
// 使用 FFmpeg -t 参数限制输出时长
ffmpeg_args = ["-i", "input.mp4", "-t", newDuration, ...];
```

> **注意**：`2.5` 秒是**硬编码**值，UI 上不提供手动调整选项。

### 2.3 完整 FFmpeg 命令

经分析，实际执行的 FFmpeg 命令约为：

```bash
ffmpeg \
  -i input.mp4 \
  -t [total_duration - 2.5] \
  -vf "delogo=x={AUTO_X}:y={AUTO_Y}:w={AUTO_W}:h={AUTO_H}:show=0" \
  -map 0:v:0 \
  -map 0:a? \
  -c:v libx264 \
  -preset ultrafast \
  -crf 23 \
  -pix_fmt yuv420p \
  -c:a copy \
  -movflags +faststart \
  output.mp4
```

**参数说明**：

| 参数                     | 说明                                               |
| ------------------------ | -------------------------------------------------- |
| `-t [duration-2.5]`    | 输出时长 = 原时长 - 2.5秒（去掉片尾）              |
| `-vf "delogo=..."`     | 应用 delogo 滤镜去除视觉水印                       |
| `-c:v libx264`         | 视频使用 H.264 重新编码（因为滤镜需要重编码）      |
| `-preset ultrafast`    | 使用最快的编码预设（牺牲压缩率换速度）             |
| `-crf 23`              | 视频质量参数，23 是较高质量（0=无损，51=最差）     |
| `-c:a copy`            | **音频直接复制，不重新编码**（保持原始音质） |
| `-movflags +faststart` | 优化 MP4 文件结构，支持边下载边播放                |

### 2.4 容错机制

代码中存在编码器回退方案：

1. **首选**：`libx264`（H.264，最佳质量）
2. **备用**：`mpeg4`（当 libx264 不可用时）
3. **安全模式**：最低配置的 safe mode

### 2.5 输出质量分析

| 属性        | 结果                                       |
| ----------- | ------------------------------------------ |
| 视频画质    | 轻微损失（CRF 23，视觉上几乎无差别）       |
| 音频质量    | **完全无损**（直接复制音频流）       |
| 文件大小    | 略小于原始（去掉 2.5 秒 + ultrafast 预设） |
| 帧率/分辨率 | 与原始一致                                 |

---

## 三、PDF 水印移除的技术原理

### 3.1 技术栈

| 库         | 版本     | 用途                      |
| ---------- | -------- | ------------------------- |
| `pdf.js` | 3.11.174 | 解析/读取上传的 PDF 文件  |
| `jsPDF`  | 2.5.1    | 重新生成"干净"的 PDF 文件 |

### 3.2 处理逻辑

1. **解析**：使用 pdf.js 读取 PDF 的页面内容
2. **过滤**：识别并移除 NotebookLM 品牌相关的页面元素（页脚文字、最后一页等）
3. **重组**：使用 jsPDF 将清洁后的内容重新生成为新的 PDF 文件

---

## 四、整体架构

```
用户浏览器
    │
    ├── Next.js (React) 前端框架
    │       │
    │       ├── [视频处理模式]
    │       │       │
    │       │       └── FFmpeg.wasm (动态加载)
    │       │               ├── ffmpeg-core.js  (从 unpkg.com 加载)
    │       │               └── ffmpeg-core.wasm (WASM 二进制)
    │       │                       │
    │       │                       ├── delogo 滤镜 → 擦除视觉水印
    │       │                       └── -t 参数   → 裁剪尾部 2.5s
    │       │
    │       └── [PDF 处理模式]
    │               │
    │               ├── pdf.js (从 cdnjs 加载) → 解析 PDF
    │               └── jsPDF  (从 cdnjs 加载) → 生成新 PDF
    │
    └── 本地文件系统（输入/输出，0字节传输到服务器）
```

---

## 五、对 Seedance 项目的参考意义

基于上述研究，对视频水印移除有以下启示：

### 5.1 核心思路对比

| 方案          | NotebookLM 水印工具                 | 可借鉴点                        |
| ------------- | ----------------------------------- | ------------------------------- |
| 固定位置 Logo | `delogo` 滤镜 + 坐标              | 适用于固定位置的水印            |
| 片尾画面      | `-t` 时长裁剪                     | 简单高效，适合片尾型水印        |
| 处理位置      | **浏览器本地**（FFmpeg.wasm） | 可移植到服务端（更强的 FFmpeg） |

### 5.2 适用限制

- **`delogo` 滤镜**：

  - 适合：水印位置固定、背景相对简单的场景
  - 不适合：动态位置水印、复杂背景（会留下明显修复痕迹）
  - 效果：对 NotebookLM 的角落 LOGO 效果良好
- **片尾裁剪**：

  - 最简单粗暴的方案，完全消除片尾水印
  - 缺点：若片尾有有价值内容则会丢失

### 5.3 技术栈参考

若需实现类似功能（服务端）：

```python
# 使用 Python + FFmpeg 实现相同效果
import subprocess

def remove_notebooklm_watermark(input_path, output_path, watermark_box):
    x, y, w, h = watermark_box
  
    # 获取视频时长
    duration_cmd = ["ffprobe", "-v", "quiet", "-show_entries", 
                    "format=duration", "-of", "csv=p=0", input_path]
    duration = float(subprocess.check_output(duration_cmd)) - 2.5
  
    # 执行处理
    cmd = [
        "ffmpeg", "-i", input_path,
        "-t", str(round(duration, 2)),
        "-vf", f"delogo=x={x}:y={y}:w={w}:h={h}:show=0",
        "-c:v", "libx264", "-crf", "23",
        "-c:a", "copy",
        output_path
    ]
    subprocess.run(cmd, check=True)
```

---

## 六、总结

NotebookLM 水印移除网站的核心技术是：

1. **视频水印** = **FFmpeg.wasm** 在浏览器运行，同时使用：

   - `delogo` 滤镜擦除角落视觉 LOGO
   - `-t` 参数截断最后 2.5 秒的品牌片尾
2. **PDF 水印** = `pdf.js` 解析 + `jsPDF` 重新生成
3. **隐私保证** = 全程本地处理，无服务器上传

这是一个**利用 WebAssembly 将服务端计算搬到浏览器**的典型案例，技术上非常精巧，但对于复杂水印（动态位置、视频内嵌水印帧等）效果有限。

---

*研究整理：基于对 notebooklmwatermark.com 的前端源码分析和浏览器网络请求分析*
