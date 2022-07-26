#!/usr/bin/env sh
docker rm mysql
docker rmi mysql:mysql:8.0.29

docker volume rm mysql_container_config
docker volume rm mysql_container_data