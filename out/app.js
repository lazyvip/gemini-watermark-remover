(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x2 + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/jszip@3.10.1/node_modules/jszip/dist/jszip.min.js
  var require_jszip_min = __commonJS({
    "node_modules/.pnpm/jszip@3.10.1/node_modules/jszip/dist/jszip.min.js"(exports, module) {
      !function(e2) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e2();
        else if ("function" == typeof define && define.amd) define([], e2);
        else {
          ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e2();
        }
      }(function() {
        return function s2(a2, o2, h2) {
          function u2(r2, e3) {
            if (!o2[r2]) {
              if (!a2[r2]) {
                var t2 = "function" == typeof __require && __require;
                if (!e3 && t2) return t2(r2, true);
                if (l2) return l2(r2, true);
                var n2 = new Error("Cannot find module '" + r2 + "'");
                throw n2.code = "MODULE_NOT_FOUND", n2;
              }
              var i2 = o2[r2] = { exports: {} };
              a2[r2][0].call(i2.exports, function(e4) {
                var t3 = a2[r2][1][e4];
                return u2(t3 || e4);
              }, i2, i2.exports, s2, a2, o2, h2);
            }
            return o2[r2].exports;
          }
          for (var l2 = "function" == typeof __require && __require, e2 = 0; e2 < h2.length; e2++) u2(h2[e2]);
          return u2;
        }({ 1: [function(e2, t2, r2) {
          "use strict";
          var d2 = e2("./utils"), c2 = e2("./support"), p2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          r2.encode = function(e3) {
            for (var t3, r3, n2, i2, s2, a2, o2, h2 = [], u2 = 0, l2 = e3.length, f2 = l2, c3 = "string" !== d2.getTypeOf(e3); u2 < e3.length; ) f2 = l2 - u2, n2 = c3 ? (t3 = e3[u2++], r3 = u2 < l2 ? e3[u2++] : 0, u2 < l2 ? e3[u2++] : 0) : (t3 = e3.charCodeAt(u2++), r3 = u2 < l2 ? e3.charCodeAt(u2++) : 0, u2 < l2 ? e3.charCodeAt(u2++) : 0), i2 = t3 >> 2, s2 = (3 & t3) << 4 | r3 >> 4, a2 = 1 < f2 ? (15 & r3) << 2 | n2 >> 6 : 64, o2 = 2 < f2 ? 63 & n2 : 64, h2.push(p2.charAt(i2) + p2.charAt(s2) + p2.charAt(a2) + p2.charAt(o2));
            return h2.join("");
          }, r2.decode = function(e3) {
            var t3, r3, n2, i2, s2, a2, o2 = 0, h2 = 0, u2 = "data:";
            if (e3.substr(0, u2.length) === u2) throw new Error("Invalid base64 input, it looks like a data url.");
            var l2, f2 = 3 * (e3 = e3.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
            if (e3.charAt(e3.length - 1) === p2.charAt(64) && f2--, e3.charAt(e3.length - 2) === p2.charAt(64) && f2--, f2 % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
            for (l2 = c2.uint8array ? new Uint8Array(0 | f2) : new Array(0 | f2); o2 < e3.length; ) t3 = p2.indexOf(e3.charAt(o2++)) << 2 | (i2 = p2.indexOf(e3.charAt(o2++))) >> 4, r3 = (15 & i2) << 4 | (s2 = p2.indexOf(e3.charAt(o2++))) >> 2, n2 = (3 & s2) << 6 | (a2 = p2.indexOf(e3.charAt(o2++))), l2[h2++] = t3, 64 !== s2 && (l2[h2++] = r3), 64 !== a2 && (l2[h2++] = n2);
            return l2;
          };
        }, { "./support": 30, "./utils": 32 }], 2: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./external"), i2 = e2("./stream/DataWorker"), s2 = e2("./stream/Crc32Probe"), a2 = e2("./stream/DataLengthProbe");
          function o2(e3, t3, r3, n3, i3) {
            this.compressedSize = e3, this.uncompressedSize = t3, this.crc32 = r3, this.compression = n3, this.compressedContent = i3;
          }
          o2.prototype = { getContentWorker: function() {
            var e3 = new i2(n2.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a2("data_length")), t3 = this;
            return e3.on("end", function() {
              if (this.streamInfo.data_length !== t3.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
            }), e3;
          }, getCompressedWorker: function() {
            return new i2(n2.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
          } }, o2.createWorkerFrom = function(e3, t3, r3) {
            return e3.pipe(new s2()).pipe(new a2("uncompressedSize")).pipe(t3.compressWorker(r3)).pipe(new a2("compressedSize")).withStreamInfo("compression", t3);
          }, t2.exports = o2;
        }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./stream/GenericWorker");
          r2.STORE = { magic: "\0\0", compressWorker: function() {
            return new n2("STORE compression");
          }, uncompressWorker: function() {
            return new n2("STORE decompression");
          } }, r2.DEFLATE = e2("./flate");
        }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./utils");
          var o2 = function() {
            for (var e3, t3 = [], r3 = 0; r3 < 256; r3++) {
              e3 = r3;
              for (var n3 = 0; n3 < 8; n3++) e3 = 1 & e3 ? 3988292384 ^ e3 >>> 1 : e3 >>> 1;
              t3[r3] = e3;
            }
            return t3;
          }();
          t2.exports = function(e3, t3) {
            return void 0 !== e3 && e3.length ? "string" !== n2.getTypeOf(e3) ? function(e4, t4, r3, n3) {
              var i2 = o2, s2 = n3 + r3;
              e4 ^= -1;
              for (var a2 = n3; a2 < s2; a2++) e4 = e4 >>> 8 ^ i2[255 & (e4 ^ t4[a2])];
              return -1 ^ e4;
            }(0 | t3, e3, e3.length, 0) : function(e4, t4, r3, n3) {
              var i2 = o2, s2 = n3 + r3;
              e4 ^= -1;
              for (var a2 = n3; a2 < s2; a2++) e4 = e4 >>> 8 ^ i2[255 & (e4 ^ t4.charCodeAt(a2))];
              return -1 ^ e4;
            }(0 | t3, e3, e3.length, 0) : 0;
          };
        }, { "./utils": 32 }], 5: [function(e2, t2, r2) {
          "use strict";
          r2.base64 = false, r2.binary = false, r2.dir = false, r2.createFolders = true, r2.date = null, r2.compression = null, r2.compressionOptions = null, r2.comment = null, r2.unixPermissions = null, r2.dosPermissions = null;
        }, {}], 6: [function(e2, t2, r2) {
          "use strict";
          var n2 = null;
          n2 = "undefined" != typeof Promise ? Promise : e2("lie"), t2.exports = { Promise: n2 };
        }, { lie: 37 }], 7: [function(e2, t2, r2) {
          "use strict";
          var n2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i2 = e2("pako"), s2 = e2("./utils"), a2 = e2("./stream/GenericWorker"), o2 = n2 ? "uint8array" : "array";
          function h2(e3, t3) {
            a2.call(this, "FlateWorker/" + e3), this._pako = null, this._pakoAction = e3, this._pakoOptions = t3, this.meta = {};
          }
          r2.magic = "\b\0", s2.inherits(h2, a2), h2.prototype.processChunk = function(e3) {
            this.meta = e3.meta, null === this._pako && this._createPako(), this._pako.push(s2.transformTo(o2, e3.data), false);
          }, h2.prototype.flush = function() {
            a2.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
          }, h2.prototype.cleanUp = function() {
            a2.prototype.cleanUp.call(this), this._pako = null;
          }, h2.prototype._createPako = function() {
            this._pako = new i2[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
            var t3 = this;
            this._pako.onData = function(e3) {
              t3.push({ data: e3, meta: t3.meta });
            };
          }, r2.compressWorker = function(e3) {
            return new h2("Deflate", e3);
          }, r2.uncompressWorker = function() {
            return new h2("Inflate", {});
          };
        }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e2, t2, r2) {
          "use strict";
          function A2(e3, t3) {
            var r3, n3 = "";
            for (r3 = 0; r3 < t3; r3++) n3 += String.fromCharCode(255 & e3), e3 >>>= 8;
            return n3;
          }
          function n2(e3, t3, r3, n3, i3, s3) {
            var a2, o2, h2 = e3.file, u2 = e3.compression, l2 = s3 !== O2.utf8encode, f2 = I2.transformTo("string", s3(h2.name)), c2 = I2.transformTo("string", O2.utf8encode(h2.name)), d2 = h2.comment, p2 = I2.transformTo("string", s3(d2)), m2 = I2.transformTo("string", O2.utf8encode(d2)), _2 = c2.length !== h2.name.length, g2 = m2.length !== d2.length, b2 = "", v2 = "", y2 = "", w2 = h2.dir, k2 = h2.date, x2 = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
            t3 && !r3 || (x2.crc32 = e3.crc32, x2.compressedSize = e3.compressedSize, x2.uncompressedSize = e3.uncompressedSize);
            var S2 = 0;
            t3 && (S2 |= 8), l2 || !_2 && !g2 || (S2 |= 2048);
            var z2 = 0, C2 = 0;
            w2 && (z2 |= 16), "UNIX" === i3 ? (C2 = 798, z2 |= function(e4, t4) {
              var r4 = e4;
              return e4 || (r4 = t4 ? 16893 : 33204), (65535 & r4) << 16;
            }(h2.unixPermissions, w2)) : (C2 = 20, z2 |= function(e4) {
              return 63 & (e4 || 0);
            }(h2.dosPermissions)), a2 = k2.getUTCHours(), a2 <<= 6, a2 |= k2.getUTCMinutes(), a2 <<= 5, a2 |= k2.getUTCSeconds() / 2, o2 = k2.getUTCFullYear() - 1980, o2 <<= 4, o2 |= k2.getUTCMonth() + 1, o2 <<= 5, o2 |= k2.getUTCDate(), _2 && (v2 = A2(1, 1) + A2(B2(f2), 4) + c2, b2 += "up" + A2(v2.length, 2) + v2), g2 && (y2 = A2(1, 1) + A2(B2(p2), 4) + m2, b2 += "uc" + A2(y2.length, 2) + y2);
            var E2 = "";
            return E2 += "\n\0", E2 += A2(S2, 2), E2 += u2.magic, E2 += A2(a2, 2), E2 += A2(o2, 2), E2 += A2(x2.crc32, 4), E2 += A2(x2.compressedSize, 4), E2 += A2(x2.uncompressedSize, 4), E2 += A2(f2.length, 2), E2 += A2(b2.length, 2), { fileRecord: R2.LOCAL_FILE_HEADER + E2 + f2 + b2, dirRecord: R2.CENTRAL_FILE_HEADER + A2(C2, 2) + E2 + A2(p2.length, 2) + "\0\0\0\0" + A2(z2, 4) + A2(n3, 4) + f2 + b2 + p2 };
          }
          var I2 = e2("../utils"), i2 = e2("../stream/GenericWorker"), O2 = e2("../utf8"), B2 = e2("../crc32"), R2 = e2("../signature");
          function s2(e3, t3, r3, n3) {
            i2.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t3, this.zipPlatform = r3, this.encodeFileName = n3, this.streamFiles = e3, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
          }
          I2.inherits(s2, i2), s2.prototype.push = function(e3) {
            var t3 = e3.meta.percent || 0, r3 = this.entriesCount, n3 = this._sources.length;
            this.accumulate ? this.contentBuffer.push(e3) : (this.bytesWritten += e3.data.length, i2.prototype.push.call(this, { data: e3.data, meta: { currentFile: this.currentFile, percent: r3 ? (t3 + 100 * (r3 - n3 - 1)) / r3 : 100 } }));
          }, s2.prototype.openedSource = function(e3) {
            this.currentSourceOffset = this.bytesWritten, this.currentFile = e3.file.name;
            var t3 = this.streamFiles && !e3.file.dir;
            if (t3) {
              var r3 = n2(e3, t3, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
              this.push({ data: r3.fileRecord, meta: { percent: 0 } });
            } else this.accumulate = true;
          }, s2.prototype.closedSource = function(e3) {
            this.accumulate = false;
            var t3 = this.streamFiles && !e3.file.dir, r3 = n2(e3, t3, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            if (this.dirRecords.push(r3.dirRecord), t3) this.push({ data: function(e4) {
              return R2.DATA_DESCRIPTOR + A2(e4.crc32, 4) + A2(e4.compressedSize, 4) + A2(e4.uncompressedSize, 4);
            }(e3), meta: { percent: 100 } });
            else for (this.push({ data: r3.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
            this.currentFile = null;
          }, s2.prototype.flush = function() {
            for (var e3 = this.bytesWritten, t3 = 0; t3 < this.dirRecords.length; t3++) this.push({ data: this.dirRecords[t3], meta: { percent: 100 } });
            var r3 = this.bytesWritten - e3, n3 = function(e4, t4, r4, n4, i3) {
              var s3 = I2.transformTo("string", i3(n4));
              return R2.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A2(e4, 2) + A2(e4, 2) + A2(t4, 4) + A2(r4, 4) + A2(s3.length, 2) + s3;
            }(this.dirRecords.length, r3, e3, this.zipComment, this.encodeFileName);
            this.push({ data: n3, meta: { percent: 100 } });
          }, s2.prototype.prepareNextSource = function() {
            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
          }, s2.prototype.registerPrevious = function(e3) {
            this._sources.push(e3);
            var t3 = this;
            return e3.on("data", function(e4) {
              t3.processChunk(e4);
            }), e3.on("end", function() {
              t3.closedSource(t3.previous.streamInfo), t3._sources.length ? t3.prepareNextSource() : t3.end();
            }), e3.on("error", function(e4) {
              t3.error(e4);
            }), this;
          }, s2.prototype.resume = function() {
            return !!i2.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
          }, s2.prototype.error = function(e3) {
            var t3 = this._sources;
            if (!i2.prototype.error.call(this, e3)) return false;
            for (var r3 = 0; r3 < t3.length; r3++) try {
              t3[r3].error(e3);
            } catch (e4) {
            }
            return true;
          }, s2.prototype.lock = function() {
            i2.prototype.lock.call(this);
            for (var e3 = this._sources, t3 = 0; t3 < e3.length; t3++) e3[t3].lock();
          }, t2.exports = s2;
        }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e2, t2, r2) {
          "use strict";
          var u2 = e2("../compressions"), n2 = e2("./ZipFileWorker");
          r2.generateWorker = function(e3, a2, t3) {
            var o2 = new n2(a2.streamFiles, t3, a2.platform, a2.encodeFileName), h2 = 0;
            try {
              e3.forEach(function(e4, t4) {
                h2++;
                var r3 = function(e5, t5) {
                  var r4 = e5 || t5, n4 = u2[r4];
                  if (!n4) throw new Error(r4 + " is not a valid compression method !");
                  return n4;
                }(t4.options.compression, a2.compression), n3 = t4.options.compressionOptions || a2.compressionOptions || {}, i2 = t4.dir, s2 = t4.date;
                t4._compressWorker(r3, n3).withStreamInfo("file", { name: e4, dir: i2, date: s2, comment: t4.comment || "", unixPermissions: t4.unixPermissions, dosPermissions: t4.dosPermissions }).pipe(o2);
              }), o2.entriesCount = h2;
            } catch (e4) {
              o2.error(e4);
            }
            return o2;
          };
        }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e2, t2, r2) {
          "use strict";
          function n2() {
            if (!(this instanceof n2)) return new n2();
            if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
            this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
              var e3 = new n2();
              for (var t3 in this) "function" != typeof this[t3] && (e3[t3] = this[t3]);
              return e3;
            };
          }
          (n2.prototype = e2("./object")).loadAsync = e2("./load"), n2.support = e2("./support"), n2.defaults = e2("./defaults"), n2.version = "3.10.1", n2.loadAsync = function(e3, t3) {
            return new n2().loadAsync(e3, t3);
          }, n2.external = e2("./external"), t2.exports = n2;
        }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e2, t2, r2) {
          "use strict";
          var u2 = e2("./utils"), i2 = e2("./external"), n2 = e2("./utf8"), s2 = e2("./zipEntries"), a2 = e2("./stream/Crc32Probe"), l2 = e2("./nodejsUtils");
          function f2(n3) {
            return new i2.Promise(function(e3, t3) {
              var r3 = n3.decompressed.getContentWorker().pipe(new a2());
              r3.on("error", function(e4) {
                t3(e4);
              }).on("end", function() {
                r3.streamInfo.crc32 !== n3.decompressed.crc32 ? t3(new Error("Corrupted zip : CRC32 mismatch")) : e3();
              }).resume();
            });
          }
          t2.exports = function(e3, o2) {
            var h2 = this;
            return o2 = u2.extend(o2 || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n2.utf8decode }), l2.isNode && l2.isStream(e3) ? i2.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u2.prepareContent("the loaded zip file", e3, true, o2.optimizedBinaryString, o2.base64).then(function(e4) {
              var t3 = new s2(o2);
              return t3.load(e4), t3;
            }).then(function(e4) {
              var t3 = [i2.Promise.resolve(e4)], r3 = e4.files;
              if (o2.checkCRC32) for (var n3 = 0; n3 < r3.length; n3++) t3.push(f2(r3[n3]));
              return i2.Promise.all(t3);
            }).then(function(e4) {
              for (var t3 = e4.shift(), r3 = t3.files, n3 = 0; n3 < r3.length; n3++) {
                var i3 = r3[n3], s3 = i3.fileNameStr, a3 = u2.resolve(i3.fileNameStr);
                h2.file(a3, i3.decompressed, { binary: true, optimizedBinaryString: true, date: i3.date, dir: i3.dir, comment: i3.fileCommentStr.length ? i3.fileCommentStr : null, unixPermissions: i3.unixPermissions, dosPermissions: i3.dosPermissions, createFolders: o2.createFolders }), i3.dir || (h2.file(a3).unsafeOriginalName = s3);
              }
              return t3.zipComment.length && (h2.comment = t3.zipComment), h2;
            });
          };
        }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("../utils"), i2 = e2("../stream/GenericWorker");
          function s2(e3, t3) {
            i2.call(this, "Nodejs stream input adapter for " + e3), this._upstreamEnded = false, this._bindStream(t3);
          }
          n2.inherits(s2, i2), s2.prototype._bindStream = function(e3) {
            var t3 = this;
            (this._stream = e3).pause(), e3.on("data", function(e4) {
              t3.push({ data: e4, meta: { percent: 0 } });
            }).on("error", function(e4) {
              t3.isPaused ? this.generatedError = e4 : t3.error(e4);
            }).on("end", function() {
              t3.isPaused ? t3._upstreamEnded = true : t3.end();
            });
          }, s2.prototype.pause = function() {
            return !!i2.prototype.pause.call(this) && (this._stream.pause(), true);
          }, s2.prototype.resume = function() {
            return !!i2.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
          }, t2.exports = s2;
        }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e2, t2, r2) {
          "use strict";
          var i2 = e2("readable-stream").Readable;
          function n2(e3, t3, r3) {
            i2.call(this, t3), this._helper = e3;
            var n3 = this;
            e3.on("data", function(e4, t4) {
              n3.push(e4) || n3._helper.pause(), r3 && r3(t4);
            }).on("error", function(e4) {
              n3.emit("error", e4);
            }).on("end", function() {
              n3.push(null);
            });
          }
          e2("../utils").inherits(n2, i2), n2.prototype._read = function() {
            this._helper.resume();
          }, t2.exports = n2;
        }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e2, t2, r2) {
          "use strict";
          t2.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e3, t3) {
            if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e3, t3);
            if ("number" == typeof e3) throw new Error('The "data" argument must not be a number');
            return new Buffer(e3, t3);
          }, allocBuffer: function(e3) {
            if (Buffer.alloc) return Buffer.alloc(e3);
            var t3 = new Buffer(e3);
            return t3.fill(0), t3;
          }, isBuffer: function(e3) {
            return Buffer.isBuffer(e3);
          }, isStream: function(e3) {
            return e3 && "function" == typeof e3.on && "function" == typeof e3.pause && "function" == typeof e3.resume;
          } };
        }, {}], 15: [function(e2, t2, r2) {
          "use strict";
          function s2(e3, t3, r3) {
            var n3, i3 = u2.getTypeOf(t3), s3 = u2.extend(r3 || {}, f2);
            s3.date = s3.date || /* @__PURE__ */ new Date(), null !== s3.compression && (s3.compression = s3.compression.toUpperCase()), "string" == typeof s3.unixPermissions && (s3.unixPermissions = parseInt(s3.unixPermissions, 8)), s3.unixPermissions && 16384 & s3.unixPermissions && (s3.dir = true), s3.dosPermissions && 16 & s3.dosPermissions && (s3.dir = true), s3.dir && (e3 = g2(e3)), s3.createFolders && (n3 = _2(e3)) && b2.call(this, n3, true);
            var a3 = "string" === i3 && false === s3.binary && false === s3.base64;
            r3 && void 0 !== r3.binary || (s3.binary = !a3), (t3 instanceof c2 && 0 === t3.uncompressedSize || s3.dir || !t3 || 0 === t3.length) && (s3.base64 = false, s3.binary = true, t3 = "", s3.compression = "STORE", i3 = "string");
            var o3 = null;
            o3 = t3 instanceof c2 || t3 instanceof l2 ? t3 : p2.isNode && p2.isStream(t3) ? new m2(e3, t3) : u2.prepareContent(e3, t3, s3.binary, s3.optimizedBinaryString, s3.base64);
            var h3 = new d2(e3, o3, s3);
            this.files[e3] = h3;
          }
          var i2 = e2("./utf8"), u2 = e2("./utils"), l2 = e2("./stream/GenericWorker"), a2 = e2("./stream/StreamHelper"), f2 = e2("./defaults"), c2 = e2("./compressedObject"), d2 = e2("./zipObject"), o2 = e2("./generate"), p2 = e2("./nodejsUtils"), m2 = e2("./nodejs/NodejsStreamInputAdapter"), _2 = function(e3) {
            "/" === e3.slice(-1) && (e3 = e3.substring(0, e3.length - 1));
            var t3 = e3.lastIndexOf("/");
            return 0 < t3 ? e3.substring(0, t3) : "";
          }, g2 = function(e3) {
            return "/" !== e3.slice(-1) && (e3 += "/"), e3;
          }, b2 = function(e3, t3) {
            return t3 = void 0 !== t3 ? t3 : f2.createFolders, e3 = g2(e3), this.files[e3] || s2.call(this, e3, null, { dir: true, createFolders: t3 }), this.files[e3];
          };
          function h2(e3) {
            return "[object RegExp]" === Object.prototype.toString.call(e3);
          }
          var n2 = { load: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, forEach: function(e3) {
            var t3, r3, n3;
            for (t3 in this.files) n3 = this.files[t3], (r3 = t3.slice(this.root.length, t3.length)) && t3.slice(0, this.root.length) === this.root && e3(r3, n3);
          }, filter: function(r3) {
            var n3 = [];
            return this.forEach(function(e3, t3) {
              r3(e3, t3) && n3.push(t3);
            }), n3;
          }, file: function(e3, t3, r3) {
            if (1 !== arguments.length) return e3 = this.root + e3, s2.call(this, e3, t3, r3), this;
            if (h2(e3)) {
              var n3 = e3;
              return this.filter(function(e4, t4) {
                return !t4.dir && n3.test(e4);
              });
            }
            var i3 = this.files[this.root + e3];
            return i3 && !i3.dir ? i3 : null;
          }, folder: function(r3) {
            if (!r3) return this;
            if (h2(r3)) return this.filter(function(e4, t4) {
              return t4.dir && r3.test(e4);
            });
            var e3 = this.root + r3, t3 = b2.call(this, e3), n3 = this.clone();
            return n3.root = t3.name, n3;
          }, remove: function(r3) {
            r3 = this.root + r3;
            var e3 = this.files[r3];
            if (e3 || ("/" !== r3.slice(-1) && (r3 += "/"), e3 = this.files[r3]), e3 && !e3.dir) delete this.files[r3];
            else for (var t3 = this.filter(function(e4, t4) {
              return t4.name.slice(0, r3.length) === r3;
            }), n3 = 0; n3 < t3.length; n3++) delete this.files[t3[n3].name];
            return this;
          }, generate: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, generateInternalStream: function(e3) {
            var t3, r3 = {};
            try {
              if ((r3 = u2.extend(e3 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i2.utf8encode })).type = r3.type.toLowerCase(), r3.compression = r3.compression.toUpperCase(), "binarystring" === r3.type && (r3.type = "string"), !r3.type) throw new Error("No output type specified.");
              u2.checkSupport(r3.type), "darwin" !== r3.platform && "freebsd" !== r3.platform && "linux" !== r3.platform && "sunos" !== r3.platform || (r3.platform = "UNIX"), "win32" === r3.platform && (r3.platform = "DOS");
              var n3 = r3.comment || this.comment || "";
              t3 = o2.generateWorker(this, r3, n3);
            } catch (e4) {
              (t3 = new l2("error")).error(e4);
            }
            return new a2(t3, r3.type || "string", r3.mimeType);
          }, generateAsync: function(e3, t3) {
            return this.generateInternalStream(e3).accumulate(t3);
          }, generateNodeStream: function(e3, t3) {
            return (e3 = e3 || {}).type || (e3.type = "nodebuffer"), this.generateInternalStream(e3).toNodejsStream(t3);
          } };
          t2.exports = n2;
        }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e2, t2, r2) {
          "use strict";
          t2.exports = e2("stream");
        }, { stream: void 0 }], 17: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./DataReader");
          function i2(e3) {
            n2.call(this, e3);
            for (var t3 = 0; t3 < this.data.length; t3++) e3[t3] = 255 & e3[t3];
          }
          e2("../utils").inherits(i2, n2), i2.prototype.byteAt = function(e3) {
            return this.data[this.zero + e3];
          }, i2.prototype.lastIndexOfSignature = function(e3) {
            for (var t3 = e3.charCodeAt(0), r3 = e3.charCodeAt(1), n3 = e3.charCodeAt(2), i3 = e3.charCodeAt(3), s2 = this.length - 4; 0 <= s2; --s2) if (this.data[s2] === t3 && this.data[s2 + 1] === r3 && this.data[s2 + 2] === n3 && this.data[s2 + 3] === i3) return s2 - this.zero;
            return -1;
          }, i2.prototype.readAndCheckSignature = function(e3) {
            var t3 = e3.charCodeAt(0), r3 = e3.charCodeAt(1), n3 = e3.charCodeAt(2), i3 = e3.charCodeAt(3), s2 = this.readData(4);
            return t3 === s2[0] && r3 === s2[1] && n3 === s2[2] && i3 === s2[3];
          }, i2.prototype.readData = function(e3) {
            if (this.checkOffset(e3), 0 === e3) return [];
            var t3 = this.data.slice(this.zero + this.index, this.zero + this.index + e3);
            return this.index += e3, t3;
          }, t2.exports = i2;
        }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("../utils");
          function i2(e3) {
            this.data = e3, this.length = e3.length, this.index = 0, this.zero = 0;
          }
          i2.prototype = { checkOffset: function(e3) {
            this.checkIndex(this.index + e3);
          }, checkIndex: function(e3) {
            if (this.length < this.zero + e3 || e3 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e3 + "). Corrupted zip ?");
          }, setIndex: function(e3) {
            this.checkIndex(e3), this.index = e3;
          }, skip: function(e3) {
            this.setIndex(this.index + e3);
          }, byteAt: function() {
          }, readInt: function(e3) {
            var t3, r3 = 0;
            for (this.checkOffset(e3), t3 = this.index + e3 - 1; t3 >= this.index; t3--) r3 = (r3 << 8) + this.byteAt(t3);
            return this.index += e3, r3;
          }, readString: function(e3) {
            return n2.transformTo("string", this.readData(e3));
          }, readData: function() {
          }, lastIndexOfSignature: function() {
          }, readAndCheckSignature: function() {
          }, readDate: function() {
            var e3 = this.readInt(4);
            return new Date(Date.UTC(1980 + (e3 >> 25 & 127), (e3 >> 21 & 15) - 1, e3 >> 16 & 31, e3 >> 11 & 31, e3 >> 5 & 63, (31 & e3) << 1));
          } }, t2.exports = i2;
        }, { "../utils": 32 }], 19: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./Uint8ArrayReader");
          function i2(e3) {
            n2.call(this, e3);
          }
          e2("../utils").inherits(i2, n2), i2.prototype.readData = function(e3) {
            this.checkOffset(e3);
            var t3 = this.data.slice(this.zero + this.index, this.zero + this.index + e3);
            return this.index += e3, t3;
          }, t2.exports = i2;
        }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./DataReader");
          function i2(e3) {
            n2.call(this, e3);
          }
          e2("../utils").inherits(i2, n2), i2.prototype.byteAt = function(e3) {
            return this.data.charCodeAt(this.zero + e3);
          }, i2.prototype.lastIndexOfSignature = function(e3) {
            return this.data.lastIndexOf(e3) - this.zero;
          }, i2.prototype.readAndCheckSignature = function(e3) {
            return e3 === this.readData(4);
          }, i2.prototype.readData = function(e3) {
            this.checkOffset(e3);
            var t3 = this.data.slice(this.zero + this.index, this.zero + this.index + e3);
            return this.index += e3, t3;
          }, t2.exports = i2;
        }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./ArrayReader");
          function i2(e3) {
            n2.call(this, e3);
          }
          e2("../utils").inherits(i2, n2), i2.prototype.readData = function(e3) {
            if (this.checkOffset(e3), 0 === e3) return new Uint8Array(0);
            var t3 = this.data.subarray(this.zero + this.index, this.zero + this.index + e3);
            return this.index += e3, t3;
          }, t2.exports = i2;
        }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("../utils"), i2 = e2("../support"), s2 = e2("./ArrayReader"), a2 = e2("./StringReader"), o2 = e2("./NodeBufferReader"), h2 = e2("./Uint8ArrayReader");
          t2.exports = function(e3) {
            var t3 = n2.getTypeOf(e3);
            return n2.checkSupport(t3), "string" !== t3 || i2.uint8array ? "nodebuffer" === t3 ? new o2(e3) : i2.uint8array ? new h2(n2.transformTo("uint8array", e3)) : new s2(n2.transformTo("array", e3)) : new a2(e3);
          };
        }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e2, t2, r2) {
          "use strict";
          r2.LOCAL_FILE_HEADER = "PK", r2.CENTRAL_FILE_HEADER = "PK", r2.CENTRAL_DIRECTORY_END = "PK", r2.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r2.ZIP64_CENTRAL_DIRECTORY_END = "PK", r2.DATA_DESCRIPTOR = "PK\x07\b";
        }, {}], 24: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./GenericWorker"), i2 = e2("../utils");
          function s2(e3) {
            n2.call(this, "ConvertWorker to " + e3), this.destType = e3;
          }
          i2.inherits(s2, n2), s2.prototype.processChunk = function(e3) {
            this.push({ data: i2.transformTo(this.destType, e3.data), meta: e3.meta });
          }, t2.exports = s2;
        }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./GenericWorker"), i2 = e2("../crc32");
          function s2() {
            n2.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
          }
          e2("../utils").inherits(s2, n2), s2.prototype.processChunk = function(e3) {
            this.streamInfo.crc32 = i2(e3.data, this.streamInfo.crc32 || 0), this.push(e3);
          }, t2.exports = s2;
        }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("../utils"), i2 = e2("./GenericWorker");
          function s2(e3) {
            i2.call(this, "DataLengthProbe for " + e3), this.propName = e3, this.withStreamInfo(e3, 0);
          }
          n2.inherits(s2, i2), s2.prototype.processChunk = function(e3) {
            if (e3) {
              var t3 = this.streamInfo[this.propName] || 0;
              this.streamInfo[this.propName] = t3 + e3.data.length;
            }
            i2.prototype.processChunk.call(this, e3);
          }, t2.exports = s2;
        }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("../utils"), i2 = e2("./GenericWorker");
          function s2(e3) {
            i2.call(this, "DataWorker");
            var t3 = this;
            this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e3.then(function(e4) {
              t3.dataIsReady = true, t3.data = e4, t3.max = e4 && e4.length || 0, t3.type = n2.getTypeOf(e4), t3.isPaused || t3._tickAndRepeat();
            }, function(e4) {
              t3.error(e4);
            });
          }
          n2.inherits(s2, i2), s2.prototype.cleanUp = function() {
            i2.prototype.cleanUp.call(this), this.data = null;
          }, s2.prototype.resume = function() {
            return !!i2.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n2.delay(this._tickAndRepeat, [], this)), true);
          }, s2.prototype._tickAndRepeat = function() {
            this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n2.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
          }, s2.prototype._tick = function() {
            if (this.isPaused || this.isFinished) return false;
            var e3 = null, t3 = Math.min(this.max, this.index + 16384);
            if (this.index >= this.max) return this.end();
            switch (this.type) {
              case "string":
                e3 = this.data.substring(this.index, t3);
                break;
              case "uint8array":
                e3 = this.data.subarray(this.index, t3);
                break;
              case "array":
              case "nodebuffer":
                e3 = this.data.slice(this.index, t3);
            }
            return this.index = t3, this.push({ data: e3, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
          }, t2.exports = s2;
        }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e2, t2, r2) {
          "use strict";
          function n2(e3) {
            this.name = e3 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
          }
          n2.prototype = { push: function(e3) {
            this.emit("data", e3);
          }, end: function() {
            if (this.isFinished) return false;
            this.flush();
            try {
              this.emit("end"), this.cleanUp(), this.isFinished = true;
            } catch (e3) {
              this.emit("error", e3);
            }
            return true;
          }, error: function(e3) {
            return !this.isFinished && (this.isPaused ? this.generatedError = e3 : (this.isFinished = true, this.emit("error", e3), this.previous && this.previous.error(e3), this.cleanUp()), true);
          }, on: function(e3, t3) {
            return this._listeners[e3].push(t3), this;
          }, cleanUp: function() {
            this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
          }, emit: function(e3, t3) {
            if (this._listeners[e3]) for (var r3 = 0; r3 < this._listeners[e3].length; r3++) this._listeners[e3][r3].call(this, t3);
          }, pipe: function(e3) {
            return e3.registerPrevious(this);
          }, registerPrevious: function(e3) {
            if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
            this.streamInfo = e3.streamInfo, this.mergeStreamInfo(), this.previous = e3;
            var t3 = this;
            return e3.on("data", function(e4) {
              t3.processChunk(e4);
            }), e3.on("end", function() {
              t3.end();
            }), e3.on("error", function(e4) {
              t3.error(e4);
            }), this;
          }, pause: function() {
            return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
          }, resume: function() {
            if (!this.isPaused || this.isFinished) return false;
            var e3 = this.isPaused = false;
            return this.generatedError && (this.error(this.generatedError), e3 = true), this.previous && this.previous.resume(), !e3;
          }, flush: function() {
          }, processChunk: function(e3) {
            this.push(e3);
          }, withStreamInfo: function(e3, t3) {
            return this.extraStreamInfo[e3] = t3, this.mergeStreamInfo(), this;
          }, mergeStreamInfo: function() {
            for (var e3 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e3) && (this.streamInfo[e3] = this.extraStreamInfo[e3]);
          }, lock: function() {
            if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
            this.isLocked = true, this.previous && this.previous.lock();
          }, toString: function() {
            var e3 = "Worker " + this.name;
            return this.previous ? this.previous + " -> " + e3 : e3;
          } }, t2.exports = n2;
        }, {}], 29: [function(e2, t2, r2) {
          "use strict";
          var h2 = e2("../utils"), i2 = e2("./ConvertWorker"), s2 = e2("./GenericWorker"), u2 = e2("../base64"), n2 = e2("../support"), a2 = e2("../external"), o2 = null;
          if (n2.nodestream) try {
            o2 = e2("../nodejs/NodejsStreamOutputAdapter");
          } catch (e3) {
          }
          function l2(e3, o3) {
            return new a2.Promise(function(t3, r3) {
              var n3 = [], i3 = e3._internalType, s3 = e3._outputType, a3 = e3._mimeType;
              e3.on("data", function(e4, t4) {
                n3.push(e4), o3 && o3(t4);
              }).on("error", function(e4) {
                n3 = [], r3(e4);
              }).on("end", function() {
                try {
                  var e4 = function(e5, t4, r4) {
                    switch (e5) {
                      case "blob":
                        return h2.newBlob(h2.transformTo("arraybuffer", t4), r4);
                      case "base64":
                        return u2.encode(t4);
                      default:
                        return h2.transformTo(e5, t4);
                    }
                  }(s3, function(e5, t4) {
                    var r4, n4 = 0, i4 = null, s4 = 0;
                    for (r4 = 0; r4 < t4.length; r4++) s4 += t4[r4].length;
                    switch (e5) {
                      case "string":
                        return t4.join("");
                      case "array":
                        return Array.prototype.concat.apply([], t4);
                      case "uint8array":
                        for (i4 = new Uint8Array(s4), r4 = 0; r4 < t4.length; r4++) i4.set(t4[r4], n4), n4 += t4[r4].length;
                        return i4;
                      case "nodebuffer":
                        return Buffer.concat(t4);
                      default:
                        throw new Error("concat : unsupported type '" + e5 + "'");
                    }
                  }(i3, n3), a3);
                  t3(e4);
                } catch (e5) {
                  r3(e5);
                }
                n3 = [];
              }).resume();
            });
          }
          function f2(e3, t3, r3) {
            var n3 = t3;
            switch (t3) {
              case "blob":
              case "arraybuffer":
                n3 = "uint8array";
                break;
              case "base64":
                n3 = "string";
            }
            try {
              this._internalType = n3, this._outputType = t3, this._mimeType = r3, h2.checkSupport(n3), this._worker = e3.pipe(new i2(n3)), e3.lock();
            } catch (e4) {
              this._worker = new s2("error"), this._worker.error(e4);
            }
          }
          f2.prototype = { accumulate: function(e3) {
            return l2(this, e3);
          }, on: function(e3, t3) {
            var r3 = this;
            return "data" === e3 ? this._worker.on(e3, function(e4) {
              t3.call(r3, e4.data, e4.meta);
            }) : this._worker.on(e3, function() {
              h2.delay(t3, arguments, r3);
            }), this;
          }, resume: function() {
            return h2.delay(this._worker.resume, [], this._worker), this;
          }, pause: function() {
            return this._worker.pause(), this;
          }, toNodejsStream: function(e3) {
            if (h2.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
            return new o2(this, { objectMode: "nodebuffer" !== this._outputType }, e3);
          } }, t2.exports = f2;
        }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e2, t2, r2) {
          "use strict";
          if (r2.base64 = true, r2.array = true, r2.string = true, r2.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r2.nodebuffer = "undefined" != typeof Buffer, r2.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r2.blob = false;
          else {
            var n2 = new ArrayBuffer(0);
            try {
              r2.blob = 0 === new Blob([n2], { type: "application/zip" }).size;
            } catch (e3) {
              try {
                var i2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                i2.append(n2), r2.blob = 0 === i2.getBlob("application/zip").size;
              } catch (e4) {
                r2.blob = false;
              }
            }
          }
          try {
            r2.nodestream = !!e2("readable-stream").Readable;
          } catch (e3) {
            r2.nodestream = false;
          }
        }, { "readable-stream": 16 }], 31: [function(e2, t2, s2) {
          "use strict";
          for (var o2 = e2("./utils"), h2 = e2("./support"), r2 = e2("./nodejsUtils"), n2 = e2("./stream/GenericWorker"), u2 = new Array(256), i2 = 0; i2 < 256; i2++) u2[i2] = 252 <= i2 ? 6 : 248 <= i2 ? 5 : 240 <= i2 ? 4 : 224 <= i2 ? 3 : 192 <= i2 ? 2 : 1;
          u2[254] = u2[254] = 1;
          function a2() {
            n2.call(this, "utf-8 decode"), this.leftOver = null;
          }
          function l2() {
            n2.call(this, "utf-8 encode");
          }
          s2.utf8encode = function(e3) {
            return h2.nodebuffer ? r2.newBufferFrom(e3, "utf-8") : function(e4) {
              var t3, r3, n3, i3, s3, a3 = e4.length, o3 = 0;
              for (i3 = 0; i3 < a3; i3++) 55296 == (64512 & (r3 = e4.charCodeAt(i3))) && i3 + 1 < a3 && 56320 == (64512 & (n3 = e4.charCodeAt(i3 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i3++), o3 += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 65536 ? 3 : 4;
              for (t3 = h2.uint8array ? new Uint8Array(o3) : new Array(o3), i3 = s3 = 0; s3 < o3; i3++) 55296 == (64512 & (r3 = e4.charCodeAt(i3))) && i3 + 1 < a3 && 56320 == (64512 & (n3 = e4.charCodeAt(i3 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i3++), r3 < 128 ? t3[s3++] = r3 : (r3 < 2048 ? t3[s3++] = 192 | r3 >>> 6 : (r3 < 65536 ? t3[s3++] = 224 | r3 >>> 12 : (t3[s3++] = 240 | r3 >>> 18, t3[s3++] = 128 | r3 >>> 12 & 63), t3[s3++] = 128 | r3 >>> 6 & 63), t3[s3++] = 128 | 63 & r3);
              return t3;
            }(e3);
          }, s2.utf8decode = function(e3) {
            return h2.nodebuffer ? o2.transformTo("nodebuffer", e3).toString("utf-8") : function(e4) {
              var t3, r3, n3, i3, s3 = e4.length, a3 = new Array(2 * s3);
              for (t3 = r3 = 0; t3 < s3; ) if ((n3 = e4[t3++]) < 128) a3[r3++] = n3;
              else if (4 < (i3 = u2[n3])) a3[r3++] = 65533, t3 += i3 - 1;
              else {
                for (n3 &= 2 === i3 ? 31 : 3 === i3 ? 15 : 7; 1 < i3 && t3 < s3; ) n3 = n3 << 6 | 63 & e4[t3++], i3--;
                1 < i3 ? a3[r3++] = 65533 : n3 < 65536 ? a3[r3++] = n3 : (n3 -= 65536, a3[r3++] = 55296 | n3 >> 10 & 1023, a3[r3++] = 56320 | 1023 & n3);
              }
              return a3.length !== r3 && (a3.subarray ? a3 = a3.subarray(0, r3) : a3.length = r3), o2.applyFromCharCode(a3);
            }(e3 = o2.transformTo(h2.uint8array ? "uint8array" : "array", e3));
          }, o2.inherits(a2, n2), a2.prototype.processChunk = function(e3) {
            var t3 = o2.transformTo(h2.uint8array ? "uint8array" : "array", e3.data);
            if (this.leftOver && this.leftOver.length) {
              if (h2.uint8array) {
                var r3 = t3;
                (t3 = new Uint8Array(r3.length + this.leftOver.length)).set(this.leftOver, 0), t3.set(r3, this.leftOver.length);
              } else t3 = this.leftOver.concat(t3);
              this.leftOver = null;
            }
            var n3 = function(e4, t4) {
              var r4;
              for ((t4 = t4 || e4.length) > e4.length && (t4 = e4.length), r4 = t4 - 1; 0 <= r4 && 128 == (192 & e4[r4]); ) r4--;
              return r4 < 0 ? t4 : 0 === r4 ? t4 : r4 + u2[e4[r4]] > t4 ? r4 : t4;
            }(t3), i3 = t3;
            n3 !== t3.length && (h2.uint8array ? (i3 = t3.subarray(0, n3), this.leftOver = t3.subarray(n3, t3.length)) : (i3 = t3.slice(0, n3), this.leftOver = t3.slice(n3, t3.length))), this.push({ data: s2.utf8decode(i3), meta: e3.meta });
          }, a2.prototype.flush = function() {
            this.leftOver && this.leftOver.length && (this.push({ data: s2.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
          }, s2.Utf8DecodeWorker = a2, o2.inherits(l2, n2), l2.prototype.processChunk = function(e3) {
            this.push({ data: s2.utf8encode(e3.data), meta: e3.meta });
          }, s2.Utf8EncodeWorker = l2;
        }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e2, t2, a2) {
          "use strict";
          var o2 = e2("./support"), h2 = e2("./base64"), r2 = e2("./nodejsUtils"), u2 = e2("./external");
          function n2(e3) {
            return e3;
          }
          function l2(e3, t3) {
            for (var r3 = 0; r3 < e3.length; ++r3) t3[r3] = 255 & e3.charCodeAt(r3);
            return t3;
          }
          e2("setimmediate"), a2.newBlob = function(t3, r3) {
            a2.checkSupport("blob");
            try {
              return new Blob([t3], { type: r3 });
            } catch (e3) {
              try {
                var n3 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                return n3.append(t3), n3.getBlob(r3);
              } catch (e4) {
                throw new Error("Bug : can't construct the Blob.");
              }
            }
          };
          var i2 = { stringifyByChunk: function(e3, t3, r3) {
            var n3 = [], i3 = 0, s3 = e3.length;
            if (s3 <= r3) return String.fromCharCode.apply(null, e3);
            for (; i3 < s3; ) "array" === t3 || "nodebuffer" === t3 ? n3.push(String.fromCharCode.apply(null, e3.slice(i3, Math.min(i3 + r3, s3)))) : n3.push(String.fromCharCode.apply(null, e3.subarray(i3, Math.min(i3 + r3, s3)))), i3 += r3;
            return n3.join("");
          }, stringifyByChar: function(e3) {
            for (var t3 = "", r3 = 0; r3 < e3.length; r3++) t3 += String.fromCharCode(e3[r3]);
            return t3;
          }, applyCanBeUsed: { uint8array: function() {
            try {
              return o2.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
            } catch (e3) {
              return false;
            }
          }(), nodebuffer: function() {
            try {
              return o2.nodebuffer && 1 === String.fromCharCode.apply(null, r2.allocBuffer(1)).length;
            } catch (e3) {
              return false;
            }
          }() } };
          function s2(e3) {
            var t3 = 65536, r3 = a2.getTypeOf(e3), n3 = true;
            if ("uint8array" === r3 ? n3 = i2.applyCanBeUsed.uint8array : "nodebuffer" === r3 && (n3 = i2.applyCanBeUsed.nodebuffer), n3) for (; 1 < t3; ) try {
              return i2.stringifyByChunk(e3, r3, t3);
            } catch (e4) {
              t3 = Math.floor(t3 / 2);
            }
            return i2.stringifyByChar(e3);
          }
          function f2(e3, t3) {
            for (var r3 = 0; r3 < e3.length; r3++) t3[r3] = e3[r3];
            return t3;
          }
          a2.applyFromCharCode = s2;
          var c2 = {};
          c2.string = { string: n2, array: function(e3) {
            return l2(e3, new Array(e3.length));
          }, arraybuffer: function(e3) {
            return c2.string.uint8array(e3).buffer;
          }, uint8array: function(e3) {
            return l2(e3, new Uint8Array(e3.length));
          }, nodebuffer: function(e3) {
            return l2(e3, r2.allocBuffer(e3.length));
          } }, c2.array = { string: s2, array: n2, arraybuffer: function(e3) {
            return new Uint8Array(e3).buffer;
          }, uint8array: function(e3) {
            return new Uint8Array(e3);
          }, nodebuffer: function(e3) {
            return r2.newBufferFrom(e3);
          } }, c2.arraybuffer = { string: function(e3) {
            return s2(new Uint8Array(e3));
          }, array: function(e3) {
            return f2(new Uint8Array(e3), new Array(e3.byteLength));
          }, arraybuffer: n2, uint8array: function(e3) {
            return new Uint8Array(e3);
          }, nodebuffer: function(e3) {
            return r2.newBufferFrom(new Uint8Array(e3));
          } }, c2.uint8array = { string: s2, array: function(e3) {
            return f2(e3, new Array(e3.length));
          }, arraybuffer: function(e3) {
            return e3.buffer;
          }, uint8array: n2, nodebuffer: function(e3) {
            return r2.newBufferFrom(e3);
          } }, c2.nodebuffer = { string: s2, array: function(e3) {
            return f2(e3, new Array(e3.length));
          }, arraybuffer: function(e3) {
            return c2.nodebuffer.uint8array(e3).buffer;
          }, uint8array: function(e3) {
            return f2(e3, new Uint8Array(e3.length));
          }, nodebuffer: n2 }, a2.transformTo = function(e3, t3) {
            if (t3 = t3 || "", !e3) return t3;
            a2.checkSupport(e3);
            var r3 = a2.getTypeOf(t3);
            return c2[r3][e3](t3);
          }, a2.resolve = function(e3) {
            for (var t3 = e3.split("/"), r3 = [], n3 = 0; n3 < t3.length; n3++) {
              var i3 = t3[n3];
              "." === i3 || "" === i3 && 0 !== n3 && n3 !== t3.length - 1 || (".." === i3 ? r3.pop() : r3.push(i3));
            }
            return r3.join("/");
          }, a2.getTypeOf = function(e3) {
            return "string" == typeof e3 ? "string" : "[object Array]" === Object.prototype.toString.call(e3) ? "array" : o2.nodebuffer && r2.isBuffer(e3) ? "nodebuffer" : o2.uint8array && e3 instanceof Uint8Array ? "uint8array" : o2.arraybuffer && e3 instanceof ArrayBuffer ? "arraybuffer" : void 0;
          }, a2.checkSupport = function(e3) {
            if (!o2[e3.toLowerCase()]) throw new Error(e3 + " is not supported by this platform");
          }, a2.MAX_VALUE_16BITS = 65535, a2.MAX_VALUE_32BITS = -1, a2.pretty = function(e3) {
            var t3, r3, n3 = "";
            for (r3 = 0; r3 < (e3 || "").length; r3++) n3 += "\\x" + ((t3 = e3.charCodeAt(r3)) < 16 ? "0" : "") + t3.toString(16).toUpperCase();
            return n3;
          }, a2.delay = function(e3, t3, r3) {
            setImmediate(function() {
              e3.apply(r3 || null, t3 || []);
            });
          }, a2.inherits = function(e3, t3) {
            function r3() {
            }
            r3.prototype = t3.prototype, e3.prototype = new r3();
          }, a2.extend = function() {
            var e3, t3, r3 = {};
            for (e3 = 0; e3 < arguments.length; e3++) for (t3 in arguments[e3]) Object.prototype.hasOwnProperty.call(arguments[e3], t3) && void 0 === r3[t3] && (r3[t3] = arguments[e3][t3]);
            return r3;
          }, a2.prepareContent = function(r3, e3, n3, i3, s3) {
            return u2.Promise.resolve(e3).then(function(n4) {
              return o2.blob && (n4 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n4))) && "undefined" != typeof FileReader ? new u2.Promise(function(t3, r4) {
                var e4 = new FileReader();
                e4.onload = function(e5) {
                  t3(e5.target.result);
                }, e4.onerror = function(e5) {
                  r4(e5.target.error);
                }, e4.readAsArrayBuffer(n4);
              }) : n4;
            }).then(function(e4) {
              var t3 = a2.getTypeOf(e4);
              return t3 ? ("arraybuffer" === t3 ? e4 = a2.transformTo("uint8array", e4) : "string" === t3 && (s3 ? e4 = h2.decode(e4) : n3 && true !== i3 && (e4 = function(e5) {
                return l2(e5, o2.uint8array ? new Uint8Array(e5.length) : new Array(e5.length));
              }(e4))), e4) : u2.Promise.reject(new Error("Can't read the data of '" + r3 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
            });
          };
        }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./reader/readerFor"), i2 = e2("./utils"), s2 = e2("./signature"), a2 = e2("./zipEntry"), o2 = e2("./support");
          function h2(e3) {
            this.files = [], this.loadOptions = e3;
          }
          h2.prototype = { checkSignature: function(e3) {
            if (!this.reader.readAndCheckSignature(e3)) {
              this.reader.index -= 4;
              var t3 = this.reader.readString(4);
              throw new Error("Corrupted zip or bug: unexpected signature (" + i2.pretty(t3) + ", expected " + i2.pretty(e3) + ")");
            }
          }, isSignature: function(e3, t3) {
            var r3 = this.reader.index;
            this.reader.setIndex(e3);
            var n3 = this.reader.readString(4) === t3;
            return this.reader.setIndex(r3), n3;
          }, readBlockEndOfCentral: function() {
            this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
            var e3 = this.reader.readData(this.zipCommentLength), t3 = o2.uint8array ? "uint8array" : "array", r3 = i2.transformTo(t3, e3);
            this.zipComment = this.loadOptions.decodeFileName(r3);
          }, readBlockZip64EndOfCentral: function() {
            this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
            for (var e3, t3, r3, n3 = this.zip64EndOfCentralSize - 44; 0 < n3; ) e3 = this.reader.readInt(2), t3 = this.reader.readInt(4), r3 = this.reader.readData(t3), this.zip64ExtensibleData[e3] = { id: e3, length: t3, value: r3 };
          }, readBlockZip64EndOfCentralLocator: function() {
            if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
          }, readLocalFiles: function() {
            var e3, t3;
            for (e3 = 0; e3 < this.files.length; e3++) t3 = this.files[e3], this.reader.setIndex(t3.localHeaderOffset), this.checkSignature(s2.LOCAL_FILE_HEADER), t3.readLocalPart(this.reader), t3.handleUTF8(), t3.processAttributes();
          }, readCentralDir: function() {
            var e3;
            for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s2.CENTRAL_FILE_HEADER); ) (e3 = new a2({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e3);
            if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
          }, readEndOfCentral: function() {
            var e3 = this.reader.lastIndexOfSignature(s2.CENTRAL_DIRECTORY_END);
            if (e3 < 0) throw !this.isSignature(0, s2.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
            this.reader.setIndex(e3);
            var t3 = e3;
            if (this.checkSignature(s2.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i2.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i2.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i2.MAX_VALUE_16BITS || this.centralDirRecords === i2.MAX_VALUE_16BITS || this.centralDirSize === i2.MAX_VALUE_32BITS || this.centralDirOffset === i2.MAX_VALUE_32BITS) {
              if (this.zip64 = true, (e3 = this.reader.lastIndexOfSignature(s2.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
              if (this.reader.setIndex(e3), this.checkSignature(s2.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s2.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s2.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
              this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s2.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
            }
            var r3 = this.centralDirOffset + this.centralDirSize;
            this.zip64 && (r3 += 20, r3 += 12 + this.zip64EndOfCentralSize);
            var n3 = t3 - r3;
            if (0 < n3) this.isSignature(t3, s2.CENTRAL_FILE_HEADER) || (this.reader.zero = n3);
            else if (n3 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n3) + " bytes.");
          }, prepareReader: function(e3) {
            this.reader = n2(e3);
          }, load: function(e3) {
            this.prepareReader(e3), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
          } }, t2.exports = h2;
        }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e2, t2, r2) {
          "use strict";
          var n2 = e2("./reader/readerFor"), s2 = e2("./utils"), i2 = e2("./compressedObject"), a2 = e2("./crc32"), o2 = e2("./utf8"), h2 = e2("./compressions"), u2 = e2("./support");
          function l2(e3, t3) {
            this.options = e3, this.loadOptions = t3;
          }
          l2.prototype = { isEncrypted: function() {
            return 1 == (1 & this.bitFlag);
          }, useUTF8: function() {
            return 2048 == (2048 & this.bitFlag);
          }, readLocalPart: function(e3) {
            var t3, r3;
            if (e3.skip(22), this.fileNameLength = e3.readInt(2), r3 = e3.readInt(2), this.fileName = e3.readData(this.fileNameLength), e3.skip(r3), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
            if (null === (t3 = function(e4) {
              for (var t4 in h2) if (Object.prototype.hasOwnProperty.call(h2, t4) && h2[t4].magic === e4) return h2[t4];
              return null;
            }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s2.pretty(this.compressionMethod) + " unknown (inner file : " + s2.transformTo("string", this.fileName) + ")");
            this.decompressed = new i2(this.compressedSize, this.uncompressedSize, this.crc32, t3, e3.readData(this.compressedSize));
          }, readCentralPart: function(e3) {
            this.versionMadeBy = e3.readInt(2), e3.skip(2), this.bitFlag = e3.readInt(2), this.compressionMethod = e3.readString(2), this.date = e3.readDate(), this.crc32 = e3.readInt(4), this.compressedSize = e3.readInt(4), this.uncompressedSize = e3.readInt(4);
            var t3 = e3.readInt(2);
            if (this.extraFieldsLength = e3.readInt(2), this.fileCommentLength = e3.readInt(2), this.diskNumberStart = e3.readInt(2), this.internalFileAttributes = e3.readInt(2), this.externalFileAttributes = e3.readInt(4), this.localHeaderOffset = e3.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
            e3.skip(t3), this.readExtraFields(e3), this.parseZIP64ExtraField(e3), this.fileComment = e3.readData(this.fileCommentLength);
          }, processAttributes: function() {
            this.unixPermissions = null, this.dosPermissions = null;
            var e3 = this.versionMadeBy >> 8;
            this.dir = !!(16 & this.externalFileAttributes), 0 == e3 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
          }, parseZIP64ExtraField: function() {
            if (this.extraFields[1]) {
              var e3 = n2(this.extraFields[1].value);
              this.uncompressedSize === s2.MAX_VALUE_32BITS && (this.uncompressedSize = e3.readInt(8)), this.compressedSize === s2.MAX_VALUE_32BITS && (this.compressedSize = e3.readInt(8)), this.localHeaderOffset === s2.MAX_VALUE_32BITS && (this.localHeaderOffset = e3.readInt(8)), this.diskNumberStart === s2.MAX_VALUE_32BITS && (this.diskNumberStart = e3.readInt(4));
            }
          }, readExtraFields: function(e3) {
            var t3, r3, n3, i3 = e3.index + this.extraFieldsLength;
            for (this.extraFields || (this.extraFields = {}); e3.index + 4 < i3; ) t3 = e3.readInt(2), r3 = e3.readInt(2), n3 = e3.readData(r3), this.extraFields[t3] = { id: t3, length: r3, value: n3 };
            e3.setIndex(i3);
          }, handleUTF8: function() {
            var e3 = u2.uint8array ? "uint8array" : "array";
            if (this.useUTF8()) this.fileNameStr = o2.utf8decode(this.fileName), this.fileCommentStr = o2.utf8decode(this.fileComment);
            else {
              var t3 = this.findExtraFieldUnicodePath();
              if (null !== t3) this.fileNameStr = t3;
              else {
                var r3 = s2.transformTo(e3, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(r3);
              }
              var n3 = this.findExtraFieldUnicodeComment();
              if (null !== n3) this.fileCommentStr = n3;
              else {
                var i3 = s2.transformTo(e3, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(i3);
              }
            }
          }, findExtraFieldUnicodePath: function() {
            var e3 = this.extraFields[28789];
            if (e3) {
              var t3 = n2(e3.value);
              return 1 !== t3.readInt(1) ? null : a2(this.fileName) !== t3.readInt(4) ? null : o2.utf8decode(t3.readData(e3.length - 5));
            }
            return null;
          }, findExtraFieldUnicodeComment: function() {
            var e3 = this.extraFields[25461];
            if (e3) {
              var t3 = n2(e3.value);
              return 1 !== t3.readInt(1) ? null : a2(this.fileComment) !== t3.readInt(4) ? null : o2.utf8decode(t3.readData(e3.length - 5));
            }
            return null;
          } }, t2.exports = l2;
        }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e2, t2, r2) {
          "use strict";
          function n2(e3, t3, r3) {
            this.name = e3, this.dir = r3.dir, this.date = r3.date, this.comment = r3.comment, this.unixPermissions = r3.unixPermissions, this.dosPermissions = r3.dosPermissions, this._data = t3, this._dataBinary = r3.binary, this.options = { compression: r3.compression, compressionOptions: r3.compressionOptions };
          }
          var s2 = e2("./stream/StreamHelper"), i2 = e2("./stream/DataWorker"), a2 = e2("./utf8"), o2 = e2("./compressedObject"), h2 = e2("./stream/GenericWorker");
          n2.prototype = { internalStream: function(e3) {
            var t3 = null, r3 = "string";
            try {
              if (!e3) throw new Error("No output type specified.");
              var n3 = "string" === (r3 = e3.toLowerCase()) || "text" === r3;
              "binarystring" !== r3 && "text" !== r3 || (r3 = "string"), t3 = this._decompressWorker();
              var i3 = !this._dataBinary;
              i3 && !n3 && (t3 = t3.pipe(new a2.Utf8EncodeWorker())), !i3 && n3 && (t3 = t3.pipe(new a2.Utf8DecodeWorker()));
            } catch (e4) {
              (t3 = new h2("error")).error(e4);
            }
            return new s2(t3, r3, "");
          }, async: function(e3, t3) {
            return this.internalStream(e3).accumulate(t3);
          }, nodeStream: function(e3, t3) {
            return this.internalStream(e3 || "nodebuffer").toNodejsStream(t3);
          }, _compressWorker: function(e3, t3) {
            if (this._data instanceof o2 && this._data.compression.magic === e3.magic) return this._data.getCompressedWorker();
            var r3 = this._decompressWorker();
            return this._dataBinary || (r3 = r3.pipe(new a2.Utf8EncodeWorker())), o2.createWorkerFrom(r3, e3, t3);
          }, _decompressWorker: function() {
            return this._data instanceof o2 ? this._data.getContentWorker() : this._data instanceof h2 ? this._data : new i2(this._data);
          } };
          for (var u2 = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l2 = function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, f2 = 0; f2 < u2.length; f2++) n2.prototype[u2[f2]] = l2;
          t2.exports = n2;
        }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e2, l2, t2) {
          (function(t3) {
            "use strict";
            var r2, n2, e3 = t3.MutationObserver || t3.WebKitMutationObserver;
            if (e3) {
              var i2 = 0, s2 = new e3(u2), a2 = t3.document.createTextNode("");
              s2.observe(a2, { characterData: true }), r2 = function() {
                a2.data = i2 = ++i2 % 2;
              };
            } else if (t3.setImmediate || void 0 === t3.MessageChannel) r2 = "document" in t3 && "onreadystatechange" in t3.document.createElement("script") ? function() {
              var e4 = t3.document.createElement("script");
              e4.onreadystatechange = function() {
                u2(), e4.onreadystatechange = null, e4.parentNode.removeChild(e4), e4 = null;
              }, t3.document.documentElement.appendChild(e4);
            } : function() {
              setTimeout(u2, 0);
            };
            else {
              var o2 = new t3.MessageChannel();
              o2.port1.onmessage = u2, r2 = function() {
                o2.port2.postMessage(0);
              };
            }
            var h2 = [];
            function u2() {
              var e4, t4;
              n2 = true;
              for (var r3 = h2.length; r3; ) {
                for (t4 = h2, h2 = [], e4 = -1; ++e4 < r3; ) t4[e4]();
                r3 = h2.length;
              }
              n2 = false;
            }
            l2.exports = function(e4) {
              1 !== h2.push(e4) || n2 || r2();
            };
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}], 37: [function(e2, t2, r2) {
          "use strict";
          var i2 = e2("immediate");
          function u2() {
          }
          var l2 = {}, s2 = ["REJECTED"], a2 = ["FULFILLED"], n2 = ["PENDING"];
          function o2(e3) {
            if ("function" != typeof e3) throw new TypeError("resolver must be a function");
            this.state = n2, this.queue = [], this.outcome = void 0, e3 !== u2 && d2(this, e3);
          }
          function h2(e3, t3, r3) {
            this.promise = e3, "function" == typeof t3 && (this.onFulfilled = t3, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r3 && (this.onRejected = r3, this.callRejected = this.otherCallRejected);
          }
          function f2(t3, r3, n3) {
            i2(function() {
              var e3;
              try {
                e3 = r3(n3);
              } catch (e4) {
                return l2.reject(t3, e4);
              }
              e3 === t3 ? l2.reject(t3, new TypeError("Cannot resolve promise with itself")) : l2.resolve(t3, e3);
            });
          }
          function c2(e3) {
            var t3 = e3 && e3.then;
            if (e3 && ("object" == typeof e3 || "function" == typeof e3) && "function" == typeof t3) return function() {
              t3.apply(e3, arguments);
            };
          }
          function d2(t3, e3) {
            var r3 = false;
            function n3(e4) {
              r3 || (r3 = true, l2.reject(t3, e4));
            }
            function i3(e4) {
              r3 || (r3 = true, l2.resolve(t3, e4));
            }
            var s3 = p2(function() {
              e3(i3, n3);
            });
            "error" === s3.status && n3(s3.value);
          }
          function p2(e3, t3) {
            var r3 = {};
            try {
              r3.value = e3(t3), r3.status = "success";
            } catch (e4) {
              r3.status = "error", r3.value = e4;
            }
            return r3;
          }
          (t2.exports = o2).prototype.finally = function(t3) {
            if ("function" != typeof t3) return this;
            var r3 = this.constructor;
            return this.then(function(e3) {
              return r3.resolve(t3()).then(function() {
                return e3;
              });
            }, function(e3) {
              return r3.resolve(t3()).then(function() {
                throw e3;
              });
            });
          }, o2.prototype.catch = function(e3) {
            return this.then(null, e3);
          }, o2.prototype.then = function(e3, t3) {
            if ("function" != typeof e3 && this.state === a2 || "function" != typeof t3 && this.state === s2) return this;
            var r3 = new this.constructor(u2);
            this.state !== n2 ? f2(r3, this.state === a2 ? e3 : t3, this.outcome) : this.queue.push(new h2(r3, e3, t3));
            return r3;
          }, h2.prototype.callFulfilled = function(e3) {
            l2.resolve(this.promise, e3);
          }, h2.prototype.otherCallFulfilled = function(e3) {
            f2(this.promise, this.onFulfilled, e3);
          }, h2.prototype.callRejected = function(e3) {
            l2.reject(this.promise, e3);
          }, h2.prototype.otherCallRejected = function(e3) {
            f2(this.promise, this.onRejected, e3);
          }, l2.resolve = function(e3, t3) {
            var r3 = p2(c2, t3);
            if ("error" === r3.status) return l2.reject(e3, r3.value);
            var n3 = r3.value;
            if (n3) d2(e3, n3);
            else {
              e3.state = a2, e3.outcome = t3;
              for (var i3 = -1, s3 = e3.queue.length; ++i3 < s3; ) e3.queue[i3].callFulfilled(t3);
            }
            return e3;
          }, l2.reject = function(e3, t3) {
            e3.state = s2, e3.outcome = t3;
            for (var r3 = -1, n3 = e3.queue.length; ++r3 < n3; ) e3.queue[r3].callRejected(t3);
            return e3;
          }, o2.resolve = function(e3) {
            if (e3 instanceof this) return e3;
            return l2.resolve(new this(u2), e3);
          }, o2.reject = function(e3) {
            var t3 = new this(u2);
            return l2.reject(t3, e3);
          }, o2.all = function(e3) {
            var r3 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e3)) return this.reject(new TypeError("must be an array"));
            var n3 = e3.length, i3 = false;
            if (!n3) return this.resolve([]);
            var s3 = new Array(n3), a3 = 0, t3 = -1, o3 = new this(u2);
            for (; ++t3 < n3; ) h3(e3[t3], t3);
            return o3;
            function h3(e4, t4) {
              r3.resolve(e4).then(function(e5) {
                s3[t4] = e5, ++a3 !== n3 || i3 || (i3 = true, l2.resolve(o3, s3));
              }, function(e5) {
                i3 || (i3 = true, l2.reject(o3, e5));
              });
            }
          }, o2.race = function(e3) {
            var t3 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e3)) return this.reject(new TypeError("must be an array"));
            var r3 = e3.length, n3 = false;
            if (!r3) return this.resolve([]);
            var i3 = -1, s3 = new this(u2);
            for (; ++i3 < r3; ) a3 = e3[i3], t3.resolve(a3).then(function(e4) {
              n3 || (n3 = true, l2.resolve(s3, e4));
            }, function(e4) {
              n3 || (n3 = true, l2.reject(s3, e4));
            });
            var a3;
            return s3;
          };
        }, { immediate: 36 }], 38: [function(e2, t2, r2) {
          "use strict";
          var n2 = {};
          (0, e2("./lib/utils/common").assign)(n2, e2("./lib/deflate"), e2("./lib/inflate"), e2("./lib/zlib/constants")), t2.exports = n2;
        }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e2, t2, r2) {
          "use strict";
          var a2 = e2("./zlib/deflate"), o2 = e2("./utils/common"), h2 = e2("./utils/strings"), i2 = e2("./zlib/messages"), s2 = e2("./zlib/zstream"), u2 = Object.prototype.toString, l2 = 0, f2 = -1, c2 = 0, d2 = 8;
          function p2(e3) {
            if (!(this instanceof p2)) return new p2(e3);
            this.options = o2.assign({ level: f2, method: d2, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c2, to: "" }, e3 || {});
            var t3 = this.options;
            t3.raw && 0 < t3.windowBits ? t3.windowBits = -t3.windowBits : t3.gzip && 0 < t3.windowBits && t3.windowBits < 16 && (t3.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s2(), this.strm.avail_out = 0;
            var r3 = a2.deflateInit2(this.strm, t3.level, t3.method, t3.windowBits, t3.memLevel, t3.strategy);
            if (r3 !== l2) throw new Error(i2[r3]);
            if (t3.header && a2.deflateSetHeader(this.strm, t3.header), t3.dictionary) {
              var n3;
              if (n3 = "string" == typeof t3.dictionary ? h2.string2buf(t3.dictionary) : "[object ArrayBuffer]" === u2.call(t3.dictionary) ? new Uint8Array(t3.dictionary) : t3.dictionary, (r3 = a2.deflateSetDictionary(this.strm, n3)) !== l2) throw new Error(i2[r3]);
              this._dict_set = true;
            }
          }
          function n2(e3, t3) {
            var r3 = new p2(t3);
            if (r3.push(e3, true), r3.err) throw r3.msg || i2[r3.err];
            return r3.result;
          }
          p2.prototype.push = function(e3, t3) {
            var r3, n3, i3 = this.strm, s3 = this.options.chunkSize;
            if (this.ended) return false;
            n3 = t3 === ~~t3 ? t3 : true === t3 ? 4 : 0, "string" == typeof e3 ? i3.input = h2.string2buf(e3) : "[object ArrayBuffer]" === u2.call(e3) ? i3.input = new Uint8Array(e3) : i3.input = e3, i3.next_in = 0, i3.avail_in = i3.input.length;
            do {
              if (0 === i3.avail_out && (i3.output = new o2.Buf8(s3), i3.next_out = 0, i3.avail_out = s3), 1 !== (r3 = a2.deflate(i3, n3)) && r3 !== l2) return this.onEnd(r3), !(this.ended = true);
              0 !== i3.avail_out && (0 !== i3.avail_in || 4 !== n3 && 2 !== n3) || ("string" === this.options.to ? this.onData(h2.buf2binstring(o2.shrinkBuf(i3.output, i3.next_out))) : this.onData(o2.shrinkBuf(i3.output, i3.next_out)));
            } while ((0 < i3.avail_in || 0 === i3.avail_out) && 1 !== r3);
            return 4 === n3 ? (r3 = a2.deflateEnd(this.strm), this.onEnd(r3), this.ended = true, r3 === l2) : 2 !== n3 || (this.onEnd(l2), !(i3.avail_out = 0));
          }, p2.prototype.onData = function(e3) {
            this.chunks.push(e3);
          }, p2.prototype.onEnd = function(e3) {
            e3 === l2 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o2.flattenChunks(this.chunks)), this.chunks = [], this.err = e3, this.msg = this.strm.msg;
          }, r2.Deflate = p2, r2.deflate = n2, r2.deflateRaw = function(e3, t3) {
            return (t3 = t3 || {}).raw = true, n2(e3, t3);
          }, r2.gzip = function(e3, t3) {
            return (t3 = t3 || {}).gzip = true, n2(e3, t3);
          };
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e2, t2, r2) {
          "use strict";
          var c2 = e2("./zlib/inflate"), d2 = e2("./utils/common"), p2 = e2("./utils/strings"), m2 = e2("./zlib/constants"), n2 = e2("./zlib/messages"), i2 = e2("./zlib/zstream"), s2 = e2("./zlib/gzheader"), _2 = Object.prototype.toString;
          function a2(e3) {
            if (!(this instanceof a2)) return new a2(e3);
            this.options = d2.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e3 || {});
            var t3 = this.options;
            t3.raw && 0 <= t3.windowBits && t3.windowBits < 16 && (t3.windowBits = -t3.windowBits, 0 === t3.windowBits && (t3.windowBits = -15)), !(0 <= t3.windowBits && t3.windowBits < 16) || e3 && e3.windowBits || (t3.windowBits += 32), 15 < t3.windowBits && t3.windowBits < 48 && 0 == (15 & t3.windowBits) && (t3.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i2(), this.strm.avail_out = 0;
            var r3 = c2.inflateInit2(this.strm, t3.windowBits);
            if (r3 !== m2.Z_OK) throw new Error(n2[r3]);
            this.header = new s2(), c2.inflateGetHeader(this.strm, this.header);
          }
          function o2(e3, t3) {
            var r3 = new a2(t3);
            if (r3.push(e3, true), r3.err) throw r3.msg || n2[r3.err];
            return r3.result;
          }
          a2.prototype.push = function(e3, t3) {
            var r3, n3, i3, s3, a3, o3, h2 = this.strm, u2 = this.options.chunkSize, l2 = this.options.dictionary, f2 = false;
            if (this.ended) return false;
            n3 = t3 === ~~t3 ? t3 : true === t3 ? m2.Z_FINISH : m2.Z_NO_FLUSH, "string" == typeof e3 ? h2.input = p2.binstring2buf(e3) : "[object ArrayBuffer]" === _2.call(e3) ? h2.input = new Uint8Array(e3) : h2.input = e3, h2.next_in = 0, h2.avail_in = h2.input.length;
            do {
              if (0 === h2.avail_out && (h2.output = new d2.Buf8(u2), h2.next_out = 0, h2.avail_out = u2), (r3 = c2.inflate(h2, m2.Z_NO_FLUSH)) === m2.Z_NEED_DICT && l2 && (o3 = "string" == typeof l2 ? p2.string2buf(l2) : "[object ArrayBuffer]" === _2.call(l2) ? new Uint8Array(l2) : l2, r3 = c2.inflateSetDictionary(this.strm, o3)), r3 === m2.Z_BUF_ERROR && true === f2 && (r3 = m2.Z_OK, f2 = false), r3 !== m2.Z_STREAM_END && r3 !== m2.Z_OK) return this.onEnd(r3), !(this.ended = true);
              h2.next_out && (0 !== h2.avail_out && r3 !== m2.Z_STREAM_END && (0 !== h2.avail_in || n3 !== m2.Z_FINISH && n3 !== m2.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i3 = p2.utf8border(h2.output, h2.next_out), s3 = h2.next_out - i3, a3 = p2.buf2string(h2.output, i3), h2.next_out = s3, h2.avail_out = u2 - s3, s3 && d2.arraySet(h2.output, h2.output, i3, s3, 0), this.onData(a3)) : this.onData(d2.shrinkBuf(h2.output, h2.next_out)))), 0 === h2.avail_in && 0 === h2.avail_out && (f2 = true);
            } while ((0 < h2.avail_in || 0 === h2.avail_out) && r3 !== m2.Z_STREAM_END);
            return r3 === m2.Z_STREAM_END && (n3 = m2.Z_FINISH), n3 === m2.Z_FINISH ? (r3 = c2.inflateEnd(this.strm), this.onEnd(r3), this.ended = true, r3 === m2.Z_OK) : n3 !== m2.Z_SYNC_FLUSH || (this.onEnd(m2.Z_OK), !(h2.avail_out = 0));
          }, a2.prototype.onData = function(e3) {
            this.chunks.push(e3);
          }, a2.prototype.onEnd = function(e3) {
            e3 === m2.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d2.flattenChunks(this.chunks)), this.chunks = [], this.err = e3, this.msg = this.strm.msg;
          }, r2.Inflate = a2, r2.inflate = o2, r2.inflateRaw = function(e3, t3) {
            return (t3 = t3 || {}).raw = true, o2(e3, t3);
          }, r2.ungzip = o2;
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e2, t2, r2) {
          "use strict";
          var n2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
          r2.assign = function(e3) {
            for (var t3 = Array.prototype.slice.call(arguments, 1); t3.length; ) {
              var r3 = t3.shift();
              if (r3) {
                if ("object" != typeof r3) throw new TypeError(r3 + "must be non-object");
                for (var n3 in r3) r3.hasOwnProperty(n3) && (e3[n3] = r3[n3]);
              }
            }
            return e3;
          }, r2.shrinkBuf = function(e3, t3) {
            return e3.length === t3 ? e3 : e3.subarray ? e3.subarray(0, t3) : (e3.length = t3, e3);
          };
          var i2 = { arraySet: function(e3, t3, r3, n3, i3) {
            if (t3.subarray && e3.subarray) e3.set(t3.subarray(r3, r3 + n3), i3);
            else for (var s3 = 0; s3 < n3; s3++) e3[i3 + s3] = t3[r3 + s3];
          }, flattenChunks: function(e3) {
            var t3, r3, n3, i3, s3, a2;
            for (t3 = n3 = 0, r3 = e3.length; t3 < r3; t3++) n3 += e3[t3].length;
            for (a2 = new Uint8Array(n3), t3 = i3 = 0, r3 = e3.length; t3 < r3; t3++) s3 = e3[t3], a2.set(s3, i3), i3 += s3.length;
            return a2;
          } }, s2 = { arraySet: function(e3, t3, r3, n3, i3) {
            for (var s3 = 0; s3 < n3; s3++) e3[i3 + s3] = t3[r3 + s3];
          }, flattenChunks: function(e3) {
            return [].concat.apply([], e3);
          } };
          r2.setTyped = function(e3) {
            e3 ? (r2.Buf8 = Uint8Array, r2.Buf16 = Uint16Array, r2.Buf32 = Int32Array, r2.assign(r2, i2)) : (r2.Buf8 = Array, r2.Buf16 = Array, r2.Buf32 = Array, r2.assign(r2, s2));
          }, r2.setTyped(n2);
        }, {}], 42: [function(e2, t2, r2) {
          "use strict";
          var h2 = e2("./common"), i2 = true, s2 = true;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (e3) {
            i2 = false;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (e3) {
            s2 = false;
          }
          for (var u2 = new h2.Buf8(256), n2 = 0; n2 < 256; n2++) u2[n2] = 252 <= n2 ? 6 : 248 <= n2 ? 5 : 240 <= n2 ? 4 : 224 <= n2 ? 3 : 192 <= n2 ? 2 : 1;
          function l2(e3, t3) {
            if (t3 < 65537 && (e3.subarray && s2 || !e3.subarray && i2)) return String.fromCharCode.apply(null, h2.shrinkBuf(e3, t3));
            for (var r3 = "", n3 = 0; n3 < t3; n3++) r3 += String.fromCharCode(e3[n3]);
            return r3;
          }
          u2[254] = u2[254] = 1, r2.string2buf = function(e3) {
            var t3, r3, n3, i3, s3, a2 = e3.length, o2 = 0;
            for (i3 = 0; i3 < a2; i3++) 55296 == (64512 & (r3 = e3.charCodeAt(i3))) && i3 + 1 < a2 && 56320 == (64512 & (n3 = e3.charCodeAt(i3 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i3++), o2 += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 65536 ? 3 : 4;
            for (t3 = new h2.Buf8(o2), i3 = s3 = 0; s3 < o2; i3++) 55296 == (64512 & (r3 = e3.charCodeAt(i3))) && i3 + 1 < a2 && 56320 == (64512 & (n3 = e3.charCodeAt(i3 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i3++), r3 < 128 ? t3[s3++] = r3 : (r3 < 2048 ? t3[s3++] = 192 | r3 >>> 6 : (r3 < 65536 ? t3[s3++] = 224 | r3 >>> 12 : (t3[s3++] = 240 | r3 >>> 18, t3[s3++] = 128 | r3 >>> 12 & 63), t3[s3++] = 128 | r3 >>> 6 & 63), t3[s3++] = 128 | 63 & r3);
            return t3;
          }, r2.buf2binstring = function(e3) {
            return l2(e3, e3.length);
          }, r2.binstring2buf = function(e3) {
            for (var t3 = new h2.Buf8(e3.length), r3 = 0, n3 = t3.length; r3 < n3; r3++) t3[r3] = e3.charCodeAt(r3);
            return t3;
          }, r2.buf2string = function(e3, t3) {
            var r3, n3, i3, s3, a2 = t3 || e3.length, o2 = new Array(2 * a2);
            for (r3 = n3 = 0; r3 < a2; ) if ((i3 = e3[r3++]) < 128) o2[n3++] = i3;
            else if (4 < (s3 = u2[i3])) o2[n3++] = 65533, r3 += s3 - 1;
            else {
              for (i3 &= 2 === s3 ? 31 : 3 === s3 ? 15 : 7; 1 < s3 && r3 < a2; ) i3 = i3 << 6 | 63 & e3[r3++], s3--;
              1 < s3 ? o2[n3++] = 65533 : i3 < 65536 ? o2[n3++] = i3 : (i3 -= 65536, o2[n3++] = 55296 | i3 >> 10 & 1023, o2[n3++] = 56320 | 1023 & i3);
            }
            return l2(o2, n3);
          }, r2.utf8border = function(e3, t3) {
            var r3;
            for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
            return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u2[e3[r3]] > t3 ? r3 : t3;
          };
        }, { "./common": 41 }], 43: [function(e2, t2, r2) {
          "use strict";
          t2.exports = function(e3, t3, r3, n2) {
            for (var i2 = 65535 & e3 | 0, s2 = e3 >>> 16 & 65535 | 0, a2 = 0; 0 !== r3; ) {
              for (r3 -= a2 = 2e3 < r3 ? 2e3 : r3; s2 = s2 + (i2 = i2 + t3[n2++] | 0) | 0, --a2; ) ;
              i2 %= 65521, s2 %= 65521;
            }
            return i2 | s2 << 16 | 0;
          };
        }, {}], 44: [function(e2, t2, r2) {
          "use strict";
          t2.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
        }, {}], 45: [function(e2, t2, r2) {
          "use strict";
          var o2 = function() {
            for (var e3, t3 = [], r3 = 0; r3 < 256; r3++) {
              e3 = r3;
              for (var n2 = 0; n2 < 8; n2++) e3 = 1 & e3 ? 3988292384 ^ e3 >>> 1 : e3 >>> 1;
              t3[r3] = e3;
            }
            return t3;
          }();
          t2.exports = function(e3, t3, r3, n2) {
            var i2 = o2, s2 = n2 + r3;
            e3 ^= -1;
            for (var a2 = n2; a2 < s2; a2++) e3 = e3 >>> 8 ^ i2[255 & (e3 ^ t3[a2])];
            return -1 ^ e3;
          };
        }, {}], 46: [function(e2, t2, r2) {
          "use strict";
          var h2, c2 = e2("../utils/common"), u2 = e2("./trees"), d2 = e2("./adler32"), p2 = e2("./crc32"), n2 = e2("./messages"), l2 = 0, f2 = 4, m2 = 0, _2 = -2, g2 = -1, b2 = 4, i2 = 2, v2 = 8, y2 = 9, s2 = 286, a2 = 30, o2 = 19, w2 = 2 * s2 + 1, k2 = 15, x2 = 3, S2 = 258, z2 = S2 + x2 + 1, C2 = 42, E2 = 113, A2 = 1, I2 = 2, O2 = 3, B2 = 4;
          function R2(e3, t3) {
            return e3.msg = n2[t3], t3;
          }
          function T2(e3) {
            return (e3 << 1) - (4 < e3 ? 9 : 0);
          }
          function D2(e3) {
            for (var t3 = e3.length; 0 <= --t3; ) e3[t3] = 0;
          }
          function F2(e3) {
            var t3 = e3.state, r3 = t3.pending;
            r3 > e3.avail_out && (r3 = e3.avail_out), 0 !== r3 && (c2.arraySet(e3.output, t3.pending_buf, t3.pending_out, r3, e3.next_out), e3.next_out += r3, t3.pending_out += r3, e3.total_out += r3, e3.avail_out -= r3, t3.pending -= r3, 0 === t3.pending && (t3.pending_out = 0));
          }
          function N2(e3, t3) {
            u2._tr_flush_block(e3, 0 <= e3.block_start ? e3.block_start : -1, e3.strstart - e3.block_start, t3), e3.block_start = e3.strstart, F2(e3.strm);
          }
          function U2(e3, t3) {
            e3.pending_buf[e3.pending++] = t3;
          }
          function P2(e3, t3) {
            e3.pending_buf[e3.pending++] = t3 >>> 8 & 255, e3.pending_buf[e3.pending++] = 255 & t3;
          }
          function L2(e3, t3) {
            var r3, n3, i3 = e3.max_chain_length, s3 = e3.strstart, a3 = e3.prev_length, o3 = e3.nice_match, h3 = e3.strstart > e3.w_size - z2 ? e3.strstart - (e3.w_size - z2) : 0, u3 = e3.window, l3 = e3.w_mask, f3 = e3.prev, c3 = e3.strstart + S2, d3 = u3[s3 + a3 - 1], p3 = u3[s3 + a3];
            e3.prev_length >= e3.good_match && (i3 >>= 2), o3 > e3.lookahead && (o3 = e3.lookahead);
            do {
              if (u3[(r3 = t3) + a3] === p3 && u3[r3 + a3 - 1] === d3 && u3[r3] === u3[s3] && u3[++r3] === u3[s3 + 1]) {
                s3 += 2, r3++;
                do {
                } while (u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && s3 < c3);
                if (n3 = S2 - (c3 - s3), s3 = c3 - S2, a3 < n3) {
                  if (e3.match_start = t3, o3 <= (a3 = n3)) break;
                  d3 = u3[s3 + a3 - 1], p3 = u3[s3 + a3];
                }
              }
            } while ((t3 = f3[t3 & l3]) > h3 && 0 != --i3);
            return a3 <= e3.lookahead ? a3 : e3.lookahead;
          }
          function j2(e3) {
            var t3, r3, n3, i3, s3, a3, o3, h3, u3, l3, f3 = e3.w_size;
            do {
              if (i3 = e3.window_size - e3.lookahead - e3.strstart, e3.strstart >= f3 + (f3 - z2)) {
                for (c2.arraySet(e3.window, e3.window, f3, f3, 0), e3.match_start -= f3, e3.strstart -= f3, e3.block_start -= f3, t3 = r3 = e3.hash_size; n3 = e3.head[--t3], e3.head[t3] = f3 <= n3 ? n3 - f3 : 0, --r3; ) ;
                for (t3 = r3 = f3; n3 = e3.prev[--t3], e3.prev[t3] = f3 <= n3 ? n3 - f3 : 0, --r3; ) ;
                i3 += f3;
              }
              if (0 === e3.strm.avail_in) break;
              if (a3 = e3.strm, o3 = e3.window, h3 = e3.strstart + e3.lookahead, u3 = i3, l3 = void 0, l3 = a3.avail_in, u3 < l3 && (l3 = u3), r3 = 0 === l3 ? 0 : (a3.avail_in -= l3, c2.arraySet(o3, a3.input, a3.next_in, l3, h3), 1 === a3.state.wrap ? a3.adler = d2(a3.adler, o3, l3, h3) : 2 === a3.state.wrap && (a3.adler = p2(a3.adler, o3, l3, h3)), a3.next_in += l3, a3.total_in += l3, l3), e3.lookahead += r3, e3.lookahead + e3.insert >= x2) for (s3 = e3.strstart - e3.insert, e3.ins_h = e3.window[s3], e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[s3 + 1]) & e3.hash_mask; e3.insert && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[s3 + x2 - 1]) & e3.hash_mask, e3.prev[s3 & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = s3, s3++, e3.insert--, !(e3.lookahead + e3.insert < x2)); ) ;
            } while (e3.lookahead < z2 && 0 !== e3.strm.avail_in);
          }
          function Z2(e3, t3) {
            for (var r3, n3; ; ) {
              if (e3.lookahead < z2) {
                if (j2(e3), e3.lookahead < z2 && t3 === l2) return A2;
                if (0 === e3.lookahead) break;
              }
              if (r3 = 0, e3.lookahead >= x2 && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x2 - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart), 0 !== r3 && e3.strstart - r3 <= e3.w_size - z2 && (e3.match_length = L2(e3, r3)), e3.match_length >= x2) if (n3 = u2._tr_tally(e3, e3.strstart - e3.match_start, e3.match_length - x2), e3.lookahead -= e3.match_length, e3.match_length <= e3.max_lazy_match && e3.lookahead >= x2) {
                for (e3.match_length--; e3.strstart++, e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x2 - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart, 0 != --e3.match_length; ) ;
                e3.strstart++;
              } else e3.strstart += e3.match_length, e3.match_length = 0, e3.ins_h = e3.window[e3.strstart], e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + 1]) & e3.hash_mask;
              else n3 = u2._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++;
              if (n3 && (N2(e3, false), 0 === e3.strm.avail_out)) return A2;
            }
            return e3.insert = e3.strstart < x2 - 1 ? e3.strstart : x2 - 1, t3 === f2 ? (N2(e3, true), 0 === e3.strm.avail_out ? O2 : B2) : e3.last_lit && (N2(e3, false), 0 === e3.strm.avail_out) ? A2 : I2;
          }
          function W2(e3, t3) {
            for (var r3, n3, i3; ; ) {
              if (e3.lookahead < z2) {
                if (j2(e3), e3.lookahead < z2 && t3 === l2) return A2;
                if (0 === e3.lookahead) break;
              }
              if (r3 = 0, e3.lookahead >= x2 && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x2 - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart), e3.prev_length = e3.match_length, e3.prev_match = e3.match_start, e3.match_length = x2 - 1, 0 !== r3 && e3.prev_length < e3.max_lazy_match && e3.strstart - r3 <= e3.w_size - z2 && (e3.match_length = L2(e3, r3), e3.match_length <= 5 && (1 === e3.strategy || e3.match_length === x2 && 4096 < e3.strstart - e3.match_start) && (e3.match_length = x2 - 1)), e3.prev_length >= x2 && e3.match_length <= e3.prev_length) {
                for (i3 = e3.strstart + e3.lookahead - x2, n3 = u2._tr_tally(e3, e3.strstart - 1 - e3.prev_match, e3.prev_length - x2), e3.lookahead -= e3.prev_length - 1, e3.prev_length -= 2; ++e3.strstart <= i3 && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x2 - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart), 0 != --e3.prev_length; ) ;
                if (e3.match_available = 0, e3.match_length = x2 - 1, e3.strstart++, n3 && (N2(e3, false), 0 === e3.strm.avail_out)) return A2;
              } else if (e3.match_available) {
                if ((n3 = u2._tr_tally(e3, 0, e3.window[e3.strstart - 1])) && N2(e3, false), e3.strstart++, e3.lookahead--, 0 === e3.strm.avail_out) return A2;
              } else e3.match_available = 1, e3.strstart++, e3.lookahead--;
            }
            return e3.match_available && (n3 = u2._tr_tally(e3, 0, e3.window[e3.strstart - 1]), e3.match_available = 0), e3.insert = e3.strstart < x2 - 1 ? e3.strstart : x2 - 1, t3 === f2 ? (N2(e3, true), 0 === e3.strm.avail_out ? O2 : B2) : e3.last_lit && (N2(e3, false), 0 === e3.strm.avail_out) ? A2 : I2;
          }
          function M2(e3, t3, r3, n3, i3) {
            this.good_length = e3, this.max_lazy = t3, this.nice_length = r3, this.max_chain = n3, this.func = i3;
          }
          function H2() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v2, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c2.Buf16(2 * w2), this.dyn_dtree = new c2.Buf16(2 * (2 * a2 + 1)), this.bl_tree = new c2.Buf16(2 * (2 * o2 + 1)), D2(this.dyn_ltree), D2(this.dyn_dtree), D2(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c2.Buf16(k2 + 1), this.heap = new c2.Buf16(2 * s2 + 1), D2(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c2.Buf16(2 * s2 + 1), D2(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
          }
          function G2(e3) {
            var t3;
            return e3 && e3.state ? (e3.total_in = e3.total_out = 0, e3.data_type = i2, (t3 = e3.state).pending = 0, t3.pending_out = 0, t3.wrap < 0 && (t3.wrap = -t3.wrap), t3.status = t3.wrap ? C2 : E2, e3.adler = 2 === t3.wrap ? 0 : 1, t3.last_flush = l2, u2._tr_init(t3), m2) : R2(e3, _2);
          }
          function K2(e3) {
            var t3 = G2(e3);
            return t3 === m2 && function(e4) {
              e4.window_size = 2 * e4.w_size, D2(e4.head), e4.max_lazy_match = h2[e4.level].max_lazy, e4.good_match = h2[e4.level].good_length, e4.nice_match = h2[e4.level].nice_length, e4.max_chain_length = h2[e4.level].max_chain, e4.strstart = 0, e4.block_start = 0, e4.lookahead = 0, e4.insert = 0, e4.match_length = e4.prev_length = x2 - 1, e4.match_available = 0, e4.ins_h = 0;
            }(e3.state), t3;
          }
          function Y2(e3, t3, r3, n3, i3, s3) {
            if (!e3) return _2;
            var a3 = 1;
            if (t3 === g2 && (t3 = 6), n3 < 0 ? (a3 = 0, n3 = -n3) : 15 < n3 && (a3 = 2, n3 -= 16), i3 < 1 || y2 < i3 || r3 !== v2 || n3 < 8 || 15 < n3 || t3 < 0 || 9 < t3 || s3 < 0 || b2 < s3) return R2(e3, _2);
            8 === n3 && (n3 = 9);
            var o3 = new H2();
            return (e3.state = o3).strm = e3, o3.wrap = a3, o3.gzhead = null, o3.w_bits = n3, o3.w_size = 1 << o3.w_bits, o3.w_mask = o3.w_size - 1, o3.hash_bits = i3 + 7, o3.hash_size = 1 << o3.hash_bits, o3.hash_mask = o3.hash_size - 1, o3.hash_shift = ~~((o3.hash_bits + x2 - 1) / x2), o3.window = new c2.Buf8(2 * o3.w_size), o3.head = new c2.Buf16(o3.hash_size), o3.prev = new c2.Buf16(o3.w_size), o3.lit_bufsize = 1 << i3 + 6, o3.pending_buf_size = 4 * o3.lit_bufsize, o3.pending_buf = new c2.Buf8(o3.pending_buf_size), o3.d_buf = 1 * o3.lit_bufsize, o3.l_buf = 3 * o3.lit_bufsize, o3.level = t3, o3.strategy = s3, o3.method = r3, K2(e3);
          }
          h2 = [new M2(0, 0, 0, 0, function(e3, t3) {
            var r3 = 65535;
            for (r3 > e3.pending_buf_size - 5 && (r3 = e3.pending_buf_size - 5); ; ) {
              if (e3.lookahead <= 1) {
                if (j2(e3), 0 === e3.lookahead && t3 === l2) return A2;
                if (0 === e3.lookahead) break;
              }
              e3.strstart += e3.lookahead, e3.lookahead = 0;
              var n3 = e3.block_start + r3;
              if ((0 === e3.strstart || e3.strstart >= n3) && (e3.lookahead = e3.strstart - n3, e3.strstart = n3, N2(e3, false), 0 === e3.strm.avail_out)) return A2;
              if (e3.strstart - e3.block_start >= e3.w_size - z2 && (N2(e3, false), 0 === e3.strm.avail_out)) return A2;
            }
            return e3.insert = 0, t3 === f2 ? (N2(e3, true), 0 === e3.strm.avail_out ? O2 : B2) : (e3.strstart > e3.block_start && (N2(e3, false), e3.strm.avail_out), A2);
          }), new M2(4, 4, 8, 4, Z2), new M2(4, 5, 16, 8, Z2), new M2(4, 6, 32, 32, Z2), new M2(4, 4, 16, 16, W2), new M2(8, 16, 32, 32, W2), new M2(8, 16, 128, 128, W2), new M2(8, 32, 128, 256, W2), new M2(32, 128, 258, 1024, W2), new M2(32, 258, 258, 4096, W2)], r2.deflateInit = function(e3, t3) {
            return Y2(e3, t3, v2, 15, 8, 0);
          }, r2.deflateInit2 = Y2, r2.deflateReset = K2, r2.deflateResetKeep = G2, r2.deflateSetHeader = function(e3, t3) {
            return e3 && e3.state ? 2 !== e3.state.wrap ? _2 : (e3.state.gzhead = t3, m2) : _2;
          }, r2.deflate = function(e3, t3) {
            var r3, n3, i3, s3;
            if (!e3 || !e3.state || 5 < t3 || t3 < 0) return e3 ? R2(e3, _2) : _2;
            if (n3 = e3.state, !e3.output || !e3.input && 0 !== e3.avail_in || 666 === n3.status && t3 !== f2) return R2(e3, 0 === e3.avail_out ? -5 : _2);
            if (n3.strm = e3, r3 = n3.last_flush, n3.last_flush = t3, n3.status === C2) if (2 === n3.wrap) e3.adler = 0, U2(n3, 31), U2(n3, 139), U2(n3, 8), n3.gzhead ? (U2(n3, (n3.gzhead.text ? 1 : 0) + (n3.gzhead.hcrc ? 2 : 0) + (n3.gzhead.extra ? 4 : 0) + (n3.gzhead.name ? 8 : 0) + (n3.gzhead.comment ? 16 : 0)), U2(n3, 255 & n3.gzhead.time), U2(n3, n3.gzhead.time >> 8 & 255), U2(n3, n3.gzhead.time >> 16 & 255), U2(n3, n3.gzhead.time >> 24 & 255), U2(n3, 9 === n3.level ? 2 : 2 <= n3.strategy || n3.level < 2 ? 4 : 0), U2(n3, 255 & n3.gzhead.os), n3.gzhead.extra && n3.gzhead.extra.length && (U2(n3, 255 & n3.gzhead.extra.length), U2(n3, n3.gzhead.extra.length >> 8 & 255)), n3.gzhead.hcrc && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending, 0)), n3.gzindex = 0, n3.status = 69) : (U2(n3, 0), U2(n3, 0), U2(n3, 0), U2(n3, 0), U2(n3, 0), U2(n3, 9 === n3.level ? 2 : 2 <= n3.strategy || n3.level < 2 ? 4 : 0), U2(n3, 3), n3.status = E2);
            else {
              var a3 = v2 + (n3.w_bits - 8 << 4) << 8;
              a3 |= (2 <= n3.strategy || n3.level < 2 ? 0 : n3.level < 6 ? 1 : 6 === n3.level ? 2 : 3) << 6, 0 !== n3.strstart && (a3 |= 32), a3 += 31 - a3 % 31, n3.status = E2, P2(n3, a3), 0 !== n3.strstart && (P2(n3, e3.adler >>> 16), P2(n3, 65535 & e3.adler)), e3.adler = 1;
            }
            if (69 === n3.status) if (n3.gzhead.extra) {
              for (i3 = n3.pending; n3.gzindex < (65535 & n3.gzhead.extra.length) && (n3.pending !== n3.pending_buf_size || (n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), F2(e3), i3 = n3.pending, n3.pending !== n3.pending_buf_size)); ) U2(n3, 255 & n3.gzhead.extra[n3.gzindex]), n3.gzindex++;
              n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), n3.gzindex === n3.gzhead.extra.length && (n3.gzindex = 0, n3.status = 73);
            } else n3.status = 73;
            if (73 === n3.status) if (n3.gzhead.name) {
              i3 = n3.pending;
              do {
                if (n3.pending === n3.pending_buf_size && (n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), F2(e3), i3 = n3.pending, n3.pending === n3.pending_buf_size)) {
                  s3 = 1;
                  break;
                }
                s3 = n3.gzindex < n3.gzhead.name.length ? 255 & n3.gzhead.name.charCodeAt(n3.gzindex++) : 0, U2(n3, s3);
              } while (0 !== s3);
              n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), 0 === s3 && (n3.gzindex = 0, n3.status = 91);
            } else n3.status = 91;
            if (91 === n3.status) if (n3.gzhead.comment) {
              i3 = n3.pending;
              do {
                if (n3.pending === n3.pending_buf_size && (n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), F2(e3), i3 = n3.pending, n3.pending === n3.pending_buf_size)) {
                  s3 = 1;
                  break;
                }
                s3 = n3.gzindex < n3.gzhead.comment.length ? 255 & n3.gzhead.comment.charCodeAt(n3.gzindex++) : 0, U2(n3, s3);
              } while (0 !== s3);
              n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), 0 === s3 && (n3.status = 103);
            } else n3.status = 103;
            if (103 === n3.status && (n3.gzhead.hcrc ? (n3.pending + 2 > n3.pending_buf_size && F2(e3), n3.pending + 2 <= n3.pending_buf_size && (U2(n3, 255 & e3.adler), U2(n3, e3.adler >> 8 & 255), e3.adler = 0, n3.status = E2)) : n3.status = E2), 0 !== n3.pending) {
              if (F2(e3), 0 === e3.avail_out) return n3.last_flush = -1, m2;
            } else if (0 === e3.avail_in && T2(t3) <= T2(r3) && t3 !== f2) return R2(e3, -5);
            if (666 === n3.status && 0 !== e3.avail_in) return R2(e3, -5);
            if (0 !== e3.avail_in || 0 !== n3.lookahead || t3 !== l2 && 666 !== n3.status) {
              var o3 = 2 === n3.strategy ? function(e4, t4) {
                for (var r4; ; ) {
                  if (0 === e4.lookahead && (j2(e4), 0 === e4.lookahead)) {
                    if (t4 === l2) return A2;
                    break;
                  }
                  if (e4.match_length = 0, r4 = u2._tr_tally(e4, 0, e4.window[e4.strstart]), e4.lookahead--, e4.strstart++, r4 && (N2(e4, false), 0 === e4.strm.avail_out)) return A2;
                }
                return e4.insert = 0, t4 === f2 ? (N2(e4, true), 0 === e4.strm.avail_out ? O2 : B2) : e4.last_lit && (N2(e4, false), 0 === e4.strm.avail_out) ? A2 : I2;
              }(n3, t3) : 3 === n3.strategy ? function(e4, t4) {
                for (var r4, n4, i4, s4, a4 = e4.window; ; ) {
                  if (e4.lookahead <= S2) {
                    if (j2(e4), e4.lookahead <= S2 && t4 === l2) return A2;
                    if (0 === e4.lookahead) break;
                  }
                  if (e4.match_length = 0, e4.lookahead >= x2 && 0 < e4.strstart && (n4 = a4[i4 = e4.strstart - 1]) === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4]) {
                    s4 = e4.strstart + S2;
                    do {
                    } while (n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && i4 < s4);
                    e4.match_length = S2 - (s4 - i4), e4.match_length > e4.lookahead && (e4.match_length = e4.lookahead);
                  }
                  if (e4.match_length >= x2 ? (r4 = u2._tr_tally(e4, 1, e4.match_length - x2), e4.lookahead -= e4.match_length, e4.strstart += e4.match_length, e4.match_length = 0) : (r4 = u2._tr_tally(e4, 0, e4.window[e4.strstart]), e4.lookahead--, e4.strstart++), r4 && (N2(e4, false), 0 === e4.strm.avail_out)) return A2;
                }
                return e4.insert = 0, t4 === f2 ? (N2(e4, true), 0 === e4.strm.avail_out ? O2 : B2) : e4.last_lit && (N2(e4, false), 0 === e4.strm.avail_out) ? A2 : I2;
              }(n3, t3) : h2[n3.level].func(n3, t3);
              if (o3 !== O2 && o3 !== B2 || (n3.status = 666), o3 === A2 || o3 === O2) return 0 === e3.avail_out && (n3.last_flush = -1), m2;
              if (o3 === I2 && (1 === t3 ? u2._tr_align(n3) : 5 !== t3 && (u2._tr_stored_block(n3, 0, 0, false), 3 === t3 && (D2(n3.head), 0 === n3.lookahead && (n3.strstart = 0, n3.block_start = 0, n3.insert = 0))), F2(e3), 0 === e3.avail_out)) return n3.last_flush = -1, m2;
            }
            return t3 !== f2 ? m2 : n3.wrap <= 0 ? 1 : (2 === n3.wrap ? (U2(n3, 255 & e3.adler), U2(n3, e3.adler >> 8 & 255), U2(n3, e3.adler >> 16 & 255), U2(n3, e3.adler >> 24 & 255), U2(n3, 255 & e3.total_in), U2(n3, e3.total_in >> 8 & 255), U2(n3, e3.total_in >> 16 & 255), U2(n3, e3.total_in >> 24 & 255)) : (P2(n3, e3.adler >>> 16), P2(n3, 65535 & e3.adler)), F2(e3), 0 < n3.wrap && (n3.wrap = -n3.wrap), 0 !== n3.pending ? m2 : 1);
          }, r2.deflateEnd = function(e3) {
            var t3;
            return e3 && e3.state ? (t3 = e3.state.status) !== C2 && 69 !== t3 && 73 !== t3 && 91 !== t3 && 103 !== t3 && t3 !== E2 && 666 !== t3 ? R2(e3, _2) : (e3.state = null, t3 === E2 ? R2(e3, -3) : m2) : _2;
          }, r2.deflateSetDictionary = function(e3, t3) {
            var r3, n3, i3, s3, a3, o3, h3, u3, l3 = t3.length;
            if (!e3 || !e3.state) return _2;
            if (2 === (s3 = (r3 = e3.state).wrap) || 1 === s3 && r3.status !== C2 || r3.lookahead) return _2;
            for (1 === s3 && (e3.adler = d2(e3.adler, t3, l3, 0)), r3.wrap = 0, l3 >= r3.w_size && (0 === s3 && (D2(r3.head), r3.strstart = 0, r3.block_start = 0, r3.insert = 0), u3 = new c2.Buf8(r3.w_size), c2.arraySet(u3, t3, l3 - r3.w_size, r3.w_size, 0), t3 = u3, l3 = r3.w_size), a3 = e3.avail_in, o3 = e3.next_in, h3 = e3.input, e3.avail_in = l3, e3.next_in = 0, e3.input = t3, j2(r3); r3.lookahead >= x2; ) {
              for (n3 = r3.strstart, i3 = r3.lookahead - (x2 - 1); r3.ins_h = (r3.ins_h << r3.hash_shift ^ r3.window[n3 + x2 - 1]) & r3.hash_mask, r3.prev[n3 & r3.w_mask] = r3.head[r3.ins_h], r3.head[r3.ins_h] = n3, n3++, --i3; ) ;
              r3.strstart = n3, r3.lookahead = x2 - 1, j2(r3);
            }
            return r3.strstart += r3.lookahead, r3.block_start = r3.strstart, r3.insert = r3.lookahead, r3.lookahead = 0, r3.match_length = r3.prev_length = x2 - 1, r3.match_available = 0, e3.next_in = o3, e3.input = h3, e3.avail_in = a3, r3.wrap = s3, m2;
          }, r2.deflateInfo = "pako deflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e2, t2, r2) {
          "use strict";
          t2.exports = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
          };
        }, {}], 48: [function(e2, t2, r2) {
          "use strict";
          t2.exports = function(e3, t3) {
            var r3, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d2, p2, m2, _2, g2, b2, v2, y2, w2, k2, x2, S2, z2, C2;
            r3 = e3.state, n2 = e3.next_in, z2 = e3.input, i2 = n2 + (e3.avail_in - 5), s2 = e3.next_out, C2 = e3.output, a2 = s2 - (t3 - e3.avail_out), o2 = s2 + (e3.avail_out - 257), h2 = r3.dmax, u2 = r3.wsize, l2 = r3.whave, f2 = r3.wnext, c2 = r3.window, d2 = r3.hold, p2 = r3.bits, m2 = r3.lencode, _2 = r3.distcode, g2 = (1 << r3.lenbits) - 1, b2 = (1 << r3.distbits) - 1;
            e: do {
              p2 < 15 && (d2 += z2[n2++] << p2, p2 += 8, d2 += z2[n2++] << p2, p2 += 8), v2 = m2[d2 & g2];
              t: for (; ; ) {
                if (d2 >>>= y2 = v2 >>> 24, p2 -= y2, 0 === (y2 = v2 >>> 16 & 255)) C2[s2++] = 65535 & v2;
                else {
                  if (!(16 & y2)) {
                    if (0 == (64 & y2)) {
                      v2 = m2[(65535 & v2) + (d2 & (1 << y2) - 1)];
                      continue t;
                    }
                    if (32 & y2) {
                      r3.mode = 12;
                      break e;
                    }
                    e3.msg = "invalid literal/length code", r3.mode = 30;
                    break e;
                  }
                  w2 = 65535 & v2, (y2 &= 15) && (p2 < y2 && (d2 += z2[n2++] << p2, p2 += 8), w2 += d2 & (1 << y2) - 1, d2 >>>= y2, p2 -= y2), p2 < 15 && (d2 += z2[n2++] << p2, p2 += 8, d2 += z2[n2++] << p2, p2 += 8), v2 = _2[d2 & b2];
                  r: for (; ; ) {
                    if (d2 >>>= y2 = v2 >>> 24, p2 -= y2, !(16 & (y2 = v2 >>> 16 & 255))) {
                      if (0 == (64 & y2)) {
                        v2 = _2[(65535 & v2) + (d2 & (1 << y2) - 1)];
                        continue r;
                      }
                      e3.msg = "invalid distance code", r3.mode = 30;
                      break e;
                    }
                    if (k2 = 65535 & v2, p2 < (y2 &= 15) && (d2 += z2[n2++] << p2, (p2 += 8) < y2 && (d2 += z2[n2++] << p2, p2 += 8)), h2 < (k2 += d2 & (1 << y2) - 1)) {
                      e3.msg = "invalid distance too far back", r3.mode = 30;
                      break e;
                    }
                    if (d2 >>>= y2, p2 -= y2, (y2 = s2 - a2) < k2) {
                      if (l2 < (y2 = k2 - y2) && r3.sane) {
                        e3.msg = "invalid distance too far back", r3.mode = 30;
                        break e;
                      }
                      if (S2 = c2, (x2 = 0) === f2) {
                        if (x2 += u2 - y2, y2 < w2) {
                          for (w2 -= y2; C2[s2++] = c2[x2++], --y2; ) ;
                          x2 = s2 - k2, S2 = C2;
                        }
                      } else if (f2 < y2) {
                        if (x2 += u2 + f2 - y2, (y2 -= f2) < w2) {
                          for (w2 -= y2; C2[s2++] = c2[x2++], --y2; ) ;
                          if (x2 = 0, f2 < w2) {
                            for (w2 -= y2 = f2; C2[s2++] = c2[x2++], --y2; ) ;
                            x2 = s2 - k2, S2 = C2;
                          }
                        }
                      } else if (x2 += f2 - y2, y2 < w2) {
                        for (w2 -= y2; C2[s2++] = c2[x2++], --y2; ) ;
                        x2 = s2 - k2, S2 = C2;
                      }
                      for (; 2 < w2; ) C2[s2++] = S2[x2++], C2[s2++] = S2[x2++], C2[s2++] = S2[x2++], w2 -= 3;
                      w2 && (C2[s2++] = S2[x2++], 1 < w2 && (C2[s2++] = S2[x2++]));
                    } else {
                      for (x2 = s2 - k2; C2[s2++] = C2[x2++], C2[s2++] = C2[x2++], C2[s2++] = C2[x2++], 2 < (w2 -= 3); ) ;
                      w2 && (C2[s2++] = C2[x2++], 1 < w2 && (C2[s2++] = C2[x2++]));
                    }
                    break;
                  }
                }
                break;
              }
            } while (n2 < i2 && s2 < o2);
            n2 -= w2 = p2 >> 3, d2 &= (1 << (p2 -= w2 << 3)) - 1, e3.next_in = n2, e3.next_out = s2, e3.avail_in = n2 < i2 ? i2 - n2 + 5 : 5 - (n2 - i2), e3.avail_out = s2 < o2 ? o2 - s2 + 257 : 257 - (s2 - o2), r3.hold = d2, r3.bits = p2;
          };
        }, {}], 49: [function(e2, t2, r2) {
          "use strict";
          var I2 = e2("../utils/common"), O2 = e2("./adler32"), B2 = e2("./crc32"), R2 = e2("./inffast"), T2 = e2("./inftrees"), D2 = 1, F2 = 2, N2 = 0, U2 = -2, P2 = 1, n2 = 852, i2 = 592;
          function L2(e3) {
            return (e3 >>> 24 & 255) + (e3 >>> 8 & 65280) + ((65280 & e3) << 8) + ((255 & e3) << 24);
          }
          function s2() {
            this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I2.Buf16(320), this.work = new I2.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
          }
          function a2(e3) {
            var t3;
            return e3 && e3.state ? (t3 = e3.state, e3.total_in = e3.total_out = t3.total = 0, e3.msg = "", t3.wrap && (e3.adler = 1 & t3.wrap), t3.mode = P2, t3.last = 0, t3.havedict = 0, t3.dmax = 32768, t3.head = null, t3.hold = 0, t3.bits = 0, t3.lencode = t3.lendyn = new I2.Buf32(n2), t3.distcode = t3.distdyn = new I2.Buf32(i2), t3.sane = 1, t3.back = -1, N2) : U2;
          }
          function o2(e3) {
            var t3;
            return e3 && e3.state ? ((t3 = e3.state).wsize = 0, t3.whave = 0, t3.wnext = 0, a2(e3)) : U2;
          }
          function h2(e3, t3) {
            var r3, n3;
            return e3 && e3.state ? (n3 = e3.state, t3 < 0 ? (r3 = 0, t3 = -t3) : (r3 = 1 + (t3 >> 4), t3 < 48 && (t3 &= 15)), t3 && (t3 < 8 || 15 < t3) ? U2 : (null !== n3.window && n3.wbits !== t3 && (n3.window = null), n3.wrap = r3, n3.wbits = t3, o2(e3))) : U2;
          }
          function u2(e3, t3) {
            var r3, n3;
            return e3 ? (n3 = new s2(), (e3.state = n3).window = null, (r3 = h2(e3, t3)) !== N2 && (e3.state = null), r3) : U2;
          }
          var l2, f2, c2 = true;
          function j2(e3) {
            if (c2) {
              var t3;
              for (l2 = new I2.Buf32(512), f2 = new I2.Buf32(32), t3 = 0; t3 < 144; ) e3.lens[t3++] = 8;
              for (; t3 < 256; ) e3.lens[t3++] = 9;
              for (; t3 < 280; ) e3.lens[t3++] = 7;
              for (; t3 < 288; ) e3.lens[t3++] = 8;
              for (T2(D2, e3.lens, 0, 288, l2, 0, e3.work, { bits: 9 }), t3 = 0; t3 < 32; ) e3.lens[t3++] = 5;
              T2(F2, e3.lens, 0, 32, f2, 0, e3.work, { bits: 5 }), c2 = false;
            }
            e3.lencode = l2, e3.lenbits = 9, e3.distcode = f2, e3.distbits = 5;
          }
          function Z2(e3, t3, r3, n3) {
            var i3, s3 = e3.state;
            return null === s3.window && (s3.wsize = 1 << s3.wbits, s3.wnext = 0, s3.whave = 0, s3.window = new I2.Buf8(s3.wsize)), n3 >= s3.wsize ? (I2.arraySet(s3.window, t3, r3 - s3.wsize, s3.wsize, 0), s3.wnext = 0, s3.whave = s3.wsize) : (n3 < (i3 = s3.wsize - s3.wnext) && (i3 = n3), I2.arraySet(s3.window, t3, r3 - n3, i3, s3.wnext), (n3 -= i3) ? (I2.arraySet(s3.window, t3, r3 - n3, n3, 0), s3.wnext = n3, s3.whave = s3.wsize) : (s3.wnext += i3, s3.wnext === s3.wsize && (s3.wnext = 0), s3.whave < s3.wsize && (s3.whave += i3))), 0;
          }
          r2.inflateReset = o2, r2.inflateReset2 = h2, r2.inflateResetKeep = a2, r2.inflateInit = function(e3) {
            return u2(e3, 15);
          }, r2.inflateInit2 = u2, r2.inflate = function(e3, t3) {
            var r3, n3, i3, s3, a3, o3, h3, u3, l3, f3, c3, d2, p2, m2, _2, g2, b2, v2, y2, w2, k2, x2, S2, z2, C2 = 0, E2 = new I2.Buf8(4), A2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e3 || !e3.state || !e3.output || !e3.input && 0 !== e3.avail_in) return U2;
            12 === (r3 = e3.state).mode && (r3.mode = 13), a3 = e3.next_out, i3 = e3.output, h3 = e3.avail_out, s3 = e3.next_in, n3 = e3.input, o3 = e3.avail_in, u3 = r3.hold, l3 = r3.bits, f3 = o3, c3 = h3, x2 = N2;
            e: for (; ; ) switch (r3.mode) {
              case P2:
                if (0 === r3.wrap) {
                  r3.mode = 13;
                  break;
                }
                for (; l3 < 16; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                if (2 & r3.wrap && 35615 === u3) {
                  E2[r3.check = 0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0), l3 = u3 = 0, r3.mode = 2;
                  break;
                }
                if (r3.flags = 0, r3.head && (r3.head.done = false), !(1 & r3.wrap) || (((255 & u3) << 8) + (u3 >> 8)) % 31) {
                  e3.msg = "incorrect header check", r3.mode = 30;
                  break;
                }
                if (8 != (15 & u3)) {
                  e3.msg = "unknown compression method", r3.mode = 30;
                  break;
                }
                if (l3 -= 4, k2 = 8 + (15 & (u3 >>>= 4)), 0 === r3.wbits) r3.wbits = k2;
                else if (k2 > r3.wbits) {
                  e3.msg = "invalid window size", r3.mode = 30;
                  break;
                }
                r3.dmax = 1 << k2, e3.adler = r3.check = 1, r3.mode = 512 & u3 ? 10 : 12, l3 = u3 = 0;
                break;
              case 2:
                for (; l3 < 16; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                if (r3.flags = u3, 8 != (255 & r3.flags)) {
                  e3.msg = "unknown compression method", r3.mode = 30;
                  break;
                }
                if (57344 & r3.flags) {
                  e3.msg = "unknown header flags set", r3.mode = 30;
                  break;
                }
                r3.head && (r3.head.text = u3 >> 8 & 1), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0)), l3 = u3 = 0, r3.mode = 3;
              case 3:
                for (; l3 < 32; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                r3.head && (r3.head.time = u3), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, E2[2] = u3 >>> 16 & 255, E2[3] = u3 >>> 24 & 255, r3.check = B2(r3.check, E2, 4, 0)), l3 = u3 = 0, r3.mode = 4;
              case 4:
                for (; l3 < 16; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                r3.head && (r3.head.xflags = 255 & u3, r3.head.os = u3 >> 8), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0)), l3 = u3 = 0, r3.mode = 5;
              case 5:
                if (1024 & r3.flags) {
                  for (; l3 < 16; ) {
                    if (0 === o3) break e;
                    o3--, u3 += n3[s3++] << l3, l3 += 8;
                  }
                  r3.length = u3, r3.head && (r3.head.extra_len = u3), 512 & r3.flags && (E2[0] = 255 & u3, E2[1] = u3 >>> 8 & 255, r3.check = B2(r3.check, E2, 2, 0)), l3 = u3 = 0;
                } else r3.head && (r3.head.extra = null);
                r3.mode = 6;
              case 6:
                if (1024 & r3.flags && (o3 < (d2 = r3.length) && (d2 = o3), d2 && (r3.head && (k2 = r3.head.extra_len - r3.length, r3.head.extra || (r3.head.extra = new Array(r3.head.extra_len)), I2.arraySet(r3.head.extra, n3, s3, d2, k2)), 512 & r3.flags && (r3.check = B2(r3.check, n3, d2, s3)), o3 -= d2, s3 += d2, r3.length -= d2), r3.length)) break e;
                r3.length = 0, r3.mode = 7;
              case 7:
                if (2048 & r3.flags) {
                  if (0 === o3) break e;
                  for (d2 = 0; k2 = n3[s3 + d2++], r3.head && k2 && r3.length < 65536 && (r3.head.name += String.fromCharCode(k2)), k2 && d2 < o3; ) ;
                  if (512 & r3.flags && (r3.check = B2(r3.check, n3, d2, s3)), o3 -= d2, s3 += d2, k2) break e;
                } else r3.head && (r3.head.name = null);
                r3.length = 0, r3.mode = 8;
              case 8:
                if (4096 & r3.flags) {
                  if (0 === o3) break e;
                  for (d2 = 0; k2 = n3[s3 + d2++], r3.head && k2 && r3.length < 65536 && (r3.head.comment += String.fromCharCode(k2)), k2 && d2 < o3; ) ;
                  if (512 & r3.flags && (r3.check = B2(r3.check, n3, d2, s3)), o3 -= d2, s3 += d2, k2) break e;
                } else r3.head && (r3.head.comment = null);
                r3.mode = 9;
              case 9:
                if (512 & r3.flags) {
                  for (; l3 < 16; ) {
                    if (0 === o3) break e;
                    o3--, u3 += n3[s3++] << l3, l3 += 8;
                  }
                  if (u3 !== (65535 & r3.check)) {
                    e3.msg = "header crc mismatch", r3.mode = 30;
                    break;
                  }
                  l3 = u3 = 0;
                }
                r3.head && (r3.head.hcrc = r3.flags >> 9 & 1, r3.head.done = true), e3.adler = r3.check = 0, r3.mode = 12;
                break;
              case 10:
                for (; l3 < 32; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                e3.adler = r3.check = L2(u3), l3 = u3 = 0, r3.mode = 11;
              case 11:
                if (0 === r3.havedict) return e3.next_out = a3, e3.avail_out = h3, e3.next_in = s3, e3.avail_in = o3, r3.hold = u3, r3.bits = l3, 2;
                e3.adler = r3.check = 1, r3.mode = 12;
              case 12:
                if (5 === t3 || 6 === t3) break e;
              case 13:
                if (r3.last) {
                  u3 >>>= 7 & l3, l3 -= 7 & l3, r3.mode = 27;
                  break;
                }
                for (; l3 < 3; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                switch (r3.last = 1 & u3, l3 -= 1, 3 & (u3 >>>= 1)) {
                  case 0:
                    r3.mode = 14;
                    break;
                  case 1:
                    if (j2(r3), r3.mode = 20, 6 !== t3) break;
                    u3 >>>= 2, l3 -= 2;
                    break e;
                  case 2:
                    r3.mode = 17;
                    break;
                  case 3:
                    e3.msg = "invalid block type", r3.mode = 30;
                }
                u3 >>>= 2, l3 -= 2;
                break;
              case 14:
                for (u3 >>>= 7 & l3, l3 -= 7 & l3; l3 < 32; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                if ((65535 & u3) != (u3 >>> 16 ^ 65535)) {
                  e3.msg = "invalid stored block lengths", r3.mode = 30;
                  break;
                }
                if (r3.length = 65535 & u3, l3 = u3 = 0, r3.mode = 15, 6 === t3) break e;
              case 15:
                r3.mode = 16;
              case 16:
                if (d2 = r3.length) {
                  if (o3 < d2 && (d2 = o3), h3 < d2 && (d2 = h3), 0 === d2) break e;
                  I2.arraySet(i3, n3, s3, d2, a3), o3 -= d2, s3 += d2, h3 -= d2, a3 += d2, r3.length -= d2;
                  break;
                }
                r3.mode = 12;
                break;
              case 17:
                for (; l3 < 14; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                if (r3.nlen = 257 + (31 & u3), u3 >>>= 5, l3 -= 5, r3.ndist = 1 + (31 & u3), u3 >>>= 5, l3 -= 5, r3.ncode = 4 + (15 & u3), u3 >>>= 4, l3 -= 4, 286 < r3.nlen || 30 < r3.ndist) {
                  e3.msg = "too many length or distance symbols", r3.mode = 30;
                  break;
                }
                r3.have = 0, r3.mode = 18;
              case 18:
                for (; r3.have < r3.ncode; ) {
                  for (; l3 < 3; ) {
                    if (0 === o3) break e;
                    o3--, u3 += n3[s3++] << l3, l3 += 8;
                  }
                  r3.lens[A2[r3.have++]] = 7 & u3, u3 >>>= 3, l3 -= 3;
                }
                for (; r3.have < 19; ) r3.lens[A2[r3.have++]] = 0;
                if (r3.lencode = r3.lendyn, r3.lenbits = 7, S2 = { bits: r3.lenbits }, x2 = T2(0, r3.lens, 0, 19, r3.lencode, 0, r3.work, S2), r3.lenbits = S2.bits, x2) {
                  e3.msg = "invalid code lengths set", r3.mode = 30;
                  break;
                }
                r3.have = 0, r3.mode = 19;
              case 19:
                for (; r3.have < r3.nlen + r3.ndist; ) {
                  for (; g2 = (C2 = r3.lencode[u3 & (1 << r3.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_2 = C2 >>> 24) <= l3); ) {
                    if (0 === o3) break e;
                    o3--, u3 += n3[s3++] << l3, l3 += 8;
                  }
                  if (b2 < 16) u3 >>>= _2, l3 -= _2, r3.lens[r3.have++] = b2;
                  else {
                    if (16 === b2) {
                      for (z2 = _2 + 2; l3 < z2; ) {
                        if (0 === o3) break e;
                        o3--, u3 += n3[s3++] << l3, l3 += 8;
                      }
                      if (u3 >>>= _2, l3 -= _2, 0 === r3.have) {
                        e3.msg = "invalid bit length repeat", r3.mode = 30;
                        break;
                      }
                      k2 = r3.lens[r3.have - 1], d2 = 3 + (3 & u3), u3 >>>= 2, l3 -= 2;
                    } else if (17 === b2) {
                      for (z2 = _2 + 3; l3 < z2; ) {
                        if (0 === o3) break e;
                        o3--, u3 += n3[s3++] << l3, l3 += 8;
                      }
                      l3 -= _2, k2 = 0, d2 = 3 + (7 & (u3 >>>= _2)), u3 >>>= 3, l3 -= 3;
                    } else {
                      for (z2 = _2 + 7; l3 < z2; ) {
                        if (0 === o3) break e;
                        o3--, u3 += n3[s3++] << l3, l3 += 8;
                      }
                      l3 -= _2, k2 = 0, d2 = 11 + (127 & (u3 >>>= _2)), u3 >>>= 7, l3 -= 7;
                    }
                    if (r3.have + d2 > r3.nlen + r3.ndist) {
                      e3.msg = "invalid bit length repeat", r3.mode = 30;
                      break;
                    }
                    for (; d2--; ) r3.lens[r3.have++] = k2;
                  }
                }
                if (30 === r3.mode) break;
                if (0 === r3.lens[256]) {
                  e3.msg = "invalid code -- missing end-of-block", r3.mode = 30;
                  break;
                }
                if (r3.lenbits = 9, S2 = { bits: r3.lenbits }, x2 = T2(D2, r3.lens, 0, r3.nlen, r3.lencode, 0, r3.work, S2), r3.lenbits = S2.bits, x2) {
                  e3.msg = "invalid literal/lengths set", r3.mode = 30;
                  break;
                }
                if (r3.distbits = 6, r3.distcode = r3.distdyn, S2 = { bits: r3.distbits }, x2 = T2(F2, r3.lens, r3.nlen, r3.ndist, r3.distcode, 0, r3.work, S2), r3.distbits = S2.bits, x2) {
                  e3.msg = "invalid distances set", r3.mode = 30;
                  break;
                }
                if (r3.mode = 20, 6 === t3) break e;
              case 20:
                r3.mode = 21;
              case 21:
                if (6 <= o3 && 258 <= h3) {
                  e3.next_out = a3, e3.avail_out = h3, e3.next_in = s3, e3.avail_in = o3, r3.hold = u3, r3.bits = l3, R2(e3, c3), a3 = e3.next_out, i3 = e3.output, h3 = e3.avail_out, s3 = e3.next_in, n3 = e3.input, o3 = e3.avail_in, u3 = r3.hold, l3 = r3.bits, 12 === r3.mode && (r3.back = -1);
                  break;
                }
                for (r3.back = 0; g2 = (C2 = r3.lencode[u3 & (1 << r3.lenbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_2 = C2 >>> 24) <= l3); ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                if (g2 && 0 == (240 & g2)) {
                  for (v2 = _2, y2 = g2, w2 = b2; g2 = (C2 = r3.lencode[w2 + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b2 = 65535 & C2, !(v2 + (_2 = C2 >>> 24) <= l3); ) {
                    if (0 === o3) break e;
                    o3--, u3 += n3[s3++] << l3, l3 += 8;
                  }
                  u3 >>>= v2, l3 -= v2, r3.back += v2;
                }
                if (u3 >>>= _2, l3 -= _2, r3.back += _2, r3.length = b2, 0 === g2) {
                  r3.mode = 26;
                  break;
                }
                if (32 & g2) {
                  r3.back = -1, r3.mode = 12;
                  break;
                }
                if (64 & g2) {
                  e3.msg = "invalid literal/length code", r3.mode = 30;
                  break;
                }
                r3.extra = 15 & g2, r3.mode = 22;
              case 22:
                if (r3.extra) {
                  for (z2 = r3.extra; l3 < z2; ) {
                    if (0 === o3) break e;
                    o3--, u3 += n3[s3++] << l3, l3 += 8;
                  }
                  r3.length += u3 & (1 << r3.extra) - 1, u3 >>>= r3.extra, l3 -= r3.extra, r3.back += r3.extra;
                }
                r3.was = r3.length, r3.mode = 23;
              case 23:
                for (; g2 = (C2 = r3.distcode[u3 & (1 << r3.distbits) - 1]) >>> 16 & 255, b2 = 65535 & C2, !((_2 = C2 >>> 24) <= l3); ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                if (0 == (240 & g2)) {
                  for (v2 = _2, y2 = g2, w2 = b2; g2 = (C2 = r3.distcode[w2 + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b2 = 65535 & C2, !(v2 + (_2 = C2 >>> 24) <= l3); ) {
                    if (0 === o3) break e;
                    o3--, u3 += n3[s3++] << l3, l3 += 8;
                  }
                  u3 >>>= v2, l3 -= v2, r3.back += v2;
                }
                if (u3 >>>= _2, l3 -= _2, r3.back += _2, 64 & g2) {
                  e3.msg = "invalid distance code", r3.mode = 30;
                  break;
                }
                r3.offset = b2, r3.extra = 15 & g2, r3.mode = 24;
              case 24:
                if (r3.extra) {
                  for (z2 = r3.extra; l3 < z2; ) {
                    if (0 === o3) break e;
                    o3--, u3 += n3[s3++] << l3, l3 += 8;
                  }
                  r3.offset += u3 & (1 << r3.extra) - 1, u3 >>>= r3.extra, l3 -= r3.extra, r3.back += r3.extra;
                }
                if (r3.offset > r3.dmax) {
                  e3.msg = "invalid distance too far back", r3.mode = 30;
                  break;
                }
                r3.mode = 25;
              case 25:
                if (0 === h3) break e;
                if (d2 = c3 - h3, r3.offset > d2) {
                  if ((d2 = r3.offset - d2) > r3.whave && r3.sane) {
                    e3.msg = "invalid distance too far back", r3.mode = 30;
                    break;
                  }
                  p2 = d2 > r3.wnext ? (d2 -= r3.wnext, r3.wsize - d2) : r3.wnext - d2, d2 > r3.length && (d2 = r3.length), m2 = r3.window;
                } else m2 = i3, p2 = a3 - r3.offset, d2 = r3.length;
                for (h3 < d2 && (d2 = h3), h3 -= d2, r3.length -= d2; i3[a3++] = m2[p2++], --d2; ) ;
                0 === r3.length && (r3.mode = 21);
                break;
              case 26:
                if (0 === h3) break e;
                i3[a3++] = r3.length, h3--, r3.mode = 21;
                break;
              case 27:
                if (r3.wrap) {
                  for (; l3 < 32; ) {
                    if (0 === o3) break e;
                    o3--, u3 |= n3[s3++] << l3, l3 += 8;
                  }
                  if (c3 -= h3, e3.total_out += c3, r3.total += c3, c3 && (e3.adler = r3.check = r3.flags ? B2(r3.check, i3, c3, a3 - c3) : O2(r3.check, i3, c3, a3 - c3)), c3 = h3, (r3.flags ? u3 : L2(u3)) !== r3.check) {
                    e3.msg = "incorrect data check", r3.mode = 30;
                    break;
                  }
                  l3 = u3 = 0;
                }
                r3.mode = 28;
              case 28:
                if (r3.wrap && r3.flags) {
                  for (; l3 < 32; ) {
                    if (0 === o3) break e;
                    o3--, u3 += n3[s3++] << l3, l3 += 8;
                  }
                  if (u3 !== (4294967295 & r3.total)) {
                    e3.msg = "incorrect length check", r3.mode = 30;
                    break;
                  }
                  l3 = u3 = 0;
                }
                r3.mode = 29;
              case 29:
                x2 = 1;
                break e;
              case 30:
                x2 = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return U2;
            }
            return e3.next_out = a3, e3.avail_out = h3, e3.next_in = s3, e3.avail_in = o3, r3.hold = u3, r3.bits = l3, (r3.wsize || c3 !== e3.avail_out && r3.mode < 30 && (r3.mode < 27 || 4 !== t3)) && Z2(e3, e3.output, e3.next_out, c3 - e3.avail_out) ? (r3.mode = 31, -4) : (f3 -= e3.avail_in, c3 -= e3.avail_out, e3.total_in += f3, e3.total_out += c3, r3.total += c3, r3.wrap && c3 && (e3.adler = r3.check = r3.flags ? B2(r3.check, i3, c3, e3.next_out - c3) : O2(r3.check, i3, c3, e3.next_out - c3)), e3.data_type = r3.bits + (r3.last ? 64 : 0) + (12 === r3.mode ? 128 : 0) + (20 === r3.mode || 15 === r3.mode ? 256 : 0), (0 == f3 && 0 === c3 || 4 === t3) && x2 === N2 && (x2 = -5), x2);
          }, r2.inflateEnd = function(e3) {
            if (!e3 || !e3.state) return U2;
            var t3 = e3.state;
            return t3.window && (t3.window = null), e3.state = null, N2;
          }, r2.inflateGetHeader = function(e3, t3) {
            var r3;
            return e3 && e3.state ? 0 == (2 & (r3 = e3.state).wrap) ? U2 : ((r3.head = t3).done = false, N2) : U2;
          }, r2.inflateSetDictionary = function(e3, t3) {
            var r3, n3 = t3.length;
            return e3 && e3.state ? 0 !== (r3 = e3.state).wrap && 11 !== r3.mode ? U2 : 11 === r3.mode && O2(1, t3, n3, 0) !== r3.check ? -3 : Z2(e3, t3, n3, n3) ? (r3.mode = 31, -4) : (r3.havedict = 1, N2) : U2;
          }, r2.inflateInfo = "pako inflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e2, t2, r2) {
          "use strict";
          var D2 = e2("../utils/common"), F2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N2 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U2 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P2 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          t2.exports = function(e3, t3, r3, n2, i2, s2, a2, o2) {
            var h2, u2, l2, f2, c2, d2, p2, m2, _2, g2 = o2.bits, b2 = 0, v2 = 0, y2 = 0, w2 = 0, k2 = 0, x2 = 0, S2 = 0, z2 = 0, C2 = 0, E2 = 0, A2 = null, I2 = 0, O2 = new D2.Buf16(16), B2 = new D2.Buf16(16), R2 = null, T2 = 0;
            for (b2 = 0; b2 <= 15; b2++) O2[b2] = 0;
            for (v2 = 0; v2 < n2; v2++) O2[t3[r3 + v2]]++;
            for (k2 = g2, w2 = 15; 1 <= w2 && 0 === O2[w2]; w2--) ;
            if (w2 < k2 && (k2 = w2), 0 === w2) return i2[s2++] = 20971520, i2[s2++] = 20971520, o2.bits = 1, 0;
            for (y2 = 1; y2 < w2 && 0 === O2[y2]; y2++) ;
            for (k2 < y2 && (k2 = y2), b2 = z2 = 1; b2 <= 15; b2++) if (z2 <<= 1, (z2 -= O2[b2]) < 0) return -1;
            if (0 < z2 && (0 === e3 || 1 !== w2)) return -1;
            for (B2[1] = 0, b2 = 1; b2 < 15; b2++) B2[b2 + 1] = B2[b2] + O2[b2];
            for (v2 = 0; v2 < n2; v2++) 0 !== t3[r3 + v2] && (a2[B2[t3[r3 + v2]]++] = v2);
            if (d2 = 0 === e3 ? (A2 = R2 = a2, 19) : 1 === e3 ? (A2 = F2, I2 -= 257, R2 = N2, T2 -= 257, 256) : (A2 = U2, R2 = P2, -1), b2 = y2, c2 = s2, S2 = v2 = E2 = 0, l2 = -1, f2 = (C2 = 1 << (x2 = k2)) - 1, 1 === e3 && 852 < C2 || 2 === e3 && 592 < C2) return 1;
            for (; ; ) {
              for (p2 = b2 - S2, _2 = a2[v2] < d2 ? (m2 = 0, a2[v2]) : a2[v2] > d2 ? (m2 = R2[T2 + a2[v2]], A2[I2 + a2[v2]]) : (m2 = 96, 0), h2 = 1 << b2 - S2, y2 = u2 = 1 << x2; i2[c2 + (E2 >> S2) + (u2 -= h2)] = p2 << 24 | m2 << 16 | _2 | 0, 0 !== u2; ) ;
              for (h2 = 1 << b2 - 1; E2 & h2; ) h2 >>= 1;
              if (0 !== h2 ? (E2 &= h2 - 1, E2 += h2) : E2 = 0, v2++, 0 == --O2[b2]) {
                if (b2 === w2) break;
                b2 = t3[r3 + a2[v2]];
              }
              if (k2 < b2 && (E2 & f2) !== l2) {
                for (0 === S2 && (S2 = k2), c2 += y2, z2 = 1 << (x2 = b2 - S2); x2 + S2 < w2 && !((z2 -= O2[x2 + S2]) <= 0); ) x2++, z2 <<= 1;
                if (C2 += 1 << x2, 1 === e3 && 852 < C2 || 2 === e3 && 592 < C2) return 1;
                i2[l2 = E2 & f2] = k2 << 24 | x2 << 16 | c2 - s2 | 0;
              }
            }
            return 0 !== E2 && (i2[c2 + E2] = b2 - S2 << 24 | 64 << 16 | 0), o2.bits = k2, 0;
          };
        }, { "../utils/common": 41 }], 51: [function(e2, t2, r2) {
          "use strict";
          t2.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
        }, {}], 52: [function(e2, t2, r2) {
          "use strict";
          var i2 = e2("../utils/common"), o2 = 0, h2 = 1;
          function n2(e3) {
            for (var t3 = e3.length; 0 <= --t3; ) e3[t3] = 0;
          }
          var s2 = 0, a2 = 29, u2 = 256, l2 = u2 + 1 + a2, f2 = 30, c2 = 19, _2 = 2 * l2 + 1, g2 = 15, d2 = 16, p2 = 7, m2 = 256, b2 = 16, v2 = 17, y2 = 18, w2 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k2 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z2 = new Array(2 * (l2 + 2));
          n2(z2);
          var C2 = new Array(2 * f2);
          n2(C2);
          var E2 = new Array(512);
          n2(E2);
          var A2 = new Array(256);
          n2(A2);
          var I2 = new Array(a2);
          n2(I2);
          var O2, B2, R2, T2 = new Array(f2);
          function D2(e3, t3, r3, n3, i3) {
            this.static_tree = e3, this.extra_bits = t3, this.extra_base = r3, this.elems = n3, this.max_length = i3, this.has_stree = e3 && e3.length;
          }
          function F2(e3, t3) {
            this.dyn_tree = e3, this.max_code = 0, this.stat_desc = t3;
          }
          function N2(e3) {
            return e3 < 256 ? E2[e3] : E2[256 + (e3 >>> 7)];
          }
          function U2(e3, t3) {
            e3.pending_buf[e3.pending++] = 255 & t3, e3.pending_buf[e3.pending++] = t3 >>> 8 & 255;
          }
          function P2(e3, t3, r3) {
            e3.bi_valid > d2 - r3 ? (e3.bi_buf |= t3 << e3.bi_valid & 65535, U2(e3, e3.bi_buf), e3.bi_buf = t3 >> d2 - e3.bi_valid, e3.bi_valid += r3 - d2) : (e3.bi_buf |= t3 << e3.bi_valid & 65535, e3.bi_valid += r3);
          }
          function L2(e3, t3, r3) {
            P2(e3, r3[2 * t3], r3[2 * t3 + 1]);
          }
          function j2(e3, t3) {
            for (var r3 = 0; r3 |= 1 & e3, e3 >>>= 1, r3 <<= 1, 0 < --t3; ) ;
            return r3 >>> 1;
          }
          function Z2(e3, t3, r3) {
            var n3, i3, s3 = new Array(g2 + 1), a3 = 0;
            for (n3 = 1; n3 <= g2; n3++) s3[n3] = a3 = a3 + r3[n3 - 1] << 1;
            for (i3 = 0; i3 <= t3; i3++) {
              var o3 = e3[2 * i3 + 1];
              0 !== o3 && (e3[2 * i3] = j2(s3[o3]++, o3));
            }
          }
          function W2(e3) {
            var t3;
            for (t3 = 0; t3 < l2; t3++) e3.dyn_ltree[2 * t3] = 0;
            for (t3 = 0; t3 < f2; t3++) e3.dyn_dtree[2 * t3] = 0;
            for (t3 = 0; t3 < c2; t3++) e3.bl_tree[2 * t3] = 0;
            e3.dyn_ltree[2 * m2] = 1, e3.opt_len = e3.static_len = 0, e3.last_lit = e3.matches = 0;
          }
          function M2(e3) {
            8 < e3.bi_valid ? U2(e3, e3.bi_buf) : 0 < e3.bi_valid && (e3.pending_buf[e3.pending++] = e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0;
          }
          function H2(e3, t3, r3, n3) {
            var i3 = 2 * t3, s3 = 2 * r3;
            return e3[i3] < e3[s3] || e3[i3] === e3[s3] && n3[t3] <= n3[r3];
          }
          function G2(e3, t3, r3) {
            for (var n3 = e3.heap[r3], i3 = r3 << 1; i3 <= e3.heap_len && (i3 < e3.heap_len && H2(t3, e3.heap[i3 + 1], e3.heap[i3], e3.depth) && i3++, !H2(t3, n3, e3.heap[i3], e3.depth)); ) e3.heap[r3] = e3.heap[i3], r3 = i3, i3 <<= 1;
            e3.heap[r3] = n3;
          }
          function K2(e3, t3, r3) {
            var n3, i3, s3, a3, o3 = 0;
            if (0 !== e3.last_lit) for (; n3 = e3.pending_buf[e3.d_buf + 2 * o3] << 8 | e3.pending_buf[e3.d_buf + 2 * o3 + 1], i3 = e3.pending_buf[e3.l_buf + o3], o3++, 0 === n3 ? L2(e3, i3, t3) : (L2(e3, (s3 = A2[i3]) + u2 + 1, t3), 0 !== (a3 = w2[s3]) && P2(e3, i3 -= I2[s3], a3), L2(e3, s3 = N2(--n3), r3), 0 !== (a3 = k2[s3]) && P2(e3, n3 -= T2[s3], a3)), o3 < e3.last_lit; ) ;
            L2(e3, m2, t3);
          }
          function Y2(e3, t3) {
            var r3, n3, i3, s3 = t3.dyn_tree, a3 = t3.stat_desc.static_tree, o3 = t3.stat_desc.has_stree, h3 = t3.stat_desc.elems, u3 = -1;
            for (e3.heap_len = 0, e3.heap_max = _2, r3 = 0; r3 < h3; r3++) 0 !== s3[2 * r3] ? (e3.heap[++e3.heap_len] = u3 = r3, e3.depth[r3] = 0) : s3[2 * r3 + 1] = 0;
            for (; e3.heap_len < 2; ) s3[2 * (i3 = e3.heap[++e3.heap_len] = u3 < 2 ? ++u3 : 0)] = 1, e3.depth[i3] = 0, e3.opt_len--, o3 && (e3.static_len -= a3[2 * i3 + 1]);
            for (t3.max_code = u3, r3 = e3.heap_len >> 1; 1 <= r3; r3--) G2(e3, s3, r3);
            for (i3 = h3; r3 = e3.heap[1], e3.heap[1] = e3.heap[e3.heap_len--], G2(e3, s3, 1), n3 = e3.heap[1], e3.heap[--e3.heap_max] = r3, e3.heap[--e3.heap_max] = n3, s3[2 * i3] = s3[2 * r3] + s3[2 * n3], e3.depth[i3] = (e3.depth[r3] >= e3.depth[n3] ? e3.depth[r3] : e3.depth[n3]) + 1, s3[2 * r3 + 1] = s3[2 * n3 + 1] = i3, e3.heap[1] = i3++, G2(e3, s3, 1), 2 <= e3.heap_len; ) ;
            e3.heap[--e3.heap_max] = e3.heap[1], function(e4, t4) {
              var r4, n4, i4, s4, a4, o4, h4 = t4.dyn_tree, u4 = t4.max_code, l3 = t4.stat_desc.static_tree, f3 = t4.stat_desc.has_stree, c3 = t4.stat_desc.extra_bits, d3 = t4.stat_desc.extra_base, p3 = t4.stat_desc.max_length, m3 = 0;
              for (s4 = 0; s4 <= g2; s4++) e4.bl_count[s4] = 0;
              for (h4[2 * e4.heap[e4.heap_max] + 1] = 0, r4 = e4.heap_max + 1; r4 < _2; r4++) p3 < (s4 = h4[2 * h4[2 * (n4 = e4.heap[r4]) + 1] + 1] + 1) && (s4 = p3, m3++), h4[2 * n4 + 1] = s4, u4 < n4 || (e4.bl_count[s4]++, a4 = 0, d3 <= n4 && (a4 = c3[n4 - d3]), o4 = h4[2 * n4], e4.opt_len += o4 * (s4 + a4), f3 && (e4.static_len += o4 * (l3[2 * n4 + 1] + a4)));
              if (0 !== m3) {
                do {
                  for (s4 = p3 - 1; 0 === e4.bl_count[s4]; ) s4--;
                  e4.bl_count[s4]--, e4.bl_count[s4 + 1] += 2, e4.bl_count[p3]--, m3 -= 2;
                } while (0 < m3);
                for (s4 = p3; 0 !== s4; s4--) for (n4 = e4.bl_count[s4]; 0 !== n4; ) u4 < (i4 = e4.heap[--r4]) || (h4[2 * i4 + 1] !== s4 && (e4.opt_len += (s4 - h4[2 * i4 + 1]) * h4[2 * i4], h4[2 * i4 + 1] = s4), n4--);
              }
            }(e3, t3), Z2(s3, u3, e3.bl_count);
          }
          function X2(e3, t3, r3) {
            var n3, i3, s3 = -1, a3 = t3[1], o3 = 0, h3 = 7, u3 = 4;
            for (0 === a3 && (h3 = 138, u3 = 3), t3[2 * (r3 + 1) + 1] = 65535, n3 = 0; n3 <= r3; n3++) i3 = a3, a3 = t3[2 * (n3 + 1) + 1], ++o3 < h3 && i3 === a3 || (o3 < u3 ? e3.bl_tree[2 * i3] += o3 : 0 !== i3 ? (i3 !== s3 && e3.bl_tree[2 * i3]++, e3.bl_tree[2 * b2]++) : o3 <= 10 ? e3.bl_tree[2 * v2]++ : e3.bl_tree[2 * y2]++, s3 = i3, u3 = (o3 = 0) === a3 ? (h3 = 138, 3) : i3 === a3 ? (h3 = 6, 3) : (h3 = 7, 4));
          }
          function V2(e3, t3, r3) {
            var n3, i3, s3 = -1, a3 = t3[1], o3 = 0, h3 = 7, u3 = 4;
            for (0 === a3 && (h3 = 138, u3 = 3), n3 = 0; n3 <= r3; n3++) if (i3 = a3, a3 = t3[2 * (n3 + 1) + 1], !(++o3 < h3 && i3 === a3)) {
              if (o3 < u3) for (; L2(e3, i3, e3.bl_tree), 0 != --o3; ) ;
              else 0 !== i3 ? (i3 !== s3 && (L2(e3, i3, e3.bl_tree), o3--), L2(e3, b2, e3.bl_tree), P2(e3, o3 - 3, 2)) : o3 <= 10 ? (L2(e3, v2, e3.bl_tree), P2(e3, o3 - 3, 3)) : (L2(e3, y2, e3.bl_tree), P2(e3, o3 - 11, 7));
              s3 = i3, u3 = (o3 = 0) === a3 ? (h3 = 138, 3) : i3 === a3 ? (h3 = 6, 3) : (h3 = 7, 4);
            }
          }
          n2(T2);
          var q2 = false;
          function J2(e3, t3, r3, n3) {
            P2(e3, (s2 << 1) + (n3 ? 1 : 0), 3), function(e4, t4, r4, n4) {
              M2(e4), n4 && (U2(e4, r4), U2(e4, ~r4)), i2.arraySet(e4.pending_buf, e4.window, t4, r4, e4.pending), e4.pending += r4;
            }(e3, t3, r3, true);
          }
          r2._tr_init = function(e3) {
            q2 || (function() {
              var e4, t3, r3, n3, i3, s3 = new Array(g2 + 1);
              for (n3 = r3 = 0; n3 < a2 - 1; n3++) for (I2[n3] = r3, e4 = 0; e4 < 1 << w2[n3]; e4++) A2[r3++] = n3;
              for (A2[r3 - 1] = n3, n3 = i3 = 0; n3 < 16; n3++) for (T2[n3] = i3, e4 = 0; e4 < 1 << k2[n3]; e4++) E2[i3++] = n3;
              for (i3 >>= 7; n3 < f2; n3++) for (T2[n3] = i3 << 7, e4 = 0; e4 < 1 << k2[n3] - 7; e4++) E2[256 + i3++] = n3;
              for (t3 = 0; t3 <= g2; t3++) s3[t3] = 0;
              for (e4 = 0; e4 <= 143; ) z2[2 * e4 + 1] = 8, e4++, s3[8]++;
              for (; e4 <= 255; ) z2[2 * e4 + 1] = 9, e4++, s3[9]++;
              for (; e4 <= 279; ) z2[2 * e4 + 1] = 7, e4++, s3[7]++;
              for (; e4 <= 287; ) z2[2 * e4 + 1] = 8, e4++, s3[8]++;
              for (Z2(z2, l2 + 1, s3), e4 = 0; e4 < f2; e4++) C2[2 * e4 + 1] = 5, C2[2 * e4] = j2(e4, 5);
              O2 = new D2(z2, w2, u2 + 1, l2, g2), B2 = new D2(C2, k2, 0, f2, g2), R2 = new D2(new Array(0), x2, 0, c2, p2);
            }(), q2 = true), e3.l_desc = new F2(e3.dyn_ltree, O2), e3.d_desc = new F2(e3.dyn_dtree, B2), e3.bl_desc = new F2(e3.bl_tree, R2), e3.bi_buf = 0, e3.bi_valid = 0, W2(e3);
          }, r2._tr_stored_block = J2, r2._tr_flush_block = function(e3, t3, r3, n3) {
            var i3, s3, a3 = 0;
            0 < e3.level ? (2 === e3.strm.data_type && (e3.strm.data_type = function(e4) {
              var t4, r4 = 4093624447;
              for (t4 = 0; t4 <= 31; t4++, r4 >>>= 1) if (1 & r4 && 0 !== e4.dyn_ltree[2 * t4]) return o2;
              if (0 !== e4.dyn_ltree[18] || 0 !== e4.dyn_ltree[20] || 0 !== e4.dyn_ltree[26]) return h2;
              for (t4 = 32; t4 < u2; t4++) if (0 !== e4.dyn_ltree[2 * t4]) return h2;
              return o2;
            }(e3)), Y2(e3, e3.l_desc), Y2(e3, e3.d_desc), a3 = function(e4) {
              var t4;
              for (X2(e4, e4.dyn_ltree, e4.l_desc.max_code), X2(e4, e4.dyn_dtree, e4.d_desc.max_code), Y2(e4, e4.bl_desc), t4 = c2 - 1; 3 <= t4 && 0 === e4.bl_tree[2 * S2[t4] + 1]; t4--) ;
              return e4.opt_len += 3 * (t4 + 1) + 5 + 5 + 4, t4;
            }(e3), i3 = e3.opt_len + 3 + 7 >>> 3, (s3 = e3.static_len + 3 + 7 >>> 3) <= i3 && (i3 = s3)) : i3 = s3 = r3 + 5, r3 + 4 <= i3 && -1 !== t3 ? J2(e3, t3, r3, n3) : 4 === e3.strategy || s3 === i3 ? (P2(e3, 2 + (n3 ? 1 : 0), 3), K2(e3, z2, C2)) : (P2(e3, 4 + (n3 ? 1 : 0), 3), function(e4, t4, r4, n4) {
              var i4;
              for (P2(e4, t4 - 257, 5), P2(e4, r4 - 1, 5), P2(e4, n4 - 4, 4), i4 = 0; i4 < n4; i4++) P2(e4, e4.bl_tree[2 * S2[i4] + 1], 3);
              V2(e4, e4.dyn_ltree, t4 - 1), V2(e4, e4.dyn_dtree, r4 - 1);
            }(e3, e3.l_desc.max_code + 1, e3.d_desc.max_code + 1, a3 + 1), K2(e3, e3.dyn_ltree, e3.dyn_dtree)), W2(e3), n3 && M2(e3);
          }, r2._tr_tally = function(e3, t3, r3) {
            return e3.pending_buf[e3.d_buf + 2 * e3.last_lit] = t3 >>> 8 & 255, e3.pending_buf[e3.d_buf + 2 * e3.last_lit + 1] = 255 & t3, e3.pending_buf[e3.l_buf + e3.last_lit] = 255 & r3, e3.last_lit++, 0 === t3 ? e3.dyn_ltree[2 * r3]++ : (e3.matches++, t3--, e3.dyn_ltree[2 * (A2[r3] + u2 + 1)]++, e3.dyn_dtree[2 * N2(t3)]++), e3.last_lit === e3.lit_bufsize - 1;
          }, r2._tr_align = function(e3) {
            P2(e3, 2, 3), L2(e3, m2, z2), function(e4) {
              16 === e4.bi_valid ? (U2(e4, e4.bi_buf), e4.bi_buf = 0, e4.bi_valid = 0) : 8 <= e4.bi_valid && (e4.pending_buf[e4.pending++] = 255 & e4.bi_buf, e4.bi_buf >>= 8, e4.bi_valid -= 8);
            }(e3);
          };
        }, { "../utils/common": 41 }], 53: [function(e2, t2, r2) {
          "use strict";
          t2.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
          };
        }, {}], 54: [function(e2, t2, r2) {
          (function(e3) {
            !function(r3, n2) {
              "use strict";
              if (!r3.setImmediate) {
                var i2, s2, t3, a2, o2 = 1, h2 = {}, u2 = false, l2 = r3.document, e4 = Object.getPrototypeOf && Object.getPrototypeOf(r3);
                e4 = e4 && e4.setTimeout ? e4 : r3, i2 = "[object process]" === {}.toString.call(r3.process) ? function(e5) {
                  process.nextTick(function() {
                    c2(e5);
                  });
                } : function() {
                  if (r3.postMessage && !r3.importScripts) {
                    var e5 = true, t4 = r3.onmessage;
                    return r3.onmessage = function() {
                      e5 = false;
                    }, r3.postMessage("", "*"), r3.onmessage = t4, e5;
                  }
                }() ? (a2 = "setImmediate$" + Math.random() + "$", r3.addEventListener ? r3.addEventListener("message", d2, false) : r3.attachEvent("onmessage", d2), function(e5) {
                  r3.postMessage(a2 + e5, "*");
                }) : r3.MessageChannel ? ((t3 = new MessageChannel()).port1.onmessage = function(e5) {
                  c2(e5.data);
                }, function(e5) {
                  t3.port2.postMessage(e5);
                }) : l2 && "onreadystatechange" in l2.createElement("script") ? (s2 = l2.documentElement, function(e5) {
                  var t4 = l2.createElement("script");
                  t4.onreadystatechange = function() {
                    c2(e5), t4.onreadystatechange = null, s2.removeChild(t4), t4 = null;
                  }, s2.appendChild(t4);
                }) : function(e5) {
                  setTimeout(c2, 0, e5);
                }, e4.setImmediate = function(e5) {
                  "function" != typeof e5 && (e5 = new Function("" + e5));
                  for (var t4 = new Array(arguments.length - 1), r4 = 0; r4 < t4.length; r4++) t4[r4] = arguments[r4 + 1];
                  var n3 = { callback: e5, args: t4 };
                  return h2[o2] = n3, i2(o2), o2++;
                }, e4.clearImmediate = f2;
              }
              function f2(e5) {
                delete h2[e5];
              }
              function c2(e5) {
                if (u2) setTimeout(c2, 0, e5);
                else {
                  var t4 = h2[e5];
                  if (t4) {
                    u2 = true;
                    try {
                      !function(e6) {
                        var t5 = e6.callback, r4 = e6.args;
                        switch (r4.length) {
                          case 0:
                            t5();
                            break;
                          case 1:
                            t5(r4[0]);
                            break;
                          case 2:
                            t5(r4[0], r4[1]);
                            break;
                          case 3:
                            t5(r4[0], r4[1], r4[2]);
                            break;
                          default:
                            t5.apply(n2, r4);
                        }
                      }(t4);
                    } finally {
                      f2(e5), u2 = false;
                    }
                  }
                }
              }
              function d2(e5) {
                e5.source === r3 && "string" == typeof e5.data && 0 === e5.data.indexOf(a2) && c2(+e5.data.slice(a2.length));
              }
            }("undefined" == typeof self ? void 0 === e3 ? this : e3 : self);
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}] }, {}, [10])(10);
      });
    }
  });

  // src/core/alphaMap.js
  function calculateAlphaMap(bgCaptureImageData) {
    const { width, height, data } = bgCaptureImageData;
    const alphaMap = new Float32Array(width * height);
    for (let i2 = 0; i2 < alphaMap.length; i2++) {
      const idx = i2 * 4;
      const r2 = data[idx];
      const g2 = data[idx + 1];
      const b2 = data[idx + 2];
      const maxChannel = Math.max(r2, g2, b2);
      alphaMap[i2] = maxChannel / 255;
    }
    return alphaMap;
  }

  // src/core/blendModes.js
  var ALPHA_THRESHOLD = 2e-3;
  var MAX_ALPHA = 0.99;
  var LOGO_VALUE = 255;
  function removeWatermark(imageData, alphaMap, position) {
    const { x: x2, y: y2, width, height } = position;
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const imgIdx = ((y2 + row) * imageData.width + (x2 + col)) * 4;
        const alphaIdx = row * width + col;
        let alpha = alphaMap[alphaIdx];
        if (alpha < ALPHA_THRESHOLD) {
          continue;
        }
        alpha = Math.min(alpha, MAX_ALPHA);
        const oneMinusAlpha = 1 - alpha;
        for (let c2 = 0; c2 < 3; c2++) {
          const watermarked = imageData.data[imgIdx + c2];
          const original = (watermarked - alpha * LOGO_VALUE) / oneMinusAlpha;
          imageData.data[imgIdx + c2] = Math.max(0, Math.min(255, Math.round(original)));
        }
      }
    }
  }

  // src/assets/bg_48.png
  var bg_48_default = "data:image/png;base64,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";

  // src/assets/bg_96.png
  var bg_96_default = "data:image/png;base64,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";

  // src/core/watermarkEngine.js
  function detectWatermarkConfig(imageWidth, imageHeight) {
    if (imageWidth > 1024 && imageHeight > 1024) {
      return {
        logoSize: 96,
        marginRight: 64,
        marginBottom: 64
      };
    } else {
      return {
        logoSize: 48,
        marginRight: 32,
        marginBottom: 32
      };
    }
  }
  function calculateWatermarkPosition(imageWidth, imageHeight, config) {
    const { logoSize, marginRight, marginBottom } = config;
    return {
      x: imageWidth - marginRight - logoSize,
      y: imageHeight - marginBottom - logoSize,
      width: logoSize,
      height: logoSize
    };
  }
  var WatermarkEngine = class _WatermarkEngine {
    constructor(bgCaptures) {
      this.bgCaptures = bgCaptures;
      this.alphaMaps = {};
    }
    static async create() {
      const bg48 = new Image();
      const bg96 = new Image();
      await Promise.all([
        new Promise((resolve, reject) => {
          bg48.onload = resolve;
          bg48.onerror = reject;
          bg48.src = bg_48_default;
        }),
        new Promise((resolve, reject) => {
          bg96.onload = resolve;
          bg96.onerror = reject;
          bg96.src = bg_96_default;
        })
      ]);
      return new _WatermarkEngine({ bg48, bg96 });
    }
    /**
     * Get alpha map from background captured image based on watermark size
     * @param {number} size - Watermark size (48 or 96)
     * @returns {Promise<Float32Array>} Alpha map
     */
    async getAlphaMap(size) {
      if (this.alphaMaps[size]) {
        return this.alphaMaps[size];
      }
      const bgImage = size === 48 ? this.bgCaptures.bg48 : this.bgCaptures.bg96;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(bgImage, 0, 0);
      const imageData = ctx.getImageData(0, 0, size, size);
      const alphaMap = calculateAlphaMap(imageData);
      this.alphaMaps[size] = alphaMap;
      return alphaMap;
    }
    /**
     * Remove watermark from image based on watermark size
     * @param {HTMLImageElement|HTMLCanvasElement} image - Input image
     * @returns {Promise<HTMLCanvasElement>} Processed canvas
     */
    async removeWatermarkFromImage(image) {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const config = detectWatermarkConfig(canvas.width, canvas.height);
      const position = calculateWatermarkPosition(canvas.width, canvas.height, config);
      const alphaMap = await this.getAlphaMap(config.logoSize);
      removeWatermark(imageData, alphaMap, position);
      ctx.putImageData(imageData, 0, 0);
      return canvas;
    }
    /**
     * Get watermark information (for display)
     * @param {number} imageWidth - Image width
     * @param {number} imageHeight - Image height
     * @returns {Object} Watermark information {size, position, config}
     */
    getWatermarkInfo(imageWidth, imageHeight) {
      const config = detectWatermarkConfig(imageWidth, imageHeight);
      const position = calculateWatermarkPosition(imageWidth, imageHeight, config);
      return {
        size: config.logoSize,
        position,
        config
      };
    }
  };

  // src/i18n.js
  var i18n = {
    locale: localStorage.getItem("locale") || (navigator.language.startsWith("zh") ? "zh-CN" : "en-US"),
    translations: {},
    async init() {
      await this.loadTranslations(this.locale);
      this.applyTranslations();
      document.body.classList.remove("loading");
    },
    async loadTranslations(locale) {
      const res = await fetch(`/i18n/${locale}.json?_=${Date.now()}`);
      this.translations = await res.json();
      this.locale = locale;
      localStorage.setItem("locale", locale);
    },
    t(key) {
      return this.translations[key] || key;
    },
    applyTranslations() {
      document.documentElement.lang = this.locale;
      document.title = this.t("title");
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (el.tagName === "INPUT" && el.placeholder !== void 0) {
          el.placeholder = this.t(key);
        } else {
          el.textContent = this.t(key);
        }
      });
    },
    async switchLocale(locale) {
      await this.loadTranslations(locale);
      this.applyTranslations();
    }
  };
  var i18n_default = i18n;

  // node_modules/.pnpm/exifr@7.1.3/node_modules/exifr/dist/full.esm.mjs
  var e = "undefined" != typeof self ? self : global;
  var t = "undefined" != typeof navigator;
  var i = t && "undefined" == typeof HTMLImageElement;
  var n = !("undefined" == typeof global || "undefined" == typeof process || !process.versions || !process.versions.node);
  var s = e.Buffer;
  var r = e.BigInt;
  var a = !!s;
  var o = (e2) => e2;
  function l(e2, t2 = o) {
    if (n) try {
      return "function" == typeof __require ? Promise.resolve(t2(__require(e2))) : import(
        /* webpackIgnore: true */
        e2
      ).then(t2);
    } catch (t3) {
      console.warn(`Couldn't load ${e2}`);
    }
  }
  var h = e.fetch;
  var u = (e2) => h = e2;
  if (!e.fetch) {
    const e2 = l("http", (e3) => e3), t2 = l("https", (e3) => e3), i2 = (n2, { headers: s2 } = {}) => new Promise(async (r2, a2) => {
      let { port: o2, hostname: l2, pathname: h2, protocol: u2, search: c2 } = new URL(n2);
      const f2 = { method: "GET", hostname: l2, path: encodeURI(h2) + c2, headers: s2 };
      "" !== o2 && (f2.port = Number(o2));
      const d2 = ("https:" === u2 ? await t2 : await e2).request(f2, (e3) => {
        if (301 === e3.statusCode || 302 === e3.statusCode) {
          let t3 = new URL(e3.headers.location, n2).toString();
          return i2(t3, { headers: s2 }).then(r2).catch(a2);
        }
        r2({ status: e3.statusCode, arrayBuffer: () => new Promise((t3) => {
          let i3 = [];
          e3.on("data", (e4) => i3.push(e4)), e3.on("end", () => t3(Buffer.concat(i3)));
        }) });
      });
      d2.on("error", a2), d2.end();
    });
    u(i2);
  }
  function c(e2, t2, i2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
  }
  var f = (e2) => p(e2) ? void 0 : e2;
  var d = (e2) => void 0 !== e2;
  function p(e2) {
    return void 0 === e2 || (e2 instanceof Map ? 0 === e2.size : 0 === Object.values(e2).filter(d).length);
  }
  function g(e2) {
    let t2 = new Error(e2);
    throw delete t2.stack, t2;
  }
  function m(e2) {
    return "" === (e2 = function(e3) {
      for (; e3.endsWith("\0"); ) e3 = e3.slice(0, -1);
      return e3;
    }(e2).trim()) ? void 0 : e2;
  }
  function S(e2) {
    let t2 = function(e3) {
      let t3 = 0;
      return e3.ifd0.enabled && (t3 += 1024), e3.exif.enabled && (t3 += 2048), e3.makerNote && (t3 += 2048), e3.userComment && (t3 += 1024), e3.gps.enabled && (t3 += 512), e3.interop.enabled && (t3 += 100), e3.ifd1.enabled && (t3 += 1024), t3 + 2048;
    }(e2);
    return e2.jfif.enabled && (t2 += 50), e2.xmp.enabled && (t2 += 2e4), e2.iptc.enabled && (t2 += 14e3), e2.icc.enabled && (t2 += 6e3), t2;
  }
  var C = (e2) => String.fromCharCode.apply(null, e2);
  var y = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
  function b(e2) {
    return y ? y.decode(e2) : a ? Buffer.from(e2).toString("utf8") : decodeURIComponent(escape(C(e2)));
  }
  var I = class _I {
    static from(e2, t2) {
      return e2 instanceof this && e2.le === t2 ? e2 : new _I(e2, void 0, void 0, t2);
    }
    constructor(e2, t2 = 0, i2, n2) {
      if ("boolean" == typeof n2 && (this.le = n2), Array.isArray(e2) && (e2 = new Uint8Array(e2)), 0 === e2) this.byteOffset = 0, this.byteLength = 0;
      else if (e2 instanceof ArrayBuffer) {
        void 0 === i2 && (i2 = e2.byteLength - t2);
        let n3 = new DataView(e2, t2, i2);
        this._swapDataView(n3);
      } else if (e2 instanceof Uint8Array || e2 instanceof DataView || e2 instanceof _I) {
        void 0 === i2 && (i2 = e2.byteLength - t2), (t2 += e2.byteOffset) + i2 > e2.byteOffset + e2.byteLength && g("Creating view outside of available memory in ArrayBuffer");
        let n3 = new DataView(e2.buffer, t2, i2);
        this._swapDataView(n3);
      } else if ("number" == typeof e2) {
        let t3 = new DataView(new ArrayBuffer(e2));
        this._swapDataView(t3);
      } else g("Invalid input argument for BufferView: " + e2);
    }
    _swapArrayBuffer(e2) {
      this._swapDataView(new DataView(e2));
    }
    _swapBuffer(e2) {
      this._swapDataView(new DataView(e2.buffer, e2.byteOffset, e2.byteLength));
    }
    _swapDataView(e2) {
      this.dataView = e2, this.buffer = e2.buffer, this.byteOffset = e2.byteOffset, this.byteLength = e2.byteLength;
    }
    _lengthToEnd(e2) {
      return this.byteLength - e2;
    }
    set(e2, t2, i2 = _I) {
      return e2 instanceof DataView || e2 instanceof _I ? e2 = new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength) : e2 instanceof ArrayBuffer && (e2 = new Uint8Array(e2)), e2 instanceof Uint8Array || g("BufferView.set(): Invalid data argument."), this.toUint8().set(e2, t2), new i2(this, t2, e2.byteLength);
    }
    subarray(e2, t2) {
      return t2 = t2 || this._lengthToEnd(e2), new _I(this, e2, t2);
    }
    toUint8() {
      return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
    }
    getUint8Array(e2, t2) {
      return new Uint8Array(this.buffer, this.byteOffset + e2, t2);
    }
    getString(e2 = 0, t2 = this.byteLength) {
      return b(this.getUint8Array(e2, t2));
    }
    getLatin1String(e2 = 0, t2 = this.byteLength) {
      let i2 = this.getUint8Array(e2, t2);
      return C(i2);
    }
    getUnicodeString(e2 = 0, t2 = this.byteLength) {
      const i2 = [];
      for (let n2 = 0; n2 < t2 && e2 + n2 < this.byteLength; n2 += 2) i2.push(this.getUint16(e2 + n2));
      return C(i2);
    }
    getInt8(e2) {
      return this.dataView.getInt8(e2);
    }
    getUint8(e2) {
      return this.dataView.getUint8(e2);
    }
    getInt16(e2, t2 = this.le) {
      return this.dataView.getInt16(e2, t2);
    }
    getInt32(e2, t2 = this.le) {
      return this.dataView.getInt32(e2, t2);
    }
    getUint16(e2, t2 = this.le) {
      return this.dataView.getUint16(e2, t2);
    }
    getUint32(e2, t2 = this.le) {
      return this.dataView.getUint32(e2, t2);
    }
    getFloat32(e2, t2 = this.le) {
      return this.dataView.getFloat32(e2, t2);
    }
    getFloat64(e2, t2 = this.le) {
      return this.dataView.getFloat64(e2, t2);
    }
    getFloat(e2, t2 = this.le) {
      return this.dataView.getFloat32(e2, t2);
    }
    getDouble(e2, t2 = this.le) {
      return this.dataView.getFloat64(e2, t2);
    }
    getUintBytes(e2, t2, i2) {
      switch (t2) {
        case 1:
          return this.getUint8(e2, i2);
        case 2:
          return this.getUint16(e2, i2);
        case 4:
          return this.getUint32(e2, i2);
        case 8:
          return this.getUint64 && this.getUint64(e2, i2);
      }
    }
    getUint(e2, t2, i2) {
      switch (t2) {
        case 8:
          return this.getUint8(e2, i2);
        case 16:
          return this.getUint16(e2, i2);
        case 32:
          return this.getUint32(e2, i2);
        case 64:
          return this.getUint64 && this.getUint64(e2, i2);
      }
    }
    toString(e2) {
      return this.dataView.toString(e2, this.constructor.name);
    }
    ensureChunk() {
    }
  };
  function P(e2, t2) {
    g(`${e2} '${t2}' was not loaded, try using full build of exifr.`);
  }
  var k = class extends Map {
    constructor(e2) {
      super(), this.kind = e2;
    }
    get(e2, t2) {
      return this.has(e2) || P(this.kind, e2), t2 && (e2 in t2 || function(e3, t3) {
        g(`Unknown ${e3} '${t3}'.`);
      }(this.kind, e2), t2[e2].enabled || P(this.kind, e2)), super.get(e2);
    }
    keyList() {
      return Array.from(this.keys());
    }
  };
  var w = new k("file parser");
  var T = new k("segment parser");
  var A = new k("file reader");
  function D(e2, n2) {
    return "string" == typeof e2 ? O(e2, n2) : t && !i && e2 instanceof HTMLImageElement ? O(e2.src, n2) : e2 instanceof Uint8Array || e2 instanceof ArrayBuffer || e2 instanceof DataView ? new I(e2) : t && e2 instanceof Blob ? x(e2, n2, "blob", R) : void g("Invalid input argument");
  }
  function O(e2, i2) {
    return (s2 = e2).startsWith("data:") || s2.length > 1e4 ? v(e2, i2, "base64") : n && e2.includes("://") ? x(e2, i2, "url", M) : n ? v(e2, i2, "fs") : t ? x(e2, i2, "url", M) : void g("Invalid input argument");
    var s2;
  }
  async function x(e2, t2, i2, n2) {
    return A.has(i2) ? v(e2, t2, i2) : n2 ? async function(e3, t3) {
      let i3 = await t3(e3);
      return new I(i3);
    }(e2, n2) : void g(`Parser ${i2} is not loaded`);
  }
  async function v(e2, t2, i2) {
    let n2 = new (A.get(i2))(e2, t2);
    return await n2.read(), n2;
  }
  var M = (e2) => h(e2).then((e3) => e3.arrayBuffer());
  var R = (e2) => new Promise((t2, i2) => {
    let n2 = new FileReader();
    n2.onloadend = () => t2(n2.result || new ArrayBuffer()), n2.onerror = i2, n2.readAsArrayBuffer(e2);
  });
  var L = class extends Map {
    get tagKeys() {
      return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
    }
    get tagValues() {
      return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
    }
  };
  function U(e2, t2, i2) {
    let n2 = new L();
    for (let [e3, t3] of i2) n2.set(e3, t3);
    if (Array.isArray(t2)) for (let i3 of t2) e2.set(i3, n2);
    else e2.set(t2, n2);
    return n2;
  }
  function F(e2, t2, i2) {
    let n2, s2 = e2.get(t2);
    for (n2 of i2) s2.set(n2[0], n2[1]);
  }
  var E = /* @__PURE__ */ new Map();
  var B = /* @__PURE__ */ new Map();
  var N = /* @__PURE__ */ new Map();
  var G = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"];
  var V = ["jfif", "xmp", "icc", "iptc", "ihdr"];
  var z = ["tiff", ...V];
  var H = ["ifd0", "ifd1", "exif", "gps", "interop"];
  var j = [...z, ...H];
  var W = ["makerNote", "userComment"];
  var K = ["translateKeys", "translateValues", "reviveValues", "multiSegment"];
  var X = [...K, "sanitize", "mergeOutput", "silentErrors"];
  var _ = class {
    get translate() {
      return this.translateKeys || this.translateValues || this.reviveValues;
    }
  };
  var Y = class extends _ {
    get needed() {
      return this.enabled || this.deps.size > 0;
    }
    constructor(e2, t2, i2, n2) {
      if (super(), c(this, "enabled", false), c(this, "skip", /* @__PURE__ */ new Set()), c(this, "pick", /* @__PURE__ */ new Set()), c(this, "deps", /* @__PURE__ */ new Set()), c(this, "translateKeys", false), c(this, "translateValues", false), c(this, "reviveValues", false), this.key = e2, this.enabled = t2, this.parse = this.enabled, this.applyInheritables(n2), this.canBeFiltered = H.includes(e2), this.canBeFiltered && (this.dict = E.get(e2)), void 0 !== i2) if (Array.isArray(i2)) this.parse = this.enabled = true, this.canBeFiltered && i2.length > 0 && this.translateTagSet(i2, this.pick);
      else if ("object" == typeof i2) {
        if (this.enabled = true, this.parse = false !== i2.parse, this.canBeFiltered) {
          let { pick: e3, skip: t3 } = i2;
          e3 && e3.length > 0 && this.translateTagSet(e3, this.pick), t3 && t3.length > 0 && this.translateTagSet(t3, this.skip);
        }
        this.applyInheritables(i2);
      } else true === i2 || false === i2 ? this.parse = this.enabled = i2 : g(`Invalid options argument: ${i2}`);
    }
    applyInheritables(e2) {
      let t2, i2;
      for (t2 of K) i2 = e2[t2], void 0 !== i2 && (this[t2] = i2);
    }
    translateTagSet(e2, t2) {
      if (this.dict) {
        let i2, n2, { tagKeys: s2, tagValues: r2 } = this.dict;
        for (i2 of e2) "string" == typeof i2 ? (n2 = r2.indexOf(i2), -1 === n2 && (n2 = s2.indexOf(Number(i2))), -1 !== n2 && t2.add(Number(s2[n2]))) : t2.add(i2);
      } else for (let i2 of e2) t2.add(i2);
    }
    finalizeFilters() {
      !this.enabled && this.deps.size > 0 ? (this.enabled = true, ee(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && ee(this.pick, this.deps);
    }
  };
  var $ = { jfif: false, tiff: true, xmp: false, icc: false, iptc: false, ifd0: true, ifd1: false, exif: true, gps: true, interop: false, ihdr: void 0, makerNote: false, userComment: false, multiSegment: false, skip: [], pick: [], translateKeys: true, translateValues: true, reviveValues: true, sanitize: true, mergeOutput: true, silentErrors: true, chunked: true, firstChunkSize: void 0, firstChunkSizeNode: 512, firstChunkSizeBrowser: 65536, chunkSize: 65536, chunkLimit: 5 };
  var J = /* @__PURE__ */ new Map();
  var q = class extends _ {
    static useCached(e2) {
      let t2 = J.get(e2);
      return void 0 !== t2 || (t2 = new this(e2), J.set(e2, t2)), t2;
    }
    constructor(e2) {
      super(), true === e2 ? this.setupFromTrue() : void 0 === e2 ? this.setupFromUndefined() : Array.isArray(e2) ? this.setupFromArray(e2) : "object" == typeof e2 ? this.setupFromObject(e2) : g(`Invalid options argument ${e2}`), void 0 === this.firstChunkSize && (this.firstChunkSize = t ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = false), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
    }
    setupFromUndefined() {
      let e2;
      for (e2 of G) this[e2] = $[e2];
      for (e2 of X) this[e2] = $[e2];
      for (e2 of W) this[e2] = $[e2];
      for (e2 of j) this[e2] = new Y(e2, $[e2], void 0, this);
    }
    setupFromTrue() {
      let e2;
      for (e2 of G) this[e2] = $[e2];
      for (e2 of X) this[e2] = $[e2];
      for (e2 of W) this[e2] = true;
      for (e2 of j) this[e2] = new Y(e2, true, void 0, this);
    }
    setupFromArray(e2) {
      let t2;
      for (t2 of G) this[t2] = $[t2];
      for (t2 of X) this[t2] = $[t2];
      for (t2 of W) this[t2] = $[t2];
      for (t2 of j) this[t2] = new Y(t2, false, void 0, this);
      this.setupGlobalFilters(e2, void 0, H);
    }
    setupFromObject(e2) {
      let t2;
      for (t2 of (H.ifd0 = H.ifd0 || H.image, H.ifd1 = H.ifd1 || H.thumbnail, Object.assign(this, e2), G)) this[t2] = Z(e2[t2], $[t2]);
      for (t2 of X) this[t2] = Z(e2[t2], $[t2]);
      for (t2 of W) this[t2] = Z(e2[t2], $[t2]);
      for (t2 of z) this[t2] = new Y(t2, $[t2], e2[t2], this);
      for (t2 of H) this[t2] = new Y(t2, $[t2], e2[t2], this.tiff);
      this.setupGlobalFilters(e2.pick, e2.skip, H, j), true === e2.tiff ? this.batchEnableWithBool(H, true) : false === e2.tiff ? this.batchEnableWithUserValue(H, e2) : Array.isArray(e2.tiff) ? this.setupGlobalFilters(e2.tiff, void 0, H) : "object" == typeof e2.tiff && this.setupGlobalFilters(e2.tiff.pick, e2.tiff.skip, H);
    }
    batchEnableWithBool(e2, t2) {
      for (let i2 of e2) this[i2].enabled = t2;
    }
    batchEnableWithUserValue(e2, t2) {
      for (let i2 of e2) {
        let e3 = t2[i2];
        this[i2].enabled = false !== e3 && void 0 !== e3;
      }
    }
    setupGlobalFilters(e2, t2, i2, n2 = i2) {
      if (e2 && e2.length) {
        for (let e3 of n2) this[e3].enabled = false;
        let t3 = Q(e2, i2);
        for (let [e3, i3] of t3) ee(this[e3].pick, i3), this[e3].enabled = true;
      } else if (t2 && t2.length) {
        let e3 = Q(t2, i2);
        for (let [t3, i3] of e3) ee(this[t3].skip, i3);
      }
    }
    filterNestedSegmentTags() {
      let { ifd0: e2, exif: t2, xmp: i2, iptc: n2, icc: s2 } = this;
      this.makerNote ? t2.deps.add(37500) : t2.skip.add(37500), this.userComment ? t2.deps.add(37510) : t2.skip.add(37510), i2.enabled || e2.skip.add(700), n2.enabled || e2.skip.add(33723), s2.enabled || e2.skip.add(34675);
    }
    traverseTiffDependencyTree() {
      let { ifd0: e2, exif: t2, gps: i2, interop: n2 } = this;
      n2.needed && (t2.deps.add(40965), e2.deps.add(40965)), t2.needed && e2.deps.add(34665), i2.needed && e2.deps.add(34853), this.tiff.enabled = H.some((e3) => true === this[e3].enabled) || this.makerNote || this.userComment;
      for (let e3 of H) this[e3].finalizeFilters();
    }
    get onlyTiff() {
      return !V.map((e2) => this[e2].enabled).some((e2) => true === e2) && this.tiff.enabled;
    }
    checkLoadedPlugins() {
      for (let e2 of z) this[e2].enabled && !T.has(e2) && P("segment parser", e2);
    }
  };
  function Q(e2, t2) {
    let i2, n2, s2, r2, a2 = [];
    for (s2 of t2) {
      for (r2 of (i2 = E.get(s2), n2 = [], i2)) (e2.includes(r2[0]) || e2.includes(r2[1])) && n2.push(r2[0]);
      n2.length && a2.push([s2, n2]);
    }
    return a2;
  }
  function Z(e2, t2) {
    return void 0 !== e2 ? e2 : void 0 !== t2 ? t2 : void 0;
  }
  function ee(e2, t2) {
    for (let i2 of t2) e2.add(i2);
  }
  c(q, "default", $);
  var te = class {
    constructor(e2) {
      c(this, "parsers", {}), c(this, "output", {}), c(this, "errors", []), c(this, "pushToErrors", (e3) => this.errors.push(e3)), this.options = q.useCached(e2);
    }
    async read(e2) {
      this.file = await D(e2, this.options);
    }
    setup() {
      if (this.fileParser) return;
      let { file: e2 } = this, t2 = e2.getUint16(0);
      for (let [i2, n2] of w) if (n2.canHandle(e2, t2)) return this.fileParser = new n2(this.options, this.file, this.parsers), e2[i2] = true;
      this.file.close && this.file.close(), g("Unknown file format");
    }
    async parse() {
      let { output: e2, errors: t2 } = this;
      return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t2.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t2.length > 0 && (e2.errors = t2), f(e2);
    }
    async executeParsers() {
      let { output: e2 } = this;
      await this.fileParser.parse();
      let t2 = Object.values(this.parsers).map(async (t3) => {
        let i2 = await t3.parse();
        t3.assignToOutput(e2, i2);
      });
      this.options.silentErrors && (t2 = t2.map((e3) => e3.catch(this.pushToErrors))), await Promise.all(t2);
    }
    async extractThumbnail() {
      this.setup();
      let { options: e2, file: t2 } = this, i2 = T.get("tiff", e2);
      var n2;
      if (t2.tiff ? n2 = { start: 0, type: "tiff" } : t2.jpeg && (n2 = await this.fileParser.getOrFindSegment("tiff")), void 0 === n2) return;
      let s2 = await this.fileParser.ensureSegmentChunk(n2), r2 = this.parsers.tiff = new i2(s2, e2, t2), a2 = await r2.extractThumbnail();
      return t2.close && t2.close(), a2;
    }
  };
  async function ie(e2, t2) {
    let i2 = new te(t2);
    return await i2.read(e2), i2.parse();
  }
  var ne = Object.freeze({ __proto__: null, parse: ie, Exifr: te, fileParsers: w, segmentParsers: T, fileReaders: A, tagKeys: E, tagValues: B, tagRevivers: N, createDictionary: U, extendDictionary: F, fetchUrlAsArrayBuffer: M, readBlobAsArrayBuffer: R, chunkedProps: G, otherSegments: V, segments: z, tiffBlocks: H, segmentsAndBlocks: j, tiffExtractables: W, inheritables: K, allFormatters: X, Options: q });
  var se = class {
    constructor(e2, t2, i2) {
      c(this, "errors", []), c(this, "ensureSegmentChunk", async (e3) => {
        let t3 = e3.start, i3 = e3.size || 65536;
        if (this.file.chunked) if (this.file.available(t3, i3)) e3.chunk = this.file.subarray(t3, i3);
        else try {
          e3.chunk = await this.file.readChunk(t3, i3);
        } catch (t4) {
          g(`Couldn't read segment: ${JSON.stringify(e3)}. ${t4.message}`);
        }
        else this.file.byteLength > t3 + i3 ? e3.chunk = this.file.subarray(t3, i3) : void 0 === e3.size ? e3.chunk = this.file.subarray(t3) : g("Segment unreachable: " + JSON.stringify(e3));
        return e3.chunk;
      }), this.extendOptions && this.extendOptions(e2), this.options = e2, this.file = t2, this.parsers = i2;
    }
    injectSegment(e2, t2) {
      this.options[e2].enabled && this.createParser(e2, t2);
    }
    createParser(e2, t2) {
      let i2 = new (T.get(e2))(t2, this.options, this.file);
      return this.parsers[e2] = i2;
    }
    createParsers(e2) {
      for (let t2 of e2) {
        let { type: e3, chunk: i2 } = t2, n2 = this.options[e3];
        if (n2 && n2.enabled) {
          let t3 = this.parsers[e3];
          t3 && t3.append || t3 || this.createParser(e3, i2);
        }
      }
    }
    async readSegments(e2) {
      let t2 = e2.map(this.ensureSegmentChunk);
      await Promise.all(t2);
    }
  };
  var re = class {
    static findPosition(e2, t2) {
      let i2 = e2.getUint16(t2 + 2) + 2, n2 = "function" == typeof this.headerLength ? this.headerLength(e2, t2, i2) : this.headerLength, s2 = t2 + n2, r2 = i2 - n2;
      return { offset: t2, length: i2, headerLength: n2, start: s2, size: r2, end: s2 + r2 };
    }
    static parse(e2, t2 = {}) {
      return new this(e2, new q({ [this.type]: t2 }), e2).parse();
    }
    normalizeInput(e2) {
      return e2 instanceof I ? e2 : new I(e2);
    }
    constructor(e2, t2 = {}, i2) {
      c(this, "errors", []), c(this, "raw", /* @__PURE__ */ new Map()), c(this, "handleError", (e3) => {
        if (!this.options.silentErrors) throw e3;
        this.errors.push(e3.message);
      }), this.chunk = this.normalizeInput(e2), this.file = i2, this.type = this.constructor.type, this.globalOptions = this.options = t2, this.localOptions = t2[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
    }
    translate() {
      this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
    }
    get output() {
      return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
    }
    translateBlock(e2, t2) {
      let i2 = N.get(t2), n2 = B.get(t2), s2 = E.get(t2), r2 = this.options[t2], a2 = r2.reviveValues && !!i2, o2 = r2.translateValues && !!n2, l2 = r2.translateKeys && !!s2, h2 = {};
      for (let [t3, r3] of e2) a2 && i2.has(t3) ? r3 = i2.get(t3)(r3) : o2 && n2.has(t3) && (r3 = this.translateValue(r3, n2.get(t3))), l2 && s2.has(t3) && (t3 = s2.get(t3) || t3), h2[t3] = r3;
      return h2;
    }
    translateValue(e2, t2) {
      return t2[e2] || t2.DEFAULT || e2;
    }
    assignToOutput(e2, t2) {
      this.assignObjectToOutput(e2, this.constructor.type, t2);
    }
    assignObjectToOutput(e2, t2, i2) {
      if (this.globalOptions.mergeOutput) return Object.assign(e2, i2);
      e2[t2] ? Object.assign(e2[t2], i2) : e2[t2] = i2;
    }
  };
  c(re, "headerLength", 4), c(re, "type", void 0), c(re, "multiSegment", false), c(re, "canHandle", () => false);
  function ae(e2) {
    return 192 === e2 || 194 === e2 || 196 === e2 || 219 === e2 || 221 === e2 || 218 === e2 || 254 === e2;
  }
  function oe(e2) {
    return e2 >= 224 && e2 <= 239;
  }
  function le(e2, t2, i2) {
    for (let [n2, s2] of T) if (s2.canHandle(e2, t2, i2)) return n2;
  }
  var he = class extends se {
    constructor(...e2) {
      super(...e2), c(this, "appSegments", []), c(this, "jpegSegments", []), c(this, "unknownSegments", []);
    }
    static canHandle(e2, t2) {
      return 65496 === t2;
    }
    async parse() {
      await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
    }
    setupSegmentFinderArgs(e2) {
      true === e2 ? (this.findAll = true, this.wanted = new Set(T.keyList())) : (e2 = void 0 === e2 ? T.keyList().filter((e3) => this.options[e3].enabled) : e2.filter((e3) => this.options[e3].enabled && T.has(e3)), this.findAll = false, this.remaining = new Set(e2), this.wanted = new Set(e2)), this.unfinishedMultiSegment = false;
    }
    async findAppSegments(e2 = 0, t2) {
      this.setupSegmentFinderArgs(t2);
      let { file: i2, findAll: n2, wanted: s2, remaining: r2 } = this;
      if (!n2 && this.file.chunked && (n2 = Array.from(s2).some((e3) => {
        let t3 = T.get(e3), i3 = this.options[e3];
        return t3.multiSegment && i3.multiSegment;
      }), n2 && await this.file.readWhole()), e2 = this.findAppSegmentsInRange(e2, i2.byteLength), !this.options.onlyTiff && i2.chunked) {
        let t3 = false;
        for (; r2.size > 0 && !t3 && (i2.canReadNextChunk || this.unfinishedMultiSegment); ) {
          let { nextChunkOffset: n3 } = i2, s3 = this.appSegments.some((e3) => !this.file.available(e3.offset || e3.start, e3.length || e3.size));
          if (t3 = e2 > n3 && !s3 ? !await i2.readNextChunk(e2) : !await i2.readNextChunk(n3), void 0 === (e2 = this.findAppSegmentsInRange(e2, i2.byteLength))) return;
        }
      }
    }
    findAppSegmentsInRange(e2, t2) {
      t2 -= 2;
      let i2, n2, s2, r2, a2, o2, { file: l2, findAll: h2, wanted: u2, remaining: c2, options: f2 } = this;
      for (; e2 < t2; e2++) if (255 === l2.getUint8(e2)) {
        if (i2 = l2.getUint8(e2 + 1), oe(i2)) {
          if (n2 = l2.getUint16(e2 + 2), s2 = le(l2, e2, n2), s2 && u2.has(s2) && (r2 = T.get(s2), a2 = r2.findPosition(l2, e2), o2 = f2[s2], a2.type = s2, this.appSegments.push(a2), !h2 && (r2.multiSegment && o2.multiSegment ? (this.unfinishedMultiSegment = a2.chunkNumber < a2.chunkCount, this.unfinishedMultiSegment || c2.delete(s2)) : c2.delete(s2), 0 === c2.size))) break;
          f2.recordUnknownSegments && (a2 = re.findPosition(l2, e2), a2.marker = i2, this.unknownSegments.push(a2)), e2 += n2 + 1;
        } else if (ae(i2)) {
          if (n2 = l2.getUint16(e2 + 2), 218 === i2 && false !== f2.stopAfterSos) return;
          f2.recordJpegSegments && this.jpegSegments.push({ offset: e2, length: n2, marker: i2 }), e2 += n2 + 1;
        }
      }
      return e2;
    }
    mergeMultiSegments() {
      if (!this.appSegments.some((e3) => e3.multiSegment)) return;
      let e2 = function(e3, t2) {
        let i2, n2, s2, r2 = /* @__PURE__ */ new Map();
        for (let a2 = 0; a2 < e3.length; a2++) i2 = e3[a2], n2 = i2[t2], r2.has(n2) ? s2 = r2.get(n2) : r2.set(n2, s2 = []), s2.push(i2);
        return Array.from(r2);
      }(this.appSegments, "type");
      this.mergedAppSegments = e2.map(([e3, t2]) => {
        let i2 = T.get(e3, this.options);
        if (i2.handleMultiSegments) {
          return { type: e3, chunk: i2.handleMultiSegments(t2) };
        }
        return t2[0];
      });
    }
    getSegment(e2) {
      return this.appSegments.find((t2) => t2.type === e2);
    }
    async getOrFindSegment(e2) {
      let t2 = this.getSegment(e2);
      return void 0 === t2 && (await this.findAppSegments(0, [e2]), t2 = this.getSegment(e2)), t2;
    }
  };
  c(he, "type", "jpeg"), w.set("jpeg", he);
  var ue = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
  var ce = class extends re {
    parseHeader() {
      var e2 = this.chunk.getUint16();
      18761 === e2 ? this.le = true : 19789 === e2 && (this.le = false), this.chunk.le = this.le, this.headerParsed = true;
    }
    parseTags(e2, t2, i2 = /* @__PURE__ */ new Map()) {
      let { pick: n2, skip: s2 } = this.options[t2];
      n2 = new Set(n2);
      let r2 = n2.size > 0, a2 = 0 === s2.size, o2 = this.chunk.getUint16(e2);
      e2 += 2;
      for (let l2 = 0; l2 < o2; l2++) {
        let o3 = this.chunk.getUint16(e2);
        if (r2) {
          if (n2.has(o3) && (i2.set(o3, this.parseTag(e2, o3, t2)), n2.delete(o3), 0 === n2.size)) break;
        } else !a2 && s2.has(o3) || i2.set(o3, this.parseTag(e2, o3, t2));
        e2 += 12;
      }
      return i2;
    }
    parseTag(e2, t2, i2) {
      let { chunk: n2 } = this, s2 = n2.getUint16(e2 + 2), r2 = n2.getUint32(e2 + 4), a2 = ue[s2];
      if (a2 * r2 <= 4 ? e2 += 8 : e2 = n2.getUint32(e2 + 8), (s2 < 1 || s2 > 13) && g(`Invalid TIFF value type. block: ${i2.toUpperCase()}, tag: ${t2.toString(16)}, type: ${s2}, offset ${e2}`), e2 > n2.byteLength && g(`Invalid TIFF value offset. block: ${i2.toUpperCase()}, tag: ${t2.toString(16)}, type: ${s2}, offset ${e2} is outside of chunk size ${n2.byteLength}`), 1 === s2) return n2.getUint8Array(e2, r2);
      if (2 === s2) return m(n2.getString(e2, r2));
      if (7 === s2) return n2.getUint8Array(e2, r2);
      if (1 === r2) return this.parseTagValue(s2, e2);
      {
        let t3 = new (function(e3) {
          switch (e3) {
            case 1:
              return Uint8Array;
            case 3:
              return Uint16Array;
            case 4:
              return Uint32Array;
            case 5:
              return Array;
            case 6:
              return Int8Array;
            case 8:
              return Int16Array;
            case 9:
              return Int32Array;
            case 10:
              return Array;
            case 11:
              return Float32Array;
            case 12:
              return Float64Array;
            default:
              return Array;
          }
        }(s2))(r2), i3 = a2;
        for (let n3 = 0; n3 < r2; n3++) t3[n3] = this.parseTagValue(s2, e2), e2 += i3;
        return t3;
      }
    }
    parseTagValue(e2, t2) {
      let { chunk: i2 } = this;
      switch (e2) {
        case 1:
          return i2.getUint8(t2);
        case 3:
          return i2.getUint16(t2);
        case 4:
          return i2.getUint32(t2);
        case 5:
          return i2.getUint32(t2) / i2.getUint32(t2 + 4);
        case 6:
          return i2.getInt8(t2);
        case 8:
          return i2.getInt16(t2);
        case 9:
          return i2.getInt32(t2);
        case 10:
          return i2.getInt32(t2) / i2.getInt32(t2 + 4);
        case 11:
          return i2.getFloat(t2);
        case 12:
          return i2.getDouble(t2);
        case 13:
          return i2.getUint32(t2);
        default:
          g(`Invalid tiff type ${e2}`);
      }
    }
  };
  var fe = class extends ce {
    static canHandle(e2, t2) {
      return 225 === e2.getUint8(t2 + 1) && 1165519206 === e2.getUint32(t2 + 4) && 0 === e2.getUint16(t2 + 8);
    }
    async parse() {
      this.parseHeader();
      let { options: e2 } = this;
      return e2.ifd0.enabled && await this.parseIfd0Block(), e2.exif.enabled && await this.safeParse("parseExifBlock"), e2.gps.enabled && await this.safeParse("parseGpsBlock"), e2.interop.enabled && await this.safeParse("parseInteropBlock"), e2.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
    }
    safeParse(e2) {
      let t2 = this[e2]();
      return void 0 !== t2.catch && (t2 = t2.catch(this.handleError)), t2;
    }
    findIfd0Offset() {
      void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
    }
    findIfd1Offset() {
      if (void 0 === this.ifd1Offset) {
        this.findIfd0Offset();
        let e2 = this.chunk.getUint16(this.ifd0Offset), t2 = this.ifd0Offset + 2 + 12 * e2;
        this.ifd1Offset = this.chunk.getUint32(t2);
      }
    }
    parseBlock(e2, t2) {
      let i2 = /* @__PURE__ */ new Map();
      return this[t2] = i2, this.parseTags(e2, t2, i2), i2;
    }
    async parseIfd0Block() {
      if (this.ifd0) return;
      let { file: e2 } = this;
      this.findIfd0Offset(), this.ifd0Offset < 8 && g("Malformed EXIF data"), !e2.chunked && this.ifd0Offset > e2.byteLength && g(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e2.byteLength}`), e2.tiff && await e2.ensureChunk(this.ifd0Offset, S(this.options));
      let t2 = this.parseBlock(this.ifd0Offset, "ifd0");
      return 0 !== t2.size ? (this.exifOffset = t2.get(34665), this.interopOffset = t2.get(40965), this.gpsOffset = t2.get(34853), this.xmp = t2.get(700), this.iptc = t2.get(33723), this.icc = t2.get(34675), this.options.sanitize && (t2.delete(34665), t2.delete(40965), t2.delete(34853), t2.delete(700), t2.delete(33723), t2.delete(34675)), t2) : void 0;
    }
    async parseExifBlock() {
      if (this.exif) return;
      if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.exifOffset) return;
      this.file.tiff && await this.file.ensureChunk(this.exifOffset, S(this.options));
      let e2 = this.parseBlock(this.exifOffset, "exif");
      return this.interopOffset || (this.interopOffset = e2.get(40965)), this.makerNote = e2.get(37500), this.userComment = e2.get(37510), this.options.sanitize && (e2.delete(40965), e2.delete(37500), e2.delete(37510)), this.unpack(e2, 41728), this.unpack(e2, 41729), e2;
    }
    unpack(e2, t2) {
      let i2 = e2.get(t2);
      i2 && 1 === i2.length && e2.set(t2, i2[0]);
    }
    async parseGpsBlock() {
      if (this.gps) return;
      if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.gpsOffset) return;
      let e2 = this.parseBlock(this.gpsOffset, "gps");
      return e2 && e2.has(2) && e2.has(4) && (e2.set("latitude", de(...e2.get(2), e2.get(1))), e2.set("longitude", de(...e2.get(4), e2.get(3)))), e2;
    }
    async parseInteropBlock() {
      if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), void 0 !== this.interopOffset || this.exif || await this.parseExifBlock(), void 0 !== this.interopOffset)) return this.parseBlock(this.interopOffset, "interop");
    }
    async parseThumbnailBlock(e2 = false) {
      if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e2)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = true), this.ifd1;
    }
    async extractThumbnail() {
      if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(true), void 0 === this.ifd1) return;
      let e2 = this.ifd1.get(513), t2 = this.ifd1.get(514);
      return this.chunk.getUint8Array(e2, t2);
    }
    get image() {
      return this.ifd0;
    }
    get thumbnail() {
      return this.ifd1;
    }
    createOutput() {
      let e2, t2, i2, n2 = {};
      for (t2 of H) if (e2 = this[t2], !p(e2)) if (i2 = this.canTranslate ? this.translateBlock(e2, t2) : Object.fromEntries(e2), this.options.mergeOutput) {
        if ("ifd1" === t2) continue;
        Object.assign(n2, i2);
      } else n2[t2] = i2;
      return this.makerNote && (n2.makerNote = this.makerNote), this.userComment && (n2.userComment = this.userComment), n2;
    }
    assignToOutput(e2, t2) {
      if (this.globalOptions.mergeOutput) Object.assign(e2, t2);
      else for (let [i2, n2] of Object.entries(t2)) this.assignObjectToOutput(e2, i2, n2);
    }
  };
  function de(e2, t2, i2, n2) {
    var s2 = e2 + t2 / 60 + i2 / 3600;
    return "S" !== n2 && "W" !== n2 || (s2 *= -1), s2;
  }
  c(fe, "type", "tiff"), c(fe, "headerLength", 10), T.set("tiff", fe);
  var pe = Object.freeze({ __proto__: null, default: ne, Exifr: te, fileParsers: w, segmentParsers: T, fileReaders: A, tagKeys: E, tagValues: B, tagRevivers: N, createDictionary: U, extendDictionary: F, fetchUrlAsArrayBuffer: M, readBlobAsArrayBuffer: R, chunkedProps: G, otherSegments: V, segments: z, tiffBlocks: H, segmentsAndBlocks: j, tiffExtractables: W, inheritables: K, allFormatters: X, Options: q, parse: ie });
  var ge = { ifd0: false, ifd1: false, exif: false, gps: false, interop: false, sanitize: false, reviveValues: true, translateKeys: false, translateValues: false, mergeOutput: false };
  var me = Object.assign({}, ge, { firstChunkSize: 4e4, gps: [1, 2, 3, 4] });
  async function Se(e2) {
    let t2 = new te(me);
    await t2.read(e2);
    let i2 = await t2.parse();
    if (i2 && i2.gps) {
      let { latitude: e3, longitude: t3 } = i2.gps;
      return { latitude: e3, longitude: t3 };
    }
  }
  var Ce = Object.assign({}, ge, { tiff: false, ifd1: true, mergeOutput: false });
  async function ye(e2) {
    let t2 = new te(Ce);
    await t2.read(e2);
    let i2 = await t2.extractThumbnail();
    return i2 && a ? s.from(i2) : i2;
  }
  async function be(e2) {
    let t2 = await this.thumbnail(e2);
    if (void 0 !== t2) {
      let e3 = new Blob([t2]);
      return URL.createObjectURL(e3);
    }
  }
  var Ie = Object.assign({}, ge, { firstChunkSize: 4e4, ifd0: [274] });
  async function Pe(e2) {
    let t2 = new te(Ie);
    await t2.read(e2);
    let i2 = await t2.parse();
    if (i2 && i2.ifd0) return i2.ifd0[274];
  }
  var ke = Object.freeze({ 1: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 0, rad: 0 }, 2: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 0, rad: 0 }, 3: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 4: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 5: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 90, rad: 90 * Math.PI / 180 }, 6: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 90, rad: 90 * Math.PI / 180 }, 7: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 270, rad: 270 * Math.PI / 180 }, 8: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 270, rad: 270 * Math.PI / 180 } });
  var we = true;
  var Te = true;
  if ("object" == typeof navigator) {
    let e2 = navigator.userAgent;
    if (e2.includes("iPad") || e2.includes("iPhone")) {
      let t2 = e2.match(/OS (\d+)_(\d+)/);
      if (t2) {
        let [, e3, i2] = t2, n2 = Number(e3) + 0.1 * Number(i2);
        we = n2 < 13.4, Te = false;
      }
    } else if (e2.includes("OS X 10")) {
      let [, t2] = e2.match(/OS X 10[_.](\d+)/);
      we = Te = Number(t2) < 15;
    }
    if (e2.includes("Chrome/")) {
      let [, t2] = e2.match(/Chrome\/(\d+)/);
      we = Te = Number(t2) < 81;
    } else if (e2.includes("Firefox/")) {
      let [, t2] = e2.match(/Firefox\/(\d+)/);
      we = Te = Number(t2) < 77;
    }
  }
  async function Ae(e2) {
    let t2 = await Pe(e2);
    return Object.assign({ canvas: we, css: Te }, ke[t2]);
  }
  var De = class extends I {
    constructor(...e2) {
      super(...e2), c(this, "ranges", new Oe()), 0 !== this.byteLength && this.ranges.add(0, this.byteLength);
    }
    _tryExtend(e2, t2, i2) {
      if (0 === e2 && 0 === this.byteLength && i2) {
        let e3 = new DataView(i2.buffer || i2, i2.byteOffset, i2.byteLength);
        this._swapDataView(e3);
      } else {
        let i3 = e2 + t2;
        if (i3 > this.byteLength) {
          let { dataView: e3 } = this._extend(i3);
          this._swapDataView(e3);
        }
      }
    }
    _extend(e2) {
      let t2;
      t2 = a ? s.allocUnsafe(e2) : new Uint8Array(e2);
      let i2 = new DataView(t2.buffer, t2.byteOffset, t2.byteLength);
      return t2.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), { uintView: t2, dataView: i2 };
    }
    subarray(e2, t2, i2 = false) {
      return t2 = t2 || this._lengthToEnd(e2), i2 && this._tryExtend(e2, t2), this.ranges.add(e2, t2), super.subarray(e2, t2);
    }
    set(e2, t2, i2 = false) {
      i2 && this._tryExtend(t2, e2.byteLength, e2);
      let n2 = super.set(e2, t2);
      return this.ranges.add(t2, n2.byteLength), n2;
    }
    async ensureChunk(e2, t2) {
      this.chunked && (this.ranges.available(e2, t2) || await this.readChunk(e2, t2));
    }
    available(e2, t2) {
      return this.ranges.available(e2, t2);
    }
  };
  var Oe = class {
    constructor() {
      c(this, "list", []);
    }
    get length() {
      return this.list.length;
    }
    add(e2, t2, i2 = 0) {
      let n2 = e2 + t2, s2 = this.list.filter((t3) => xe(e2, t3.offset, n2) || xe(e2, t3.end, n2));
      if (s2.length > 0) {
        e2 = Math.min(e2, ...s2.map((e3) => e3.offset)), n2 = Math.max(n2, ...s2.map((e3) => e3.end)), t2 = n2 - e2;
        let i3 = s2.shift();
        i3.offset = e2, i3.length = t2, i3.end = n2, this.list = this.list.filter((e3) => !s2.includes(e3));
      } else this.list.push({ offset: e2, length: t2, end: n2 });
    }
    available(e2, t2) {
      let i2 = e2 + t2;
      return this.list.some((t3) => t3.offset <= e2 && i2 <= t3.end);
    }
  };
  function xe(e2, t2, i2) {
    return e2 <= t2 && t2 <= i2;
  }
  var ve = class extends De {
    constructor(e2, t2) {
      super(0), c(this, "chunksRead", 0), this.input = e2, this.options = t2;
    }
    async readWhole() {
      this.chunked = false, await this.readChunk(this.nextChunkOffset);
    }
    async readChunked() {
      this.chunked = true, await this.readChunk(0, this.options.firstChunkSize);
    }
    async readNextChunk(e2 = this.nextChunkOffset) {
      if (this.fullyRead) return this.chunksRead++, false;
      let t2 = this.options.chunkSize, i2 = await this.readChunk(e2, t2);
      return !!i2 && i2.byteLength === t2;
    }
    async readChunk(e2, t2) {
      if (this.chunksRead++, 0 !== (t2 = this.safeWrapAddress(e2, t2))) return this._readChunk(e2, t2);
    }
    safeWrapAddress(e2, t2) {
      return void 0 !== this.size && e2 + t2 > this.size ? Math.max(0, this.size - e2) : t2;
    }
    get nextChunkOffset() {
      if (0 !== this.ranges.list.length) return this.ranges.list[0].length;
    }
    get canReadNextChunk() {
      return this.chunksRead < this.options.chunkLimit;
    }
    get fullyRead() {
      return void 0 !== this.size && this.nextChunkOffset === this.size;
    }
    read() {
      return this.options.chunked ? this.readChunked() : this.readWhole();
    }
    close() {
    }
  };
  A.set("blob", class extends ve {
    async readWhole() {
      this.chunked = false;
      let e2 = await R(this.input);
      this._swapArrayBuffer(e2);
    }
    readChunked() {
      return this.chunked = true, this.size = this.input.size, super.readChunked();
    }
    async _readChunk(e2, t2) {
      let i2 = t2 ? e2 + t2 : void 0, n2 = this.input.slice(e2, i2), s2 = await R(n2);
      return this.set(s2, e2, true);
    }
  });
  var Me = Object.freeze({ __proto__: null, default: pe, Exifr: te, fileParsers: w, segmentParsers: T, fileReaders: A, tagKeys: E, tagValues: B, tagRevivers: N, createDictionary: U, extendDictionary: F, fetchUrlAsArrayBuffer: M, readBlobAsArrayBuffer: R, chunkedProps: G, otherSegments: V, segments: z, tiffBlocks: H, segmentsAndBlocks: j, tiffExtractables: W, inheritables: K, allFormatters: X, Options: q, parse: ie, gpsOnlyOptions: me, gps: Se, thumbnailOnlyOptions: Ce, thumbnail: ye, thumbnailUrl: be, orientationOnlyOptions: Ie, orientation: Pe, rotations: ke, get rotateCanvas() {
    return we;
  }, get rotateCss() {
    return Te;
  }, rotation: Ae });
  A.set("url", class extends ve {
    async readWhole() {
      this.chunked = false;
      let e2 = await M(this.input);
      e2 instanceof ArrayBuffer ? this._swapArrayBuffer(e2) : e2 instanceof Uint8Array && this._swapBuffer(e2);
    }
    async _readChunk(e2, t2) {
      let i2 = t2 ? e2 + t2 - 1 : void 0, n2 = this.options.httpHeaders || {};
      (e2 || i2) && (n2.range = `bytes=${[e2, i2].join("-")}`);
      let s2 = await h(this.input, { headers: n2 }), r2 = await s2.arrayBuffer(), a2 = r2.byteLength;
      if (416 !== s2.status) return a2 !== t2 && (this.size = e2 + a2), this.set(r2, e2, true);
    }
  });
  I.prototype.getUint64 = function(e2) {
    let t2 = this.getUint32(e2), i2 = this.getUint32(e2 + 4);
    return t2 < 1048575 ? t2 << 32 | i2 : void 0 !== typeof r ? (console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."), r(t2) << r(32) | r(i2)) : void g("Trying to read 64b value but JS can only handle 53b numbers.");
  };
  var Re = class extends se {
    parseBoxes(e2 = 0) {
      let t2 = [];
      for (; e2 < this.file.byteLength - 4; ) {
        let i2 = this.parseBoxHead(e2);
        if (t2.push(i2), 0 === i2.length) break;
        e2 += i2.length;
      }
      return t2;
    }
    parseSubBoxes(e2) {
      e2.boxes = this.parseBoxes(e2.start);
    }
    findBox(e2, t2) {
      return void 0 === e2.boxes && this.parseSubBoxes(e2), e2.boxes.find((e3) => e3.kind === t2);
    }
    parseBoxHead(e2) {
      let t2 = this.file.getUint32(e2), i2 = this.file.getString(e2 + 4, 4), n2 = e2 + 8;
      return 1 === t2 && (t2 = this.file.getUint64(e2 + 8), n2 += 8), { offset: e2, length: t2, kind: i2, start: n2 };
    }
    parseBoxFullHead(e2) {
      if (void 0 !== e2.version) return;
      let t2 = this.file.getUint32(e2.start);
      e2.version = t2 >> 24, e2.start += 4;
    }
  };
  var Le = class extends Re {
    static canHandle(e2, t2) {
      if (0 !== t2) return false;
      let i2 = e2.getUint16(2);
      if (i2 > 50) return false;
      let n2 = 16, s2 = [];
      for (; n2 < i2; ) s2.push(e2.getString(n2, 4)), n2 += 4;
      return s2.includes(this.type);
    }
    async parse() {
      let e2 = this.file.getUint32(0), t2 = this.parseBoxHead(e2);
      for (; "meta" !== t2.kind; ) e2 += t2.length, await this.file.ensureChunk(e2, 16), t2 = this.parseBoxHead(e2);
      await this.file.ensureChunk(t2.offset, t2.length), this.parseBoxFullHead(t2), this.parseSubBoxes(t2), this.options.icc.enabled && await this.findIcc(t2), this.options.tiff.enabled && await this.findExif(t2);
    }
    async registerSegment(e2, t2, i2) {
      await this.file.ensureChunk(t2, i2);
      let n2 = this.file.subarray(t2, i2);
      this.createParser(e2, n2);
    }
    async findIcc(e2) {
      let t2 = this.findBox(e2, "iprp");
      if (void 0 === t2) return;
      let i2 = this.findBox(t2, "ipco");
      if (void 0 === i2) return;
      let n2 = this.findBox(i2, "colr");
      void 0 !== n2 && await this.registerSegment("icc", n2.offset + 12, n2.length);
    }
    async findExif(e2) {
      let t2 = this.findBox(e2, "iinf");
      if (void 0 === t2) return;
      let i2 = this.findBox(e2, "iloc");
      if (void 0 === i2) return;
      let n2 = this.findExifLocIdInIinf(t2), s2 = this.findExtentInIloc(i2, n2);
      if (void 0 === s2) return;
      let [r2, a2] = s2;
      await this.file.ensureChunk(r2, a2);
      let o2 = 4 + this.file.getUint32(r2);
      r2 += o2, a2 -= o2, await this.registerSegment("tiff", r2, a2);
    }
    findExifLocIdInIinf(e2) {
      this.parseBoxFullHead(e2);
      let t2, i2, n2, s2, r2 = e2.start, a2 = this.file.getUint16(r2);
      for (r2 += 2; a2--; ) {
        if (t2 = this.parseBoxHead(r2), this.parseBoxFullHead(t2), i2 = t2.start, t2.version >= 2 && (n2 = 3 === t2.version ? 4 : 2, s2 = this.file.getString(i2 + n2 + 2, 4), "Exif" === s2)) return this.file.getUintBytes(i2, n2);
        r2 += t2.length;
      }
    }
    get8bits(e2) {
      let t2 = this.file.getUint8(e2);
      return [t2 >> 4, 15 & t2];
    }
    findExtentInIloc(e2, t2) {
      this.parseBoxFullHead(e2);
      let i2 = e2.start, [n2, s2] = this.get8bits(i2++), [r2, a2] = this.get8bits(i2++), o2 = 2 === e2.version ? 4 : 2, l2 = 1 === e2.version || 2 === e2.version ? 2 : 0, h2 = a2 + n2 + s2, u2 = 2 === e2.version ? 4 : 2, c2 = this.file.getUintBytes(i2, u2);
      for (i2 += u2; c2--; ) {
        let e3 = this.file.getUintBytes(i2, o2);
        i2 += o2 + l2 + 2 + r2;
        let u3 = this.file.getUint16(i2);
        if (i2 += 2, e3 === t2) return u3 > 1 && console.warn("ILOC box has more than one extent but we're only processing one\nPlease create an issue at https://github.com/MikeKovarik/exifr with this file"), [this.file.getUintBytes(i2 + a2, n2), this.file.getUintBytes(i2 + a2 + n2, s2)];
        i2 += u3 * h2;
      }
    }
  };
  var Ue = class extends Le {
  };
  c(Ue, "type", "heic");
  var Fe = class extends Le {
  };
  c(Fe, "type", "avif"), w.set("heic", Ue), w.set("avif", Fe), U(E, ["ifd0", "ifd1"], [[256, "ImageWidth"], [257, "ImageHeight"], [258, "BitsPerSample"], [259, "Compression"], [262, "PhotometricInterpretation"], [270, "ImageDescription"], [271, "Make"], [272, "Model"], [273, "StripOffsets"], [274, "Orientation"], [277, "SamplesPerPixel"], [278, "RowsPerStrip"], [279, "StripByteCounts"], [282, "XResolution"], [283, "YResolution"], [284, "PlanarConfiguration"], [296, "ResolutionUnit"], [301, "TransferFunction"], [305, "Software"], [306, "ModifyDate"], [315, "Artist"], [316, "HostComputer"], [317, "Predictor"], [318, "WhitePoint"], [319, "PrimaryChromaticities"], [513, "ThumbnailOffset"], [514, "ThumbnailLength"], [529, "YCbCrCoefficients"], [530, "YCbCrSubSampling"], [531, "YCbCrPositioning"], [532, "ReferenceBlackWhite"], [700, "ApplicationNotes"], [33432, "Copyright"], [33723, "IPTC"], [34665, "ExifIFD"], [34675, "ICC"], [34853, "GpsIFD"], [330, "SubIFD"], [40965, "InteropIFD"], [40091, "XPTitle"], [40092, "XPComment"], [40093, "XPAuthor"], [40094, "XPKeywords"], [40095, "XPSubject"]]), U(E, "exif", [[33434, "ExposureTime"], [33437, "FNumber"], [34850, "ExposureProgram"], [34852, "SpectralSensitivity"], [34855, "ISO"], [34858, "TimeZoneOffset"], [34859, "SelfTimerMode"], [34864, "SensitivityType"], [34865, "StandardOutputSensitivity"], [34866, "RecommendedExposureIndex"], [34867, "ISOSpeed"], [34868, "ISOSpeedLatitudeyyy"], [34869, "ISOSpeedLatitudezzz"], [36864, "ExifVersion"], [36867, "DateTimeOriginal"], [36868, "CreateDate"], [36873, "GooglePlusUploadCode"], [36880, "OffsetTime"], [36881, "OffsetTimeOriginal"], [36882, "OffsetTimeDigitized"], [37121, "ComponentsConfiguration"], [37122, "CompressedBitsPerPixel"], [37377, "ShutterSpeedValue"], [37378, "ApertureValue"], [37379, "BrightnessValue"], [37380, "ExposureCompensation"], [37381, "MaxApertureValue"], [37382, "SubjectDistance"], [37383, "MeteringMode"], [37384, "LightSource"], [37385, "Flash"], [37386, "FocalLength"], [37393, "ImageNumber"], [37394, "SecurityClassification"], [37395, "ImageHistory"], [37396, "SubjectArea"], [37500, "MakerNote"], [37510, "UserComment"], [37520, "SubSecTime"], [37521, "SubSecTimeOriginal"], [37522, "SubSecTimeDigitized"], [37888, "AmbientTemperature"], [37889, "Humidity"], [37890, "Pressure"], [37891, "WaterDepth"], [37892, "Acceleration"], [37893, "CameraElevationAngle"], [40960, "FlashpixVersion"], [40961, "ColorSpace"], [40962, "ExifImageWidth"], [40963, "ExifImageHeight"], [40964, "RelatedSoundFile"], [41483, "FlashEnergy"], [41486, "FocalPlaneXResolution"], [41487, "FocalPlaneYResolution"], [41488, "FocalPlaneResolutionUnit"], [41492, "SubjectLocation"], [41493, "ExposureIndex"], [41495, "SensingMethod"], [41728, "FileSource"], [41729, "SceneType"], [41730, "CFAPattern"], [41985, "CustomRendered"], [41986, "ExposureMode"], [41987, "WhiteBalance"], [41988, "DigitalZoomRatio"], [41989, "FocalLengthIn35mmFormat"], [41990, "SceneCaptureType"], [41991, "GainControl"], [41992, "Contrast"], [41993, "Saturation"], [41994, "Sharpness"], [41996, "SubjectDistanceRange"], [42016, "ImageUniqueID"], [42032, "OwnerName"], [42033, "SerialNumber"], [42034, "LensInfo"], [42035, "LensMake"], [42036, "LensModel"], [42037, "LensSerialNumber"], [42080, "CompositeImage"], [42081, "CompositeImageCount"], [42082, "CompositeImageExposureTimes"], [42240, "Gamma"], [59932, "Padding"], [59933, "OffsetSchema"], [65e3, "OwnerName"], [65001, "SerialNumber"], [65002, "Lens"], [65100, "RawFile"], [65101, "Converter"], [65102, "WhiteBalance"], [65105, "Exposure"], [65106, "Shadows"], [65107, "Brightness"], [65108, "Contrast"], [65109, "Saturation"], [65110, "Sharpness"], [65111, "Smoothness"], [65112, "MoireFilter"], [40965, "InteropIFD"]]), U(E, "gps", [[0, "GPSVersionID"], [1, "GPSLatitudeRef"], [2, "GPSLatitude"], [3, "GPSLongitudeRef"], [4, "GPSLongitude"], [5, "GPSAltitudeRef"], [6, "GPSAltitude"], [7, "GPSTimeStamp"], [8, "GPSSatellites"], [9, "GPSStatus"], [10, "GPSMeasureMode"], [11, "GPSDOP"], [12, "GPSSpeedRef"], [13, "GPSSpeed"], [14, "GPSTrackRef"], [15, "GPSTrack"], [16, "GPSImgDirectionRef"], [17, "GPSImgDirection"], [18, "GPSMapDatum"], [19, "GPSDestLatitudeRef"], [20, "GPSDestLatitude"], [21, "GPSDestLongitudeRef"], [22, "GPSDestLongitude"], [23, "GPSDestBearingRef"], [24, "GPSDestBearing"], [25, "GPSDestDistanceRef"], [26, "GPSDestDistance"], [27, "GPSProcessingMethod"], [28, "GPSAreaInformation"], [29, "GPSDateStamp"], [30, "GPSDifferential"], [31, "GPSHPositioningError"]]), U(B, ["ifd0", "ifd1"], [[274, { 1: "Horizontal (normal)", 2: "Mirror horizontal", 3: "Rotate 180", 4: "Mirror vertical", 5: "Mirror horizontal and rotate 270 CW", 6: "Rotate 90 CW", 7: "Mirror horizontal and rotate 90 CW", 8: "Rotate 270 CW" }], [296, { 1: "None", 2: "inches", 3: "cm" }]]);
  var Ee = U(B, "exif", [[34850, { 0: "Not defined", 1: "Manual", 2: "Normal program", 3: "Aperture priority", 4: "Shutter priority", 5: "Creative program", 6: "Action program", 7: "Portrait mode", 8: "Landscape mode" }], [37121, { 0: "-", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B" }], [37383, { 0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other" }], [37384, { 0: "Unknown", 1: "Daylight", 2: "Fluorescent", 3: "Tungsten (incandescent light)", 4: "Flash", 9: "Fine weather", 10: "Cloudy weather", 11: "Shade", 12: "Daylight fluorescent (D 5700 - 7100K)", 13: "Day white fluorescent (N 4600 - 5400K)", 14: "Cool white fluorescent (W 3900 - 4500K)", 15: "White fluorescent (WW 3200 - 3700K)", 17: "Standard light A", 18: "Standard light B", 19: "Standard light C", 20: "D55", 21: "D65", 22: "D75", 23: "D50", 24: "ISO studio tungsten", 255: "Other" }], [37385, { 0: "Flash did not fire", 1: "Flash fired", 5: "Strobe return light not detected", 7: "Strobe return light detected", 9: "Flash fired, compulsory flash mode", 13: "Flash fired, compulsory flash mode, return light not detected", 15: "Flash fired, compulsory flash mode, return light detected", 16: "Flash did not fire, compulsory flash mode", 24: "Flash did not fire, auto mode", 25: "Flash fired, auto mode", 29: "Flash fired, auto mode, return light not detected", 31: "Flash fired, auto mode, return light detected", 32: "No flash function", 65: "Flash fired, red-eye reduction mode", 69: "Flash fired, red-eye reduction mode, return light not detected", 71: "Flash fired, red-eye reduction mode, return light detected", 73: "Flash fired, compulsory flash mode, red-eye reduction mode", 77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected", 79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected", 89: "Flash fired, auto mode, red-eye reduction mode", 93: "Flash fired, auto mode, return light not detected, red-eye reduction mode", 95: "Flash fired, auto mode, return light detected, red-eye reduction mode" }], [41495, { 1: "Not defined", 2: "One-chip color area sensor", 3: "Two-chip color area sensor", 4: "Three-chip color area sensor", 5: "Color sequential area sensor", 7: "Trilinear sensor", 8: "Color sequential linear sensor" }], [41728, { 1: "Film Scanner", 2: "Reflection Print Scanner", 3: "Digital Camera" }], [41729, { 1: "Directly photographed" }], [41985, { 0: "Normal", 1: "Custom", 2: "HDR (no original saved)", 3: "HDR (original saved)", 4: "Original (for HDR)", 6: "Panorama", 7: "Portrait HDR", 8: "Portrait" }], [41986, { 0: "Auto", 1: "Manual", 2: "Auto bracket" }], [41987, { 0: "Auto", 1: "Manual" }], [41990, { 0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night", 4: "Other" }], [41991, { 0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down" }], [41996, { 0: "Unknown", 1: "Macro", 2: "Close", 3: "Distant" }], [42080, { 0: "Unknown", 1: "Not a Composite Image", 2: "General Composite Image", 3: "Composite Image Captured While Shooting" }]]);
  var Be = { 1: "No absolute unit of measurement", 2: "Inch", 3: "Centimeter" };
  Ee.set(37392, Be), Ee.set(41488, Be);
  var Ne = { 0: "Normal", 1: "Low", 2: "High" };
  function Ge(e2) {
    return "object" == typeof e2 && void 0 !== e2.length ? e2[0] : e2;
  }
  function Ve(e2) {
    let t2 = Array.from(e2).slice(1);
    return t2[1] > 15 && (t2 = t2.map((e3) => String.fromCharCode(e3))), "0" !== t2[2] && 0 !== t2[2] || t2.pop(), t2.join(".");
  }
  function ze(e2) {
    if ("string" == typeof e2) {
      var [t2, i2, n2, s2, r2, a2] = e2.trim().split(/[-: ]/g).map(Number), o2 = new Date(t2, i2 - 1, n2);
      return Number.isNaN(s2) || Number.isNaN(r2) || Number.isNaN(a2) || (o2.setHours(s2), o2.setMinutes(r2), o2.setSeconds(a2)), Number.isNaN(+o2) ? e2 : o2;
    }
  }
  function He(e2) {
    if ("string" == typeof e2) return e2;
    let t2 = [];
    if (0 === e2[1] && 0 === e2[e2.length - 1]) for (let i2 = 0; i2 < e2.length; i2 += 2) t2.push(je(e2[i2 + 1], e2[i2]));
    else for (let i2 = 0; i2 < e2.length; i2 += 2) t2.push(je(e2[i2], e2[i2 + 1]));
    return m(String.fromCodePoint(...t2));
  }
  function je(e2, t2) {
    return e2 << 8 | t2;
  }
  Ee.set(41992, Ne), Ee.set(41993, Ne), Ee.set(41994, Ne), U(N, ["ifd0", "ifd1"], [[50827, function(e2) {
    return "string" != typeof e2 ? b(e2) : e2;
  }], [306, ze], [40091, He], [40092, He], [40093, He], [40094, He], [40095, He]]), U(N, "exif", [[40960, Ve], [36864, Ve], [36867, ze], [36868, ze], [40962, Ge], [40963, Ge]]), U(N, "gps", [[0, (e2) => Array.from(e2).join(".")], [7, (e2) => Array.from(e2).join(":")]]);
  var We = class extends re {
    static canHandle(e2, t2) {
      return 225 === e2.getUint8(t2 + 1) && 1752462448 === e2.getUint32(t2 + 4) && "http://ns.adobe.com/" === e2.getString(t2 + 4, "http://ns.adobe.com/".length);
    }
    static headerLength(e2, t2) {
      return "http://ns.adobe.com/xmp/extension/" === e2.getString(t2 + 4, "http://ns.adobe.com/xmp/extension/".length) ? 79 : 4 + "http://ns.adobe.com/xap/1.0/".length + 1;
    }
    static findPosition(e2, t2) {
      let i2 = super.findPosition(e2, t2);
      return i2.multiSegment = i2.extended = 79 === i2.headerLength, i2.multiSegment ? (i2.chunkCount = e2.getUint8(t2 + 72), i2.chunkNumber = e2.getUint8(t2 + 76), 0 !== e2.getUint8(t2 + 77) && i2.chunkNumber++) : (i2.chunkCount = 1 / 0, i2.chunkNumber = -1), i2;
    }
    static handleMultiSegments(e2) {
      return e2.map((e3) => e3.chunk.getString()).join("");
    }
    normalizeInput(e2) {
      return "string" == typeof e2 ? e2 : I.from(e2).getString();
    }
    parse(e2 = this.chunk) {
      if (!this.localOptions.parse) return e2;
      e2 = function(e3) {
        let t3 = {}, i3 = {};
        for (let e4 of Ze) t3[e4] = [], i3[e4] = 0;
        return e3.replace(et, (e4, n3, s2) => {
          if ("<" === n3) {
            let n4 = ++i3[s2];
            return t3[s2].push(n4), `${e4}#${n4}`;
          }
          return `${e4}#${t3[s2].pop()}`;
        });
      }(e2);
      let t2 = Xe.findAll(e2, "rdf", "Description");
      0 === t2.length && t2.push(new Xe("rdf", "Description", void 0, e2));
      let i2, n2 = {};
      for (let e3 of t2) for (let t3 of e3.properties) i2 = Je(t3.ns, n2), _e(t3, i2);
      return function(e3) {
        let t3;
        for (let i3 in e3) t3 = e3[i3] = f(e3[i3]), void 0 === t3 && delete e3[i3];
        return f(e3);
      }(n2);
    }
    assignToOutput(e2, t2) {
      if (this.localOptions.parse) for (let [i2, n2] of Object.entries(t2)) switch (i2) {
        case "tiff":
          this.assignObjectToOutput(e2, "ifd0", n2);
          break;
        case "exif":
          this.assignObjectToOutput(e2, "exif", n2);
          break;
        case "xmlns":
          break;
        default:
          this.assignObjectToOutput(e2, i2, n2);
      }
      else e2.xmp = t2;
    }
  };
  c(We, "type", "xmp"), c(We, "multiSegment", true), T.set("xmp", We);
  var Ke = class _Ke {
    static findAll(e2) {
      return qe(e2, /([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(_Ke.unpackMatch);
    }
    static unpackMatch(e2) {
      let t2 = e2[1], i2 = e2[2], n2 = e2[3].slice(1, -1);
      return n2 = Qe(n2), new _Ke(t2, i2, n2);
    }
    constructor(e2, t2, i2) {
      this.ns = e2, this.name = t2, this.value = i2;
    }
    serialize() {
      return this.value;
    }
  };
  var Xe = class _Xe {
    static findAll(e2, t2, i2) {
      if (void 0 !== t2 || void 0 !== i2) {
        t2 = t2 || "[\\w\\d-]+", i2 = i2 || "[\\w\\d-]+";
        var n2 = new RegExp(`<(${t2}):(${i2})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`, "gm");
      } else n2 = /<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;
      return qe(e2, n2).map(_Xe.unpackMatch);
    }
    static unpackMatch(e2) {
      let t2 = e2[1], i2 = e2[2], n2 = e2[4], s2 = e2[8];
      return new _Xe(t2, i2, n2, s2);
    }
    constructor(e2, t2, i2, n2) {
      this.ns = e2, this.name = t2, this.attrString = i2, this.innerXml = n2, this.attrs = Ke.findAll(i2), this.children = _Xe.findAll(n2), this.value = 0 === this.children.length ? Qe(n2) : void 0, this.properties = [...this.attrs, ...this.children];
    }
    get isPrimitive() {
      return void 0 !== this.value && 0 === this.attrs.length && 0 === this.children.length;
    }
    get isListContainer() {
      return 1 === this.children.length && this.children[0].isList;
    }
    get isList() {
      let { ns: e2, name: t2 } = this;
      return "rdf" === e2 && ("Seq" === t2 || "Bag" === t2 || "Alt" === t2);
    }
    get isListItem() {
      return "rdf" === this.ns && "li" === this.name;
    }
    serialize() {
      if (0 === this.properties.length && void 0 === this.value) return;
      if (this.isPrimitive) return this.value;
      if (this.isListContainer) return this.children[0].serialize();
      if (this.isList) return $e(this.children.map(Ye));
      if (this.isListItem && 1 === this.children.length && 0 === this.attrs.length) return this.children[0].serialize();
      let e2 = {};
      for (let t2 of this.properties) _e(t2, e2);
      return void 0 !== this.value && (e2.value = this.value), f(e2);
    }
  };
  function _e(e2, t2) {
    let i2 = e2.serialize();
    void 0 !== i2 && (t2[e2.name] = i2);
  }
  var Ye = (e2) => e2.serialize();
  var $e = (e2) => 1 === e2.length ? e2[0] : e2;
  var Je = (e2, t2) => t2[e2] ? t2[e2] : t2[e2] = {};
  function qe(e2, t2) {
    let i2, n2 = [];
    if (!e2) return n2;
    for (; null !== (i2 = t2.exec(e2)); ) n2.push(i2);
    return n2;
  }
  function Qe(e2) {
    if (function(e3) {
      return null == e3 || "null" === e3 || "undefined" === e3 || "" === e3 || "" === e3.trim();
    }(e2)) return;
    let t2 = Number(e2);
    if (!Number.isNaN(t2)) return t2;
    let i2 = e2.toLowerCase();
    return "true" === i2 || "false" !== i2 && e2.trim();
  }
  var Ze = ["rdf:li", "rdf:Seq", "rdf:Bag", "rdf:Alt", "rdf:Description"];
  var et = new RegExp(`(<|\\/)(${Ze.join("|")})`, "g");
  var tt = Object.freeze({ __proto__: null, default: Me, Exifr: te, fileParsers: w, segmentParsers: T, fileReaders: A, tagKeys: E, tagValues: B, tagRevivers: N, createDictionary: U, extendDictionary: F, fetchUrlAsArrayBuffer: M, readBlobAsArrayBuffer: R, chunkedProps: G, otherSegments: V, segments: z, tiffBlocks: H, segmentsAndBlocks: j, tiffExtractables: W, inheritables: K, allFormatters: X, Options: q, parse: ie, gpsOnlyOptions: me, gps: Se, thumbnailOnlyOptions: Ce, thumbnail: ye, thumbnailUrl: be, orientationOnlyOptions: Ie, orientation: Pe, rotations: ke, get rotateCanvas() {
    return we;
  }, get rotateCss() {
    return Te;
  }, rotation: Ae });
  var at = l("fs", (e2) => e2.promises);
  A.set("fs", class extends ve {
    async readWhole() {
      this.chunked = false, this.fs = await at;
      let e2 = await this.fs.readFile(this.input);
      this._swapBuffer(e2);
    }
    async readChunked() {
      this.chunked = true, this.fs = await at, await this.open(), await this.readChunk(0, this.options.firstChunkSize);
    }
    async open() {
      void 0 === this.fh && (this.fh = await this.fs.open(this.input, "r"), this.size = (await this.fh.stat(this.input)).size);
    }
    async _readChunk(e2, t2) {
      void 0 === this.fh && await this.open(), e2 + t2 > this.size && (t2 = this.size - e2);
      var i2 = this.subarray(e2, t2, true);
      return await this.fh.read(i2.dataView, 0, t2, e2), i2;
    }
    async close() {
      if (this.fh) {
        let e2 = this.fh;
        this.fh = void 0, await e2.close();
      }
    }
  });
  A.set("base64", class extends ve {
    constructor(...e2) {
      super(...e2), this.input = this.input.replace(/^data:([^;]+);base64,/gim, ""), this.size = this.input.length / 4 * 3, this.input.endsWith("==") ? this.size -= 2 : this.input.endsWith("=") && (this.size -= 1);
    }
    async _readChunk(e2, t2) {
      let i2, n2, r2 = this.input;
      void 0 === e2 ? (e2 = 0, i2 = 0, n2 = 0) : (i2 = 4 * Math.floor(e2 / 3), n2 = e2 - i2 / 4 * 3), void 0 === t2 && (t2 = this.size);
      let o2 = e2 + t2, l2 = i2 + 4 * Math.ceil(o2 / 3);
      r2 = r2.slice(i2, l2);
      let h2 = Math.min(t2, this.size - e2);
      if (a) {
        let t3 = s.from(r2, "base64").slice(n2, n2 + h2);
        return this.set(t3, e2, true);
      }
      {
        let t3 = this.subarray(e2, h2, true), i3 = atob(r2), s2 = t3.toUint8();
        for (let e3 = 0; e3 < h2; e3++) s2[e3] = i3.charCodeAt(n2 + e3);
        return t3;
      }
    }
  });
  var ot = class extends se {
    static canHandle(e2, t2) {
      return 18761 === t2 || 19789 === t2;
    }
    extendOptions(e2) {
      let { ifd0: t2, xmp: i2, iptc: n2, icc: s2 } = e2;
      i2.enabled && t2.deps.add(700), n2.enabled && t2.deps.add(33723), s2.enabled && t2.deps.add(34675), t2.finalizeFilters();
    }
    async parse() {
      let { tiff: e2, xmp: t2, iptc: i2, icc: n2 } = this.options;
      if (e2.enabled || t2.enabled || i2.enabled || n2.enabled) {
        let e3 = Math.max(S(this.options), this.options.chunkSize);
        await this.file.ensureChunk(0, e3), this.createParser("tiff", this.file), this.parsers.tiff.parseHeader(), await this.parsers.tiff.parseIfd0Block(), this.adaptTiffPropAsSegment("xmp"), this.adaptTiffPropAsSegment("iptc"), this.adaptTiffPropAsSegment("icc");
      }
    }
    adaptTiffPropAsSegment(e2) {
      if (this.parsers.tiff[e2]) {
        let t2 = this.parsers.tiff[e2];
        this.injectSegment(e2, t2);
      }
    }
  };
  c(ot, "type", "tiff"), w.set("tiff", ot);
  var lt = l("zlib");
  var ht = ["ihdr", "iccp", "text", "itxt", "exif"];
  var ut = class extends se {
    constructor(...e2) {
      super(...e2), c(this, "catchError", (e3) => this.errors.push(e3)), c(this, "metaChunks", []), c(this, "unknownChunks", []);
    }
    static canHandle(e2, t2) {
      return 35152 === t2 && 2303741511 === e2.getUint32(0) && 218765834 === e2.getUint32(4);
    }
    async parse() {
      let { file: e2 } = this;
      await this.findPngChunksInRange("\x89PNG\r\n\n".length, e2.byteLength), await this.readSegments(this.metaChunks), this.findIhdr(), this.parseTextChunks(), await this.findExif().catch(this.catchError), await this.findXmp().catch(this.catchError), await this.findIcc().catch(this.catchError);
    }
    async findPngChunksInRange(e2, t2) {
      let { file: i2 } = this;
      for (; e2 < t2; ) {
        let t3 = i2.getUint32(e2), n2 = i2.getUint32(e2 + 4), s2 = i2.getString(e2 + 4, 4).toLowerCase(), r2 = t3 + 4 + 4 + 4, a2 = { type: s2, offset: e2, length: r2, start: e2 + 4 + 4, size: t3, marker: n2 };
        ht.includes(s2) ? this.metaChunks.push(a2) : this.unknownChunks.push(a2), e2 += r2;
      }
    }
    parseTextChunks() {
      let e2 = this.metaChunks.filter((e3) => "text" === e3.type);
      for (let t2 of e2) {
        let [e3, i2] = this.file.getString(t2.start, t2.size).split("\0");
        this.injectKeyValToIhdr(e3, i2);
      }
    }
    injectKeyValToIhdr(e2, t2) {
      let i2 = this.parsers.ihdr;
      i2 && i2.raw.set(e2, t2);
    }
    findIhdr() {
      let e2 = this.metaChunks.find((e3) => "ihdr" === e3.type);
      e2 && false !== this.options.ihdr.enabled && this.createParser("ihdr", e2.chunk);
    }
    async findExif() {
      let e2 = this.metaChunks.find((e3) => "exif" === e3.type);
      e2 && this.injectSegment("tiff", e2.chunk);
    }
    async findXmp() {
      let e2 = this.metaChunks.filter((e3) => "itxt" === e3.type);
      for (let t2 of e2) {
        "XML:com.adobe.xmp" === t2.chunk.getString(0, "XML:com.adobe.xmp".length) && this.injectSegment("xmp", t2.chunk);
      }
    }
    async findIcc() {
      let e2 = this.metaChunks.find((e3) => "iccp" === e3.type);
      if (!e2) return;
      let { chunk: t2 } = e2, i2 = t2.getUint8Array(0, 81), s2 = 0;
      for (; s2 < 80 && 0 !== i2[s2]; ) s2++;
      let r2 = s2 + 2, a2 = t2.getString(0, s2);
      if (this.injectKeyValToIhdr("ProfileName", a2), n) {
        let e3 = await lt, i3 = t2.getUint8Array(r2);
        i3 = e3.inflateSync(i3), this.injectSegment("icc", i3);
      }
    }
  };
  c(ut, "type", "png"), w.set("png", ut), U(E, "interop", [[1, "InteropIndex"], [2, "InteropVersion"], [4096, "RelatedImageFileFormat"], [4097, "RelatedImageWidth"], [4098, "RelatedImageHeight"]]), F(E, "ifd0", [[11, "ProcessingSoftware"], [254, "SubfileType"], [255, "OldSubfileType"], [263, "Thresholding"], [264, "CellWidth"], [265, "CellLength"], [266, "FillOrder"], [269, "DocumentName"], [280, "MinSampleValue"], [281, "MaxSampleValue"], [285, "PageName"], [286, "XPosition"], [287, "YPosition"], [290, "GrayResponseUnit"], [297, "PageNumber"], [321, "HalftoneHints"], [322, "TileWidth"], [323, "TileLength"], [332, "InkSet"], [337, "TargetPrinter"], [18246, "Rating"], [18249, "RatingPercent"], [33550, "PixelScale"], [34264, "ModelTransform"], [34377, "PhotoshopSettings"], [50706, "DNGVersion"], [50707, "DNGBackwardVersion"], [50708, "UniqueCameraModel"], [50709, "LocalizedCameraModel"], [50736, "DNGLensInfo"], [50739, "ShadowScale"], [50740, "DNGPrivateData"], [33920, "IntergraphMatrix"], [33922, "ModelTiePoint"], [34118, "SEMInfo"], [34735, "GeoTiffDirectory"], [34736, "GeoTiffDoubleParams"], [34737, "GeoTiffAsciiParams"], [50341, "PrintIM"], [50721, "ColorMatrix1"], [50722, "ColorMatrix2"], [50723, "CameraCalibration1"], [50724, "CameraCalibration2"], [50725, "ReductionMatrix1"], [50726, "ReductionMatrix2"], [50727, "AnalogBalance"], [50728, "AsShotNeutral"], [50729, "AsShotWhiteXY"], [50730, "BaselineExposure"], [50731, "BaselineNoise"], [50732, "BaselineSharpness"], [50734, "LinearResponseLimit"], [50735, "CameraSerialNumber"], [50741, "MakerNoteSafety"], [50778, "CalibrationIlluminant1"], [50779, "CalibrationIlluminant2"], [50781, "RawDataUniqueID"], [50827, "OriginalRawFileName"], [50828, "OriginalRawFileData"], [50831, "AsShotICCProfile"], [50832, "AsShotPreProfileMatrix"], [50833, "CurrentICCProfile"], [50834, "CurrentPreProfileMatrix"], [50879, "ColorimetricReference"], [50885, "SRawType"], [50898, "PanasonicTitle"], [50899, "PanasonicTitle2"], [50931, "CameraCalibrationSig"], [50932, "ProfileCalibrationSig"], [50933, "ProfileIFD"], [50934, "AsShotProfileName"], [50936, "ProfileName"], [50937, "ProfileHueSatMapDims"], [50938, "ProfileHueSatMapData1"], [50939, "ProfileHueSatMapData2"], [50940, "ProfileToneCurve"], [50941, "ProfileEmbedPolicy"], [50942, "ProfileCopyright"], [50964, "ForwardMatrix1"], [50965, "ForwardMatrix2"], [50966, "PreviewApplicationName"], [50967, "PreviewApplicationVersion"], [50968, "PreviewSettingsName"], [50969, "PreviewSettingsDigest"], [50970, "PreviewColorSpace"], [50971, "PreviewDateTime"], [50972, "RawImageDigest"], [50973, "OriginalRawFileDigest"], [50981, "ProfileLookTableDims"], [50982, "ProfileLookTableData"], [51043, "TimeCodes"], [51044, "FrameRate"], [51058, "TStop"], [51081, "ReelName"], [51089, "OriginalDefaultFinalSize"], [51090, "OriginalBestQualitySize"], [51091, "OriginalDefaultCropSize"], [51105, "CameraLabel"], [51107, "ProfileHueSatMapEncoding"], [51108, "ProfileLookTableEncoding"], [51109, "BaselineExposureOffset"], [51110, "DefaultBlackRender"], [51111, "NewRawImageDigest"], [51112, "RawToPreviewGain"]]);
  var ct = [[273, "StripOffsets"], [279, "StripByteCounts"], [288, "FreeOffsets"], [289, "FreeByteCounts"], [291, "GrayResponseCurve"], [292, "T4Options"], [293, "T6Options"], [300, "ColorResponseUnit"], [320, "ColorMap"], [324, "TileOffsets"], [325, "TileByteCounts"], [326, "BadFaxLines"], [327, "CleanFaxData"], [328, "ConsecutiveBadFaxLines"], [330, "SubIFD"], [333, "InkNames"], [334, "NumberofInks"], [336, "DotRange"], [338, "ExtraSamples"], [339, "SampleFormat"], [340, "SMinSampleValue"], [341, "SMaxSampleValue"], [342, "TransferRange"], [343, "ClipPath"], [344, "XClipPathUnits"], [345, "YClipPathUnits"], [346, "Indexed"], [347, "JPEGTables"], [351, "OPIProxy"], [400, "GlobalParametersIFD"], [401, "ProfileType"], [402, "FaxProfile"], [403, "CodingMethods"], [404, "VersionYear"], [405, "ModeNumber"], [433, "Decode"], [434, "DefaultImageColor"], [435, "T82Options"], [437, "JPEGTables"], [512, "JPEGProc"], [515, "JPEGRestartInterval"], [517, "JPEGLosslessPredictors"], [518, "JPEGPointTransforms"], [519, "JPEGQTables"], [520, "JPEGDCTables"], [521, "JPEGACTables"], [559, "StripRowCounts"], [999, "USPTOMiscellaneous"], [18247, "XP_DIP_XML"], [18248, "StitchInfo"], [28672, "SonyRawFileType"], [28688, "SonyToneCurve"], [28721, "VignettingCorrection"], [28722, "VignettingCorrParams"], [28724, "ChromaticAberrationCorrection"], [28725, "ChromaticAberrationCorrParams"], [28726, "DistortionCorrection"], [28727, "DistortionCorrParams"], [29895, "SonyCropTopLeft"], [29896, "SonyCropSize"], [32781, "ImageID"], [32931, "WangTag1"], [32932, "WangAnnotation"], [32933, "WangTag3"], [32934, "WangTag4"], [32953, "ImageReferencePoints"], [32954, "RegionXformTackPoint"], [32955, "WarpQuadrilateral"], [32956, "AffineTransformMat"], [32995, "Matteing"], [32996, "DataType"], [32997, "ImageDepth"], [32998, "TileDepth"], [33300, "ImageFullWidth"], [33301, "ImageFullHeight"], [33302, "TextureFormat"], [33303, "WrapModes"], [33304, "FovCot"], [33305, "MatrixWorldToScreen"], [33306, "MatrixWorldToCamera"], [33405, "Model2"], [33421, "CFARepeatPatternDim"], [33422, "CFAPattern2"], [33423, "BatteryLevel"], [33424, "KodakIFD"], [33445, "MDFileTag"], [33446, "MDScalePixel"], [33447, "MDColorTable"], [33448, "MDLabName"], [33449, "MDSampleInfo"], [33450, "MDPrepDate"], [33451, "MDPrepTime"], [33452, "MDFileUnits"], [33589, "AdventScale"], [33590, "AdventRevision"], [33628, "UIC1Tag"], [33629, "UIC2Tag"], [33630, "UIC3Tag"], [33631, "UIC4Tag"], [33918, "IntergraphPacketData"], [33919, "IntergraphFlagRegisters"], [33921, "INGRReserved"], [34016, "Site"], [34017, "ColorSequence"], [34018, "IT8Header"], [34019, "RasterPadding"], [34020, "BitsPerRunLength"], [34021, "BitsPerExtendedRunLength"], [34022, "ColorTable"], [34023, "ImageColorIndicator"], [34024, "BackgroundColorIndicator"], [34025, "ImageColorValue"], [34026, "BackgroundColorValue"], [34027, "PixelIntensityRange"], [34028, "TransparencyIndicator"], [34029, "ColorCharacterization"], [34030, "HCUsage"], [34031, "TrapIndicator"], [34032, "CMYKEquivalent"], [34152, "AFCP_IPTC"], [34232, "PixelMagicJBIGOptions"], [34263, "JPLCartoIFD"], [34306, "WB_GRGBLevels"], [34310, "LeafData"], [34687, "TIFF_FXExtensions"], [34688, "MultiProfiles"], [34689, "SharedData"], [34690, "T88Options"], [34732, "ImageLayer"], [34750, "JBIGOptions"], [34856, "Opto-ElectricConvFactor"], [34857, "Interlace"], [34908, "FaxRecvParams"], [34909, "FaxSubAddress"], [34910, "FaxRecvTime"], [34929, "FedexEDR"], [34954, "LeafSubIFD"], [37387, "FlashEnergy"], [37388, "SpatialFrequencyResponse"], [37389, "Noise"], [37390, "FocalPlaneXResolution"], [37391, "FocalPlaneYResolution"], [37392, "FocalPlaneResolutionUnit"], [37397, "ExposureIndex"], [37398, "TIFF-EPStandardID"], [37399, "SensingMethod"], [37434, "CIP3DataFile"], [37435, "CIP3Sheet"], [37436, "CIP3Side"], [37439, "StoNits"], [37679, "MSDocumentText"], [37680, "MSPropertySetStorage"], [37681, "MSDocumentTextPosition"], [37724, "ImageSourceData"], [40965, "InteropIFD"], [40976, "SamsungRawPointersOffset"], [40977, "SamsungRawPointersLength"], [41217, "SamsungRawByteOrder"], [41218, "SamsungRawUnknown"], [41484, "SpatialFrequencyResponse"], [41485, "Noise"], [41489, "ImageNumber"], [41490, "SecurityClassification"], [41491, "ImageHistory"], [41494, "TIFF-EPStandardID"], [41995, "DeviceSettingDescription"], [42112, "GDALMetadata"], [42113, "GDALNoData"], [44992, "ExpandSoftware"], [44993, "ExpandLens"], [44994, "ExpandFilm"], [44995, "ExpandFilterLens"], [44996, "ExpandScanner"], [44997, "ExpandFlashLamp"], [46275, "HasselbladRawImage"], [48129, "PixelFormat"], [48130, "Transformation"], [48131, "Uncompressed"], [48132, "ImageType"], [48256, "ImageWidth"], [48257, "ImageHeight"], [48258, "WidthResolution"], [48259, "HeightResolution"], [48320, "ImageOffset"], [48321, "ImageByteCount"], [48322, "AlphaOffset"], [48323, "AlphaByteCount"], [48324, "ImageDataDiscard"], [48325, "AlphaDataDiscard"], [50215, "OceScanjobDesc"], [50216, "OceApplicationSelector"], [50217, "OceIDNumber"], [50218, "OceImageLogic"], [50255, "Annotations"], [50459, "HasselbladExif"], [50547, "OriginalFileName"], [50560, "USPTOOriginalContentType"], [50656, "CR2CFAPattern"], [50710, "CFAPlaneColor"], [50711, "CFALayout"], [50712, "LinearizationTable"], [50713, "BlackLevelRepeatDim"], [50714, "BlackLevel"], [50715, "BlackLevelDeltaH"], [50716, "BlackLevelDeltaV"], [50717, "WhiteLevel"], [50718, "DefaultScale"], [50719, "DefaultCropOrigin"], [50720, "DefaultCropSize"], [50733, "BayerGreenSplit"], [50737, "ChromaBlurRadius"], [50738, "AntiAliasStrength"], [50752, "RawImageSegmentation"], [50780, "BestQualityScale"], [50784, "AliasLayerMetadata"], [50829, "ActiveArea"], [50830, "MaskedAreas"], [50935, "NoiseReductionApplied"], [50974, "SubTileBlockSize"], [50975, "RowInterleaveFactor"], [51008, "OpcodeList1"], [51009, "OpcodeList2"], [51022, "OpcodeList3"], [51041, "NoiseProfile"], [51114, "CacheVersion"], [51125, "DefaultUserCrop"], [51157, "NikonNEFInfo"], [65024, "KdcIFD"]];
  F(E, "ifd0", ct), F(E, "exif", ct), U(B, "gps", [[23, { M: "Magnetic North", T: "True North" }], [25, { K: "Kilometers", M: "Miles", N: "Nautical Miles" }]]);
  var ft = class extends re {
    static canHandle(e2, t2) {
      return 224 === e2.getUint8(t2 + 1) && 1246120262 === e2.getUint32(t2 + 4) && 0 === e2.getUint8(t2 + 8);
    }
    parse() {
      return this.parseTags(), this.translate(), this.output;
    }
    parseTags() {
      this.raw = /* @__PURE__ */ new Map([[0, this.chunk.getUint16(0)], [2, this.chunk.getUint8(2)], [3, this.chunk.getUint16(3)], [5, this.chunk.getUint16(5)], [7, this.chunk.getUint8(7)], [8, this.chunk.getUint8(8)]]);
    }
  };
  c(ft, "type", "jfif"), c(ft, "headerLength", 9), T.set("jfif", ft), U(E, "jfif", [[0, "JFIFVersion"], [2, "ResolutionUnit"], [3, "XResolution"], [5, "YResolution"], [7, "ThumbnailWidth"], [8, "ThumbnailHeight"]]);
  var dt = class extends re {
    parse() {
      return this.parseTags(), this.translate(), this.output;
    }
    parseTags() {
      this.raw = new Map([[0, this.chunk.getUint32(0)], [4, this.chunk.getUint32(4)], [8, this.chunk.getUint8(8)], [9, this.chunk.getUint8(9)], [10, this.chunk.getUint8(10)], [11, this.chunk.getUint8(11)], [12, this.chunk.getUint8(12)], ...Array.from(this.raw)]);
    }
  };
  c(dt, "type", "ihdr"), T.set("ihdr", dt), U(E, "ihdr", [[0, "ImageWidth"], [4, "ImageHeight"], [8, "BitDepth"], [9, "ColorType"], [10, "Compression"], [11, "Filter"], [12, "Interlace"]]), U(B, "ihdr", [[9, { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha", DEFAULT: "Unknown" }], [10, { 0: "Deflate/Inflate", DEFAULT: "Unknown" }], [11, { 0: "Adaptive", DEFAULT: "Unknown" }], [12, { 0: "Noninterlaced", 1: "Adam7 Interlace", DEFAULT: "Unknown" }]]);
  var pt = class extends re {
    static canHandle(e2, t2) {
      return 226 === e2.getUint8(t2 + 1) && 1229144927 === e2.getUint32(t2 + 4);
    }
    static findPosition(e2, t2) {
      let i2 = super.findPosition(e2, t2);
      return i2.chunkNumber = e2.getUint8(t2 + 16), i2.chunkCount = e2.getUint8(t2 + 17), i2.multiSegment = i2.chunkCount > 1, i2;
    }
    static handleMultiSegments(e2) {
      return function(e3) {
        let t2 = function(e4) {
          let t3 = e4[0].constructor, i2 = 0;
          for (let t4 of e4) i2 += t4.length;
          let n2 = new t3(i2), s2 = 0;
          for (let t4 of e4) n2.set(t4, s2), s2 += t4.length;
          return n2;
        }(e3.map((e4) => e4.chunk.toUint8()));
        return new I(t2);
      }(e2);
    }
    parse() {
      return this.raw = /* @__PURE__ */ new Map(), this.parseHeader(), this.parseTags(), this.translate(), this.output;
    }
    parseHeader() {
      let { raw: e2 } = this;
      this.chunk.byteLength < 84 && g("ICC header is too short");
      for (let [t2, i2] of Object.entries(gt)) {
        t2 = parseInt(t2, 10);
        let n2 = i2(this.chunk, t2);
        "\0\0\0\0" !== n2 && e2.set(t2, n2);
      }
    }
    parseTags() {
      let e2, t2, i2, n2, s2, { raw: r2 } = this, a2 = this.chunk.getUint32(128), o2 = 132, l2 = this.chunk.byteLength;
      for (; a2--; ) {
        if (e2 = this.chunk.getString(o2, 4), t2 = this.chunk.getUint32(o2 + 4), i2 = this.chunk.getUint32(o2 + 8), n2 = this.chunk.getString(t2, 4), t2 + i2 > l2) return void console.warn("reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.");
        s2 = this.parseTag(n2, t2, i2), void 0 !== s2 && "\0\0\0\0" !== s2 && r2.set(e2, s2), o2 += 12;
      }
    }
    parseTag(e2, t2, i2) {
      switch (e2) {
        case "desc":
          return this.parseDesc(t2);
        case "mluc":
          return this.parseMluc(t2);
        case "text":
          return this.parseText(t2, i2);
        case "sig ":
          return this.parseSig(t2);
      }
      if (!(t2 + i2 > this.chunk.byteLength)) return this.chunk.getUint8Array(t2, i2);
    }
    parseDesc(e2) {
      let t2 = this.chunk.getUint32(e2 + 8) - 1;
      return m(this.chunk.getString(e2 + 12, t2));
    }
    parseText(e2, t2) {
      return m(this.chunk.getString(e2 + 8, t2 - 8));
    }
    parseSig(e2) {
      return m(this.chunk.getString(e2 + 8, 4));
    }
    parseMluc(e2) {
      let { chunk: t2 } = this, i2 = t2.getUint32(e2 + 8), n2 = t2.getUint32(e2 + 12), s2 = e2 + 16, r2 = [];
      for (let a2 = 0; a2 < i2; a2++) {
        let i3 = t2.getString(s2 + 0, 2), a3 = t2.getString(s2 + 2, 2), o2 = t2.getUint32(s2 + 4), l2 = t2.getUint32(s2 + 8) + e2, h2 = m(t2.getUnicodeString(l2, o2));
        r2.push({ lang: i3, country: a3, text: h2 }), s2 += n2;
      }
      return 1 === i2 ? r2[0].text : r2;
    }
    translateValue(e2, t2) {
      return "string" == typeof e2 ? t2[e2] || t2[e2.toLowerCase()] || e2 : t2[e2] || e2;
    }
  };
  c(pt, "type", "icc"), c(pt, "multiSegment", true), c(pt, "headerLength", 18);
  var gt = { 4: mt, 8: function(e2, t2) {
    return [e2.getUint8(t2), e2.getUint8(t2 + 1) >> 4, e2.getUint8(t2 + 1) % 16].map((e3) => e3.toString(10)).join(".");
  }, 12: mt, 16: mt, 20: mt, 24: function(e2, t2) {
    const i2 = e2.getUint16(t2), n2 = e2.getUint16(t2 + 2) - 1, s2 = e2.getUint16(t2 + 4), r2 = e2.getUint16(t2 + 6), a2 = e2.getUint16(t2 + 8), o2 = e2.getUint16(t2 + 10);
    return new Date(Date.UTC(i2, n2, s2, r2, a2, o2));
  }, 36: mt, 40: mt, 48: mt, 52: mt, 64: (e2, t2) => e2.getUint32(t2), 80: mt };
  function mt(e2, t2) {
    return m(e2.getString(t2, 4));
  }
  T.set("icc", pt), U(E, "icc", [[4, "ProfileCMMType"], [8, "ProfileVersion"], [12, "ProfileClass"], [16, "ColorSpaceData"], [20, "ProfileConnectionSpace"], [24, "ProfileDateTime"], [36, "ProfileFileSignature"], [40, "PrimaryPlatform"], [44, "CMMFlags"], [48, "DeviceManufacturer"], [52, "DeviceModel"], [56, "DeviceAttributes"], [64, "RenderingIntent"], [68, "ConnectionSpaceIlluminant"], [80, "ProfileCreator"], [84, "ProfileID"], ["Header", "ProfileHeader"], ["MS00", "WCSProfiles"], ["bTRC", "BlueTRC"], ["bXYZ", "BlueMatrixColumn"], ["bfd", "UCRBG"], ["bkpt", "MediaBlackPoint"], ["calt", "CalibrationDateTime"], ["chad", "ChromaticAdaptation"], ["chrm", "Chromaticity"], ["ciis", "ColorimetricIntentImageState"], ["clot", "ColorantTableOut"], ["clro", "ColorantOrder"], ["clrt", "ColorantTable"], ["cprt", "ProfileCopyright"], ["crdi", "CRDInfo"], ["desc", "ProfileDescription"], ["devs", "DeviceSettings"], ["dmdd", "DeviceModelDesc"], ["dmnd", "DeviceMfgDesc"], ["dscm", "ProfileDescriptionML"], ["fpce", "FocalPlaneColorimetryEstimates"], ["gTRC", "GreenTRC"], ["gXYZ", "GreenMatrixColumn"], ["gamt", "Gamut"], ["kTRC", "GrayTRC"], ["lumi", "Luminance"], ["meas", "Measurement"], ["meta", "Metadata"], ["mmod", "MakeAndModel"], ["ncl2", "NamedColor2"], ["ncol", "NamedColor"], ["ndin", "NativeDisplayInfo"], ["pre0", "Preview0"], ["pre1", "Preview1"], ["pre2", "Preview2"], ["ps2i", "PS2RenderingIntent"], ["ps2s", "PostScript2CSA"], ["psd0", "PostScript2CRD0"], ["psd1", "PostScript2CRD1"], ["psd2", "PostScript2CRD2"], ["psd3", "PostScript2CRD3"], ["pseq", "ProfileSequenceDesc"], ["psid", "ProfileSequenceIdentifier"], ["psvm", "PS2CRDVMSize"], ["rTRC", "RedTRC"], ["rXYZ", "RedMatrixColumn"], ["resp", "OutputResponse"], ["rhoc", "ReflectionHardcopyOrigColorimetry"], ["rig0", "PerceptualRenderingIntentGamut"], ["rig2", "SaturationRenderingIntentGamut"], ["rpoc", "ReflectionPrintOutputColorimetry"], ["sape", "SceneAppearanceEstimates"], ["scoe", "SceneColorimetryEstimates"], ["scrd", "ScreeningDesc"], ["scrn", "Screening"], ["targ", "CharTarget"], ["tech", "Technology"], ["vcgt", "VideoCardGamma"], ["view", "ViewingConditions"], ["vued", "ViewingCondDesc"], ["wtpt", "MediaWhitePoint"]]);
  var St = { "4d2p": "Erdt Systems", AAMA: "Aamazing Technologies", ACER: "Acer", ACLT: "Acolyte Color Research", ACTI: "Actix Sytems", ADAR: "Adara Technology", ADBE: "Adobe", ADI: "ADI Systems", AGFA: "Agfa Graphics", ALMD: "Alps Electric", ALPS: "Alps Electric", ALWN: "Alwan Color Expertise", AMTI: "Amiable Technologies", AOC: "AOC International", APAG: "Apago", APPL: "Apple Computer", AST: "AST", "AT&T": "AT&T", BAEL: "BARBIERI electronic", BRCO: "Barco NV", BRKP: "Breakpoint", BROT: "Brother", BULL: "Bull", BUS: "Bus Computer Systems", "C-IT": "C-Itoh", CAMR: "Intel", CANO: "Canon", CARR: "Carroll Touch", CASI: "Casio", CBUS: "Colorbus PL", CEL: "Crossfield", CELx: "Crossfield", CGS: "CGS Publishing Technologies International", CHM: "Rochester Robotics", CIGL: "Colour Imaging Group, London", CITI: "Citizen", CL00: "Candela", CLIQ: "Color IQ", CMCO: "Chromaco", CMiX: "CHROMiX", COLO: "Colorgraphic Communications", COMP: "Compaq", COMp: "Compeq/Focus Technology", CONR: "Conrac Display Products", CORD: "Cordata Technologies", CPQ: "Compaq", CPRO: "ColorPro", CRN: "Cornerstone", CTX: "CTX International", CVIS: "ColorVision", CWC: "Fujitsu Laboratories", DARI: "Darius Technology", DATA: "Dataproducts", DCP: "Dry Creek Photo", DCRC: "Digital Contents Resource Center, Chung-Ang University", DELL: "Dell Computer", DIC: "Dainippon Ink and Chemicals", DICO: "Diconix", DIGI: "Digital", "DL&C": "Digital Light & Color", DPLG: "Doppelganger", DS: "Dainippon Screen", DSOL: "DOOSOL", DUPN: "DuPont", EPSO: "Epson", ESKO: "Esko-Graphics", ETRI: "Electronics and Telecommunications Research Institute", EVER: "Everex Systems", EXAC: "ExactCODE", Eizo: "Eizo", FALC: "Falco Data Products", FF: "Fuji Photo Film", FFEI: "FujiFilm Electronic Imaging", FNRD: "Fnord Software", FORA: "Fora", FORE: "Forefront Technology", FP: "Fujitsu", FPA: "WayTech Development", FUJI: "Fujitsu", FX: "Fuji Xerox", GCC: "GCC Technologies", GGSL: "Global Graphics Software", GMB: "Gretagmacbeth", GMG: "GMG", GOLD: "GoldStar Technology", GOOG: "Google", GPRT: "Giantprint", GTMB: "Gretagmacbeth", GVC: "WayTech Development", GW2K: "Sony", HCI: "HCI", HDM: "Heidelberger Druckmaschinen", HERM: "Hermes", HITA: "Hitachi America", HP: "Hewlett-Packard", HTC: "Hitachi", HiTi: "HiTi Digital", IBM: "IBM", IDNT: "Scitex", IEC: "Hewlett-Packard", IIYA: "Iiyama North America", IKEG: "Ikegami Electronics", IMAG: "Image Systems", IMI: "Ingram Micro", INTC: "Intel", INTL: "N/A (INTL)", INTR: "Intra Electronics", IOCO: "Iocomm International Technology", IPS: "InfoPrint Solutions Company", IRIS: "Scitex", ISL: "Ichikawa Soft Laboratory", ITNL: "N/A (ITNL)", IVM: "IVM", IWAT: "Iwatsu Electric", Idnt: "Scitex", Inca: "Inca Digital Printers", Iris: "Scitex", JPEG: "Joint Photographic Experts Group", JSFT: "Jetsoft Development", JVC: "JVC Information Products", KART: "Scitex", KFC: "KFC Computek Components", KLH: "KLH Computers", KMHD: "Konica Minolta", KNCA: "Konica", KODA: "Kodak", KYOC: "Kyocera", Kart: "Scitex", LCAG: "Leica", LCCD: "Leeds Colour", LDAK: "Left Dakota", LEAD: "Leading Technology", LEXM: "Lexmark International", LINK: "Link Computer", LINO: "Linotronic", LITE: "Lite-On", Leaf: "Leaf", Lino: "Linotronic", MAGC: "Mag Computronic", MAGI: "MAG Innovision", MANN: "Mannesmann", MICN: "Micron Technology", MICR: "Microtek", MICV: "Microvitec", MINO: "Minolta", MITS: "Mitsubishi Electronics America", MITs: "Mitsuba", MNLT: "Minolta", MODG: "Modgraph", MONI: "Monitronix", MONS: "Monaco Systems", MORS: "Morse Technology", MOTI: "Motive Systems", MSFT: "Microsoft", MUTO: "MUTOH INDUSTRIES", Mits: "Mitsubishi Electric", NANA: "NANAO", NEC: "NEC", NEXP: "NexPress Solutions", NISS: "Nissei Sangyo America", NKON: "Nikon", NONE: "none", OCE: "Oce Technologies", OCEC: "OceColor", OKI: "Oki", OKID: "Okidata", OKIP: "Okidata", OLIV: "Olivetti", OLYM: "Olympus", ONYX: "Onyx Graphics", OPTI: "Optiquest", PACK: "Packard Bell", PANA: "Matsushita Electric Industrial", PANT: "Pantone", PBN: "Packard Bell", PFU: "PFU", PHIL: "Philips Consumer Electronics", PNTX: "HOYA", POne: "Phase One A/S", PREM: "Premier Computer Innovations", PRIN: "Princeton Graphic Systems", PRIP: "Princeton Publishing Labs", QLUX: "Hong Kong", QMS: "QMS", QPCD: "QPcard AB", QUAD: "QuadLaser", QUME: "Qume", RADI: "Radius", RDDx: "Integrated Color Solutions", RDG: "Roland DG", REDM: "REDMS Group", RELI: "Relisys", RGMS: "Rolf Gierling Multitools", RICO: "Ricoh", RNLD: "Edmund Ronald", ROYA: "Royal", RPC: "Ricoh Printing Systems", RTL: "Royal Information Electronics", SAMP: "Sampo", SAMS: "Samsung", SANT: "Jaime Santana Pomares", SCIT: "Scitex", SCRN: "Dainippon Screen", SDP: "Scitex", SEC: "Samsung", SEIK: "Seiko Instruments", SEIk: "Seikosha", SGUY: "ScanGuy.com", SHAR: "Sharp Laboratories", SICC: "International Color Consortium", SONY: "Sony", SPCL: "SpectraCal", STAR: "Star", STC: "Sampo Technology", Scit: "Scitex", Sdp: "Scitex", Sony: "Sony", TALO: "Talon Technology", TAND: "Tandy", TATU: "Tatung", TAXA: "TAXAN America", TDS: "Tokyo Denshi Sekei", TECO: "TECO Information Systems", TEGR: "Tegra", TEKT: "Tektronix", TI: "Texas Instruments", TMKR: "TypeMaker", TOSB: "Toshiba", TOSH: "Toshiba", TOTK: "TOTOKU ELECTRIC", TRIU: "Triumph", TSBT: "Toshiba", TTX: "TTX Computer Products", TVM: "TVM Professional Monitor", TW: "TW Casper", ULSX: "Ulead Systems", UNIS: "Unisys", UTZF: "Utz Fehlau & Sohn", VARI: "Varityper", VIEW: "Viewsonic", VISL: "Visual communication", VIVO: "Vivo Mobile Communication", WANG: "Wang", WLBR: "Wilbur Imaging", WTG2: "Ware To Go", WYSE: "WYSE Technology", XERX: "Xerox", XRIT: "X-Rite", ZRAN: "Zoran", Zebr: "Zebra Technologies", appl: "Apple Computer", bICC: "basICColor", berg: "bergdesign", ceyd: "Integrated Color Solutions", clsp: "MacDermid ColorSpan", ds: "Dainippon Screen", dupn: "DuPont", ffei: "FujiFilm Electronic Imaging", flux: "FluxData", iris: "Scitex", kart: "Scitex", lcms: "Little CMS", lino: "Linotronic", none: "none", ob4d: "Erdt Systems", obic: "Medigraph", quby: "Qubyx Sarl", scit: "Scitex", scrn: "Dainippon Screen", sdp: "Scitex", siwi: "SIWI GRAFIKA", yxym: "YxyMaster" };
  var Ct = { scnr: "Scanner", mntr: "Monitor", prtr: "Printer", link: "Device Link", abst: "Abstract", spac: "Color Space Conversion Profile", nmcl: "Named Color", cenc: "ColorEncodingSpace profile", mid: "MultiplexIdentification profile", mlnk: "MultiplexLink profile", mvis: "MultiplexVisualization profile", nkpf: "Nikon Input Device Profile (NON-STANDARD!)" };
  U(B, "icc", [[4, St], [12, Ct], [40, Object.assign({}, St, Ct)], [48, St], [80, St], [64, { 0: "Perceptual", 1: "Relative Colorimetric", 2: "Saturation", 3: "Absolute Colorimetric" }], ["tech", { amd: "Active Matrix Display", crt: "Cathode Ray Tube Display", kpcd: "Photo CD", pmd: "Passive Matrix Display", dcam: "Digital Camera", dcpj: "Digital Cinema Projector", dmpc: "Digital Motion Picture Camera", dsub: "Dye Sublimation Printer", epho: "Electrophotographic Printer", esta: "Electrostatic Printer", flex: "Flexography", fprn: "Film Writer", fscn: "Film Scanner", grav: "Gravure", ijet: "Ink Jet Printer", imgs: "Photo Image Setter", mpfr: "Motion Picture Film Recorder", mpfs: "Motion Picture Film Scanner", offs: "Offset Lithography", pjtv: "Projection Television", rpho: "Photographic Paper Printer", rscn: "Reflective Scanner", silk: "Silkscreen", twax: "Thermal Wax Printer", vidc: "Video Camera", vidm: "Video Monitor" }]]);
  var yt = class extends re {
    static canHandle(e2, t2, i2) {
      return 237 === e2.getUint8(t2 + 1) && "Photoshop" === e2.getString(t2 + 4, 9) && void 0 !== this.containsIptc8bim(e2, t2, i2);
    }
    static headerLength(e2, t2, i2) {
      let n2, s2 = this.containsIptc8bim(e2, t2, i2);
      if (void 0 !== s2) return n2 = e2.getUint8(t2 + s2 + 7), n2 % 2 != 0 && (n2 += 1), 0 === n2 && (n2 = 4), s2 + 8 + n2;
    }
    static containsIptc8bim(e2, t2, i2) {
      for (let n2 = 0; n2 < i2; n2++) if (this.isIptcSegmentHead(e2, t2 + n2)) return n2;
    }
    static isIptcSegmentHead(e2, t2) {
      return 56 === e2.getUint8(t2) && 943868237 === e2.getUint32(t2) && 1028 === e2.getUint16(t2 + 4);
    }
    parse() {
      let { raw: e2 } = this, t2 = this.chunk.byteLength - 1, i2 = false;
      for (let n2 = 0; n2 < t2; n2++) if (28 === this.chunk.getUint8(n2) && 2 === this.chunk.getUint8(n2 + 1)) {
        i2 = true;
        let t3 = this.chunk.getUint16(n2 + 3), s2 = this.chunk.getUint8(n2 + 2), r2 = this.chunk.getLatin1String(n2 + 5, t3);
        e2.set(s2, this.pluralizeValue(e2.get(s2), r2)), n2 += 4 + t3;
      } else if (i2) break;
      return this.translate(), this.output;
    }
    pluralizeValue(e2, t2) {
      return void 0 !== e2 ? e2 instanceof Array ? (e2.push(t2), e2) : [e2, t2] : t2;
    }
  };
  c(yt, "type", "iptc"), c(yt, "translateValues", false), c(yt, "reviveValues", false), T.set("iptc", yt), U(E, "iptc", [[0, "ApplicationRecordVersion"], [3, "ObjectTypeReference"], [4, "ObjectAttributeReference"], [5, "ObjectName"], [7, "EditStatus"], [8, "EditorialUpdate"], [10, "Urgency"], [12, "SubjectReference"], [15, "Category"], [20, "SupplementalCategories"], [22, "FixtureIdentifier"], [25, "Keywords"], [26, "ContentLocationCode"], [27, "ContentLocationName"], [30, "ReleaseDate"], [35, "ReleaseTime"], [37, "ExpirationDate"], [38, "ExpirationTime"], [40, "SpecialInstructions"], [42, "ActionAdvised"], [45, "ReferenceService"], [47, "ReferenceDate"], [50, "ReferenceNumber"], [55, "DateCreated"], [60, "TimeCreated"], [62, "DigitalCreationDate"], [63, "DigitalCreationTime"], [65, "OriginatingProgram"], [70, "ProgramVersion"], [75, "ObjectCycle"], [80, "Byline"], [85, "BylineTitle"], [90, "City"], [92, "Sublocation"], [95, "State"], [100, "CountryCode"], [101, "Country"], [103, "OriginalTransmissionReference"], [105, "Headline"], [110, "Credit"], [115, "Source"], [116, "CopyrightNotice"], [118, "Contact"], [120, "Caption"], [121, "LocalCaption"], [122, "Writer"], [125, "RasterizedCaption"], [130, "ImageType"], [131, "ImageOrientation"], [135, "LanguageIdentifier"], [150, "AudioType"], [151, "AudioSamplingRate"], [152, "AudioSamplingResolution"], [153, "AudioDuration"], [154, "AudioOutcue"], [184, "JobID"], [185, "MasterDocumentID"], [186, "ShortDocumentID"], [187, "UniqueDocumentID"], [188, "OwnerID"], [200, "ObjectPreviewFileFormat"], [201, "ObjectPreviewFileVersion"], [202, "ObjectPreviewData"], [221, "Prefs"], [225, "ClassifyState"], [228, "SimilarityIndex"], [230, "DocumentNotes"], [231, "DocumentHistory"], [232, "ExifCameraInfo"], [255, "CatalogSets"]]), U(B, "iptc", [[10, { 0: "0 (reserved)", 1: "1 (most urgent)", 2: "2", 3: "3", 4: "4", 5: "5 (normal urgency)", 6: "6", 7: "7", 8: "8 (least urgent)", 9: "9 (user-defined priority)" }], [75, { a: "Morning", b: "Both Morning and Evening", p: "Evening" }], [131, { L: "Landscape", P: "Portrait", S: "Square" }]]);
  var full_esm_default = tt;

  // src/utils.js
  function loadImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e2) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = e2.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  async function checkOriginal(file) {
    try {
      const exif = await full_esm_default.parse(file, { xmp: true });
      return {
        is_google: exif?.Credit === "Made with Google AI",
        is_original: ["ImageWidth", "ImageHeight"].every((key) => exif?.[key])
      };
    } catch {
      return { is_google: false, is_original: false };
    }
  }
  function getOriginalStatus({ is_google, is_original }) {
    if (!is_google) return i18n_default.t("original.not_gemini");
    if (!is_original) return i18n_default.t("original.not_original");
    return "";
  }
  var statusMessage = document.getElementById("statusMessage");
  function setStatusMessage(message = "", type = "") {
    statusMessage.textContent = message;
    statusMessage.style.display = message ? "block" : "none";
    const colorMap = { warn: "text-warn", success: "text-success" };
    statusMessage.classList.remove(...Object.values(colorMap));
    if (colorMap[type]) statusMessage.classList.add(colorMap[type]);
  }
  var loadingOverlay = document.getElementById("loadingOverlay");
  function showLoading(text = null) {
    loadingOverlay.style.display = "flex";
    const textEl = loadingOverlay.querySelector("p");
    if (textEl && text) textEl.textContent = text;
  }
  function hideLoading() {
    loadingOverlay.style.display = "none";
  }

  // src/app.js
  var import_jszip = __toESM(require_jszip_min(), 1);

  // node_modules/.pnpm/medium-zoom@1.1.0/node_modules/medium-zoom/dist/medium-zoom.esm.js
  var _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var isSupported = function isSupported2(node) {
    return node.tagName === "IMG";
  };
  var isNodeList = function isNodeList2(selector) {
    return NodeList.prototype.isPrototypeOf(selector);
  };
  var isNode = function isNode2(selector) {
    return selector && selector.nodeType === 1;
  };
  var isSvg = function isSvg2(image) {
    var source = image.currentSrc || image.src;
    return source.substr(-4).toLowerCase() === ".svg";
  };
  var getImagesFromSelector = function getImagesFromSelector2(selector) {
    try {
      if (Array.isArray(selector)) {
        return selector.filter(isSupported);
      }
      if (isNodeList(selector)) {
        return [].slice.call(selector).filter(isSupported);
      }
      if (isNode(selector)) {
        return [selector].filter(isSupported);
      }
      if (typeof selector === "string") {
        return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
      }
      return [];
    } catch (err) {
      throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
    }
  };
  var createOverlay = function createOverlay2(background) {
    var overlay = document.createElement("div");
    overlay.classList.add("medium-zoom-overlay");
    overlay.style.background = background;
    return overlay;
  };
  var cloneTarget = function cloneTarget2(template) {
    var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
    var clone = template.cloneNode();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    clone.removeAttribute("id");
    clone.style.position = "absolute";
    clone.style.top = top + scrollTop + "px";
    clone.style.left = left + scrollLeft + "px";
    clone.style.width = width + "px";
    clone.style.height = height + "px";
    clone.style.transform = "";
    return clone;
  };
  var createCustomEvent = function createCustomEvent2(type, params) {
    var eventParams = _extends({
      bubbles: false,
      cancelable: false,
      detail: void 0
    }, params);
    if (typeof window.CustomEvent === "function") {
      return new CustomEvent(type, eventParams);
    }
    var customEvent = document.createEvent("CustomEvent");
    customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
    return customEvent;
  };
  var mediumZoom = function mediumZoom2(selector) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var Promise2 = window.Promise || function Promise3(fn) {
      function noop() {
      }
      fn(noop, noop);
    };
    var _handleClick = function _handleClick2(event) {
      var target = event.target;
      if (target === overlay) {
        close();
        return;
      }
      if (images.indexOf(target) === -1) {
        return;
      }
      toggle({ target });
    };
    var _handleScroll = function _handleScroll2() {
      if (isAnimating || !active.original) {
        return;
      }
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
        setTimeout(close, 150);
      }
    };
    var _handleKeyUp = function _handleKeyUp2(event) {
      var key = event.key || event.keyCode;
      if (key === "Escape" || key === "Esc" || key === 27) {
        close();
      }
    };
    var update = function update2() {
      var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var newOptions = options2;
      if (options2.background) {
        overlay.style.background = options2.background;
      }
      if (options2.container && options2.container instanceof Object) {
        newOptions.container = _extends({}, zoomOptions.container, options2.container);
      }
      if (options2.template) {
        var template = isNode(options2.template) ? options2.template : document.querySelector(options2.template);
        newOptions.template = template;
      }
      zoomOptions = _extends({}, zoomOptions, newOptions);
      images.forEach(function(image) {
        image.dispatchEvent(createCustomEvent("medium-zoom:update", {
          detail: { zoom: zoom2 }
        }));
      });
      return zoom2;
    };
    var clone = function clone2() {
      var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return mediumZoom2(_extends({}, zoomOptions, options2));
    };
    var attach = function attach2() {
      for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
        selectors[_key] = arguments[_key];
      }
      var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
        return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
      }, []);
      newImages.filter(function(newImage) {
        return images.indexOf(newImage) === -1;
      }).forEach(function(newImage) {
        images.push(newImage);
        newImage.classList.add("medium-zoom-image");
      });
      eventListeners.forEach(function(_ref) {
        var type = _ref.type, listener = _ref.listener, options2 = _ref.options;
        newImages.forEach(function(image) {
          image.addEventListener(type, listener, options2);
        });
      });
      return zoom2;
    };
    var detach = function detach2() {
      for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        selectors[_key2] = arguments[_key2];
      }
      if (active.zoomed) {
        close();
      }
      var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
        return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
      }, []) : images;
      imagesToDetach.forEach(function(image) {
        image.classList.remove("medium-zoom-image");
        image.dispatchEvent(createCustomEvent("medium-zoom:detach", {
          detail: { zoom: zoom2 }
        }));
      });
      images = images.filter(function(image) {
        return imagesToDetach.indexOf(image) === -1;
      });
      return zoom2;
    };
    var on = function on2(type, listener) {
      var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      images.forEach(function(image) {
        image.addEventListener("medium-zoom:" + type, listener, options2);
      });
      eventListeners.push({ type: "medium-zoom:" + type, listener, options: options2 });
      return zoom2;
    };
    var off = function off2(type, listener) {
      var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      images.forEach(function(image) {
        image.removeEventListener("medium-zoom:" + type, listener, options2);
      });
      eventListeners = eventListeners.filter(function(eventListener) {
        return !(eventListener.type === "medium-zoom:" + type && eventListener.listener.toString() === listener.toString());
      });
      return zoom2;
    };
    var open = function open2() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref2.target;
      var _animate = function _animate2() {
        var container = {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
        var viewportWidth = void 0;
        var viewportHeight = void 0;
        if (zoomOptions.container) {
          if (zoomOptions.container instanceof Object) {
            container = _extends({}, container, zoomOptions.container);
            viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
            viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
          } else {
            var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);
            var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
            container = _extends({}, container, {
              width: _width,
              height: _height,
              left: _left,
              top: _top
            });
          }
        }
        viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
        viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;
        var zoomTarget = active.zoomedHd || active.original;
        var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
        var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
        var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
        var scaleX = Math.min(Math.max(width, naturalWidth), viewportWidth) / width;
        var scaleY = Math.min(Math.max(height, naturalHeight), viewportHeight) / height;
        var scale = Math.min(scaleX, scaleY);
        var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
        var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
        var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
        active.zoomed.style.transform = transform;
        if (active.zoomedHd) {
          active.zoomedHd.style.transform = transform;
        }
      };
      return new Promise2(function(resolve) {
        if (target && images.indexOf(target) === -1) {
          resolve(zoom2);
          return;
        }
        var _handleOpenEnd = function _handleOpenEnd2() {
          isAnimating = false;
          active.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
          active.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
            detail: { zoom: zoom2 }
          }));
          resolve(zoom2);
        };
        if (active.zoomed) {
          resolve(zoom2);
          return;
        }
        if (target) {
          active.original = target;
        } else if (images.length > 0) {
          var _images = images;
          active.original = _images[0];
        } else {
          resolve(zoom2);
          return;
        }
        active.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
          detail: { zoom: zoom2 }
        }));
        scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        isAnimating = true;
        active.zoomed = cloneTarget(active.original);
        document.body.appendChild(overlay);
        if (zoomOptions.template) {
          var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
          active.template = document.createElement("div");
          active.template.appendChild(template.content.cloneNode(true));
          document.body.appendChild(active.template);
        }
        if (active.original.parentElement && active.original.parentElement.tagName === "PICTURE" && active.original.currentSrc) {
          active.zoomed.src = active.original.currentSrc;
        }
        document.body.appendChild(active.zoomed);
        window.requestAnimationFrame(function() {
          document.body.classList.add("medium-zoom--opened");
        });
        active.original.classList.add("medium-zoom-image--hidden");
        active.zoomed.classList.add("medium-zoom-image--opened");
        active.zoomed.addEventListener("click", close);
        active.zoomed.addEventListener("transitionend", _handleOpenEnd);
        if (active.original.getAttribute("data-zoom-src")) {
          active.zoomedHd = active.zoomed.cloneNode();
          active.zoomedHd.removeAttribute("srcset");
          active.zoomedHd.removeAttribute("sizes");
          active.zoomedHd.removeAttribute("loading");
          active.zoomedHd.src = active.zoomed.getAttribute("data-zoom-src");
          active.zoomedHd.onerror = function() {
            clearInterval(getZoomTargetSize);
            console.warn("Unable to reach the zoom image target " + active.zoomedHd.src);
            active.zoomedHd = null;
            _animate();
          };
          var getZoomTargetSize = setInterval(function() {
            if (active.zoomedHd.complete) {
              clearInterval(getZoomTargetSize);
              active.zoomedHd.classList.add("medium-zoom-image--opened");
              active.zoomedHd.addEventListener("click", close);
              document.body.appendChild(active.zoomedHd);
              _animate();
            }
          }, 10);
        } else if (active.original.hasAttribute("srcset")) {
          active.zoomedHd = active.zoomed.cloneNode();
          active.zoomedHd.removeAttribute("sizes");
          active.zoomedHd.removeAttribute("loading");
          var loadEventListener = active.zoomedHd.addEventListener("load", function() {
            active.zoomedHd.removeEventListener("load", loadEventListener);
            active.zoomedHd.classList.add("medium-zoom-image--opened");
            active.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          });
        } else {
          _animate();
        }
      });
    };
    var close = function close2() {
      return new Promise2(function(resolve) {
        if (isAnimating || !active.original) {
          resolve(zoom2);
          return;
        }
        var _handleCloseEnd = function _handleCloseEnd2() {
          active.original.classList.remove("medium-zoom-image--hidden");
          document.body.removeChild(active.zoomed);
          if (active.zoomedHd) {
            document.body.removeChild(active.zoomedHd);
          }
          document.body.removeChild(overlay);
          active.zoomed.classList.remove("medium-zoom-image--opened");
          if (active.template) {
            document.body.removeChild(active.template);
          }
          isAnimating = false;
          active.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
          active.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
            detail: { zoom: zoom2 }
          }));
          active.original = null;
          active.zoomed = null;
          active.zoomedHd = null;
          active.template = null;
          resolve(zoom2);
        };
        isAnimating = true;
        document.body.classList.remove("medium-zoom--opened");
        active.zoomed.style.transform = "";
        if (active.zoomedHd) {
          active.zoomedHd.style.transform = "";
        }
        if (active.template) {
          active.template.style.transition = "opacity 150ms";
          active.template.style.opacity = 0;
        }
        active.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
          detail: { zoom: zoom2 }
        }));
        active.zoomed.addEventListener("transitionend", _handleCloseEnd);
      });
    };
    var toggle = function toggle2() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref3.target;
      if (active.original) {
        return close();
      }
      return open({ target });
    };
    var getOptions = function getOptions2() {
      return zoomOptions;
    };
    var getImages = function getImages2() {
      return images;
    };
    var getZoomedImage = function getZoomedImage2() {
      return active.original;
    };
    var images = [];
    var eventListeners = [];
    var isAnimating = false;
    var scrollTop = 0;
    var zoomOptions = options;
    var active = {
      original: null,
      zoomed: null,
      zoomedHd: null,
      template: null
      // If the selector is omitted, it's replaced by the options
    };
    if (Object.prototype.toString.call(selector) === "[object Object]") {
      zoomOptions = selector;
    } else if (selector || typeof selector === "string") {
      attach(selector);
    }
    zoomOptions = _extends({
      margin: 0,
      background: "#fff",
      scrollOffset: 40,
      container: null,
      template: null
    }, zoomOptions);
    var overlay = createOverlay(zoomOptions.background);
    document.addEventListener("click", _handleClick);
    document.addEventListener("keyup", _handleKeyUp);
    document.addEventListener("scroll", _handleScroll);
    window.addEventListener("resize", close);
    var zoom2 = {
      open,
      close,
      toggle,
      update,
      clone,
      attach,
      detach,
      on,
      off,
      getOptions,
      getImages,
      getZoomedImage
    };
    return zoom2;
  };
  function styleInject(css2, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css2 || typeof document === "undefined") {
      return;
    }
    var head = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";
    if (insertAt === "top") {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css2;
    } else {
      style.appendChild(document.createTextNode(css2));
    }
  }
  var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
  styleInject(css);
  var medium_zoom_esm_default = mediumZoom;

  // src/app.js
  var engine = null;
  var imageQueue = [];
  var processedCount = 0;
  var zoom = null;
  var uploadArea = document.getElementById("uploadArea");
  var fileInput = document.getElementById("fileInput");
  var singlePreview = document.getElementById("singlePreview");
  var multiPreview = document.getElementById("multiPreview");
  var imageList = document.getElementById("imageList");
  var progressText = document.getElementById("progressText");
  var downloadAllBtn = document.getElementById("downloadAllBtn");
  var originalImage = document.getElementById("originalImage");
  var processedSection = document.getElementById("processedSection");
  var processedImage = document.getElementById("processedImage");
  var originalInfo = document.getElementById("originalInfo");
  var processedInfo = document.getElementById("processedInfo");
  var downloadBtn = document.getElementById("downloadBtn");
  var resetBtn = document.getElementById("resetBtn");
  var promoTargetUrl = "https://lazyso.com/labs/?from=watermark_widget";
  function triggerLazyPromo(targetUrl = promoTargetUrl) {
    if (typeof window.showLazyPromo !== "function") return;
    window.showLazyPromo(targetUrl);
  }
  async function init() {
    try {
      await i18n_default.init();
      setupLanguageSwitch();
      showLoading(i18n_default.t("status.loading"));
      engine = await WatermarkEngine.create();
      hideLoading();
      setupEventListeners();
      zoom = medium_zoom_esm_default("[data-zoomable]", {
        margin: 24,
        scrollOffset: 0,
        background: "rgba(15, 15, 17, .9)"
      });
    } catch (error) {
      hideLoading();
      console.error("initialize error:", error);
    }
  }
  function setupLanguageSwitch() {
    const btn = document.getElementById("langSwitch");
    if (!btn) return;
    btn.textContent = i18n_default.locale === "zh-CN" ? "EN" : "\u4E2D\u6587";
    btn.addEventListener("click", async () => {
      const newLocale = i18n_default.locale === "zh-CN" ? "en-US" : "zh-CN";
      await i18n_default.switchLocale(newLocale);
      btn.textContent = newLocale === "zh-CN" ? "EN" : "\u4E2D\u6587";
      updateDynamicTexts();
    });
  }
  function setupEventListeners() {
    uploadArea.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleFileSelect);
    uploadArea.addEventListener("dragover", (e2) => {
      e2.preventDefault();
      uploadArea.classList.add("dragover");
    });
    uploadArea.addEventListener("dragleave", () => {
      uploadArea.classList.remove("dragover");
    });
    uploadArea.addEventListener("drop", (e2) => {
      e2.preventDefault();
      uploadArea.classList.remove("dragover");
      handleFiles(Array.from(e2.dataTransfer.files));
    });
    downloadAllBtn.addEventListener("click", downloadAll);
    resetBtn.addEventListener("click", reset);
  }
  function reset() {
    singlePreview.style.display = "none";
    multiPreview.style.display = "none";
    imageQueue = [];
    processedCount = 0;
    fileInput.value = "";
  }
  function handleFileSelect(e2) {
    handleFiles(Array.from(e2.target.files));
    e2.target.value = "";
  }
  function handleFiles(files) {
    const validFiles = files.filter((file) => {
      if (!file.type.match("image/(jpeg|png|webp)")) return false;
      if (file.size > 20 * 1024 * 1024) return false;
      return true;
    });
    if (validFiles.length === 0) return;
    imageQueue.forEach((item) => {
      if (item.originalUrl) URL.revokeObjectURL(item.originalUrl);
      if (item.processedUrl) URL.revokeObjectURL(item.processedUrl);
    });
    imageQueue = validFiles.map((file, index) => ({
      id: Date.now() + index,
      file,
      name: file.name,
      status: "pending",
      originalImg: null,
      processedBlob: null,
      originalUrl: null,
      processedUrl: null
    }));
    processedCount = 0;
    if (validFiles.length === 1) {
      singlePreview.style.display = "block";
      multiPreview.style.display = "none";
      processSingle(imageQueue[0]);
    } else {
      singlePreview.style.display = "none";
      multiPreview.style.display = "block";
      imageList.innerHTML = "";
      updateProgress();
      multiPreview.scrollIntoView({ behavior: "smooth", block: "start" });
      imageQueue.forEach((item) => createImageCard(item));
      processQueue();
    }
  }
  async function processSingle(item) {
    try {
      const img = await loadImage(item.file);
      item.originalImg = img;
      const { is_google, is_original } = await checkOriginal(item.file);
      const status = getOriginalStatus({ is_google, is_original });
      setStatusMessage(status, is_google && is_original ? "success" : "warn");
      originalImage.src = img.src;
      const watermarkInfo = engine.getWatermarkInfo(img.width, img.height);
      originalInfo.innerHTML = `
            <p>${i18n_default.t("info.size")}: ${img.width}\xD7${img.height}</p>
            <p>${i18n_default.t("info.watermark")}: ${watermarkInfo.size}\xD7${watermarkInfo.size}</p>
            <p>${i18n_default.t("info.position")}: (${watermarkInfo.position.x},${watermarkInfo.position.y})</p>
        `;
      const result = await engine.removeWatermarkFromImage(img);
      const blob = await new Promise((resolve) => result.toBlob(resolve, "image/png"));
      item.processedBlob = blob;
      item.processedUrl = URL.createObjectURL(blob);
      processedImage.src = item.processedUrl;
      processedSection.style.display = "block";
      downloadBtn.style.display = "flex";
      downloadBtn.onclick = () => downloadImage(item);
      processedInfo.innerHTML = `
            <p>${i18n_default.t("info.size")}: ${img.width}\xD7${img.height}</p>
            <p>${i18n_default.t("info.status")}: ${i18n_default.t("info.removed")}</p>
        `;
      zoom.detach();
      zoom.attach("[data-zoomable]");
      processedSection.scrollIntoView({ behavior: "smooth", block: "start" });
      triggerLazyPromo();
    } catch (error) {
      console.error(error);
    }
  }
  function createImageCard(item) {
    const card = document.createElement("div");
    card.id = `card-${item.id}`;
    card.className = "bg-lazy-card md:h-[140px] rounded-xl shadow-card border border-white/5 overflow-hidden";
    card.innerHTML = `
        <div class="flex flex-wrap h-full">
            <div class="w-full md:w-auto h-full flex border-b md:border-b-0 md:border-r border-white/5">
                <div class="w-24 md:w-48 flex-shrink-0 bg-white/5 p-2 flex items-center justify-center">
                    <img id="result-${item.id}" class="max-w-full max-h-24 md:max-h-full rounded" data-zoomable />
                </div>
                <div class="flex-1 p-4 flex flex-col min-w-0">
                    <h4 class="font-semibold text-sm text-gray-200 mb-2 truncate">${item.name}</h4>
                    <div class="text-xs text-gray-400" id="status-${item.id}">${i18n_default.t("status.pending")}</div>
                </div>
            </div>
            <div class="w-full md:w-auto ml-auto flex-shrink-0 p-2 md:p-4 flex items-center justify-center">
                <button id="download-${item.id}" class="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg text-xs md:text-sm hidden">${i18n_default.t("btn.download")}</button>
            </div>
        </div>
    `;
    imageList.appendChild(card);
  }
  async function processQueue() {
    await Promise.all(imageQueue.map(async (item) => {
      const img = await loadImage(item.file);
      item.originalImg = img;
      item.originalUrl = img.src;
      document.getElementById(`result-${item.id}`).src = img.src;
      zoom.attach(`#result-${item.id}`);
    }));
    const concurrency = 3;
    for (let i2 = 0; i2 < imageQueue.length; i2 += concurrency) {
      await Promise.all(imageQueue.slice(i2, i2 + concurrency).map(async (item) => {
        if (item.status !== "pending") return;
        item.status = "processing";
        updateStatus(item.id, i18n_default.t("status.processing"));
        try {
          const result = await engine.removeWatermarkFromImage(item.originalImg);
          const blob = await new Promise((resolve) => result.toBlob(resolve, "image/png"));
          item.processedBlob = blob;
          item.processedUrl = URL.createObjectURL(blob);
          document.getElementById(`result-${item.id}`).src = item.processedUrl;
          item.status = "completed";
          const watermarkInfo = engine.getWatermarkInfo(item.originalImg.width, item.originalImg.height);
          updateStatus(item.id, `<p>${i18n_default.t("info.size")}: ${item.originalImg.width}\xD7${item.originalImg.height}</p>
            <p>${i18n_default.t("info.watermark")}: ${watermarkInfo.size}\xD7${watermarkInfo.size}</p>
            <p>${i18n_default.t("info.position")}: (${watermarkInfo.position.x},${watermarkInfo.position.y})</p>`, true);
          const downloadBtn2 = document.getElementById(`download-${item.id}`);
          downloadBtn2.classList.remove("hidden");
          downloadBtn2.onclick = () => downloadImage(item);
          processedCount++;
          updateProgress();
          checkOriginal(item.originalImg).then(({ is_google, is_original }) => {
            if (!is_google || !is_original) {
              const status = getOriginalStatus({ is_google, is_original });
              const statusEl = document.getElementById(`status-${item.id}`);
              if (statusEl) statusEl.innerHTML += `<p class="inline-block mt-1 text-xs md:text-sm text-warn">${status}</p>`;
            }
          }).catch(() => {
          });
        } catch (error) {
          item.status = "error";
          updateStatus(item.id, i18n_default.t("status.failed"));
          console.error(error);
        }
      }));
    }
    if (processedCount > 0) {
      downloadAllBtn.style.display = "flex";
      triggerLazyPromo();
    }
  }
  function updateStatus(id, text, isHtml = false) {
    const el = document.getElementById(`status-${id}`);
    if (el) el.innerHTML = isHtml ? text : text.replace(/\n/g, "<br>");
  }
  function updateProgress() {
    progressText.textContent = `${i18n_default.t("progress.text")}: ${processedCount}/${imageQueue.length}`;
  }
  function updateDynamicTexts() {
    if (progressText.textContent) {
      updateProgress();
    }
  }
  function downloadImage(item) {
    const a2 = document.createElement("a");
    a2.href = item.processedUrl;
    a2.download = `unwatermarked_${item.name.replace(/\.[^.]+$/, "")}.png`;
    a2.click();
    triggerLazyPromo();
  }
  async function downloadAll() {
    const completed = imageQueue.filter((item) => item.status === "completed");
    if (completed.length === 0) return;
    const zip = new import_jszip.default();
    completed.forEach((item) => {
      const filename = `unwatermarked_${item.name.replace(/\.[^.]+$/, "")}.png`;
      zip.file(filename, item.processedBlob);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const a2 = document.createElement("a");
    a2.href = URL.createObjectURL(blob);
    a2.download = `unwatermarked_${Date.now()}.zip`;
    a2.click();
    triggerLazyPromo();
  }
  init();
})();
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)

medium-zoom/dist/medium-zoom.esm.js:
  (*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom *)
*/
