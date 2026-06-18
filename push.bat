@echo off
cd /d c:\xampp\htdocs\firesmartwebsite-main
git config --global user.name "Ganerman"
git config --global user.email "user@example.com"
git remote set-url origin https://github.com/Ganerman/firesmartpasikaton.git
git push -u origin main --force 2>&1
pause
