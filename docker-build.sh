#!/bin/bash

docker build -t le999/react_hello:1.0 .

echo "docker run -it --rm le999/react_hello:1.0 /bin/bash"
echo "docker push le999/react_hello:1.0"

echo "kubectl delete configmap connection-json"
echo "kubectl create configmap connection-json --from-file=./server/config/test.txt"
