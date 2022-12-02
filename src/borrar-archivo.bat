@echo off
cls
echo Se eliminaran los archivos React que no utilizaremos (Debe ejecutarse desde la carpeta ../src)
echo Desea eliminar (s/n)?
echo.
set /p opcion=
if %opcion%==s goto borrar
if %opcion%==n goto salir

:borrar
del App.css
del App.test.js
del logo.svg
del reportWebVitals.js
del setupTests.js
echo LISTO, Archivos Eliminados!
echo.

pause
goto salir

:salir
exit