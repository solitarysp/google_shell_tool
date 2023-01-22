#!/bin/sh

if [[ ! -d "google_shell_tool" ]]
then
  echo "not ton tai"
  git clone https://github.com/solitarysp/google_shell_tool.git
fi

cd google_shell_tool/sub
sh start.sh