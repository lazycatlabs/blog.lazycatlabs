#!/bin/bash

# Build Docker image
docker build -t blog.lazycatlabs .

# Bring up the Docker containers using docker-compose
docker-compose -f docker-compose.yml up -d
