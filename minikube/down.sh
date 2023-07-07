#!/bin/bash

kubectl -k . delete
cd ./loadbalancer
./down.sh
cd -

./scripts/force-shutdown.sh  app-org0app0