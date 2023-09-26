#!/bin/bash

# docker build -t le999/app:1.0 .
docker build -t le999/app:1.0 -f Angular.Dockerfile .

echo "docker run -it --rm le999/app:1.0 bash"
