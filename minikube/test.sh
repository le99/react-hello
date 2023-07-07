#!/bin/bash

kubectl run --rm -it borrar1 --image le999/org0app0:1.0 \
  --restart=Never \
  --env "PAGE_SIZE=10" \
  -- bash -c "node ./scripts/sawtooth.js tp1; bash"

