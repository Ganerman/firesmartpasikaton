#!/bin/bash
cd c:/xampp/htdocs/firesmartwebsite-main
export GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=/dev/null"
git remote set-url origin https://github.com/Ganerman/firesmartpasikaton.git
git push -u origin main
