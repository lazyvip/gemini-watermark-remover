
with open(r'd:\github\gemini-watermark-remover\notebookllm_rm_wm\page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find PDF related logic
keywords = ['jspdf', 'pdf-lib', 'PDFDocument', 'savePdf', 'addPage', 'addImage', 'renderPage', '"pdf"===', "'pdf'==="]

for kw in keywords:
    index = content.find(kw)
    if index != -1:
        print(f'--- Found {kw} at {index} ---')
        start = max(0, index - 500)
        end = min(len(content), index + 2000)
        print(content[start:end])
    else:
        print(f'--- {kw} not found ---')
