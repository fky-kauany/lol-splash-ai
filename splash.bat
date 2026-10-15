@echo off
rem Roda o splash.py com o Python do proprio ComfyUI (ele ja tem tudo que o splash usa).
rem O ComfyUI fica ao lado desta pasta (ComfyUI_windows_portable), ou onde o COMFY_DIR disser.
setlocal
set "HERE=%~dp0"
if defined COMFY_DIR (
  set "PY=%COMFY_DIR%\python_embeded\python.exe"
) else (
  set "PY=%HERE%ComfyUI_windows_portable\python_embeded\python.exe"
)
if not exist "%PY%" (
  echo Nao achei o ComfyUI: coloque a pasta ComfyUI_windows_portable ao lado deste arquivo,
  echo ou diga onde ela esta: set COMFY_DIR=D:\caminho\ComfyUI_windows_portable
  exit /b 1
)
"%PY%" -s "%HERE%splash\splash.py" %*
