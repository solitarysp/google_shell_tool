#!/bin/sh
# update bashrc
echo "Update bashrc Start"
curl -s  https://raw.githubusercontent.com/solitarysp/google_shell_tool/main/.bashrc --output .bashrc
echo "Update bashrc Done"

if [[ ! -d "google_shell_tool" ]]
then
  echo "not ton tai"
  git clone https://github.com/solitarysp/google_shell_tool.git
fi

cd google_shell_tool/sub
sh start.sh