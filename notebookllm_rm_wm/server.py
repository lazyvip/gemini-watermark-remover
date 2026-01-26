import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = r"d:\github\gemini-watermark-remover\notebookllm_rm_wm\site"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Cross-Origin Isolation is required for SharedArrayBuffer (used by FFmpeg.wasm)
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

print(f"Serving at http://localhost:{PORT}")
print(f"Directory: {DIRECTORY}")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
