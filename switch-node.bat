@echo off
cls
echo ============================================
echo     Node Version Switcher
echo ============================================
echo [1] Switch to Node 12 (for Angular 8 apps)
echo [2] Switch to Node 20 (for Angular 18 apps)
echo ============================================
set /p choice="Select Node version (1 or 2): "

if "%choice%"=="1" (
    set "NEWNODE=D:\angular-micro\coexisting-angular-microfrontends\NodeVersions\node12"
) else if "%choice%"=="2" (
    set "NEWNODE=D:\angular-micro\coexisting-angular-microfrontends\NodeVersions\node20"
) else (
    echo ❌ Invalid choice. Exiting...
    pause
    exit /b
)

:: Prepend selected Node path to PATH
set "PATH=%NEWNODE%;%PATH%"

echo.
echo ✅ Node version switched to:
node -v
npm -v

echo.
echo This terminal now uses that Node version.
pause
cmd /K
