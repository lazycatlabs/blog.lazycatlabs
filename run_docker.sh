#!/bin/bash

# Enable this only on the local machine not in the VPS
docker build  --no-cache -t lazycatlabs/blog . --platform linux/amd64

# Bring up the Docker containers using docker-compose
docker compose -f docker-compose.yml up -d
