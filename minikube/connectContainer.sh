#!/bin/bash

RES=$(kubectl get pods -o go-template \
  --template='{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')

CONTAINER_NAME=$(echo "$RES" | grep "app-org0app0")

kubectl exec --stdin --tty $CONTAINER_NAME -- /bin/bash