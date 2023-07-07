#!/bin/bash

echo "WARNING: build only for minkube"

eval $(minikube -p minikube docker-env)

if [ $? -ne 0 ]; then
  exit 0
fi

cd ..
  docker build -t le999/react_hello:1.0 .
cd -