@echo off
set /p template="Please enter the repository folders name: "
Bash set_dir.sh %template%
node ./app.js %template%
pause