echo off
for %%X in (*.docx) do cscript.exe //nologo javaScript.js "%%X"
for %%X in (*.doc) do cscript.exe //nologo javaScript.js "%%X"