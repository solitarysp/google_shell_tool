#!/bin/sh

if [[ ! -d "google_shell_tool" ]]
then
  echo "not ton tai"
  git clone https://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@github.com/solitarysp/google_shell_tool.git
fi

cd google_shell_tool/master
sh start.sh