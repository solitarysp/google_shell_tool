#!/bin/sh
echo "Run start.sh"
git pull -f

docker network prune -f

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

docker-compose build
docker-compose down

docker-compose up -d
echo "Start thanh cong"
