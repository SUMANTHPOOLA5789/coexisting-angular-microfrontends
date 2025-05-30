@echo off
set "PATH=D:\angular-micro\coexisting-angular-microfrontends\NodeVersions\node20;%PATH%"
cd /d D:\angular-micro\coexisting-angular-microfrontends\shared-lib
echo Installing dependencies...
call npm install
echo Building shared-lib...
call npm run build
echo Starting HTTP server on port 9000...
call npm run start
pause
