#!/bin/bash

kubectl run --rm -it borrar1 --image le999/app_todo:1.0 \
  --env "MONGO_URI=mongodb://root:example@mongodborg0:27017/mydb" \
  --image-pull-policy=Never --restart=Never -- bash