# Startup Guide

## Setting up
- Change the server username and password inside the init.js
- Switch out podman for docker for the same results

## Building the image

Execute the following command inside the current directory
```sh
podman build \
username=<admin username> \
password=<admin password> \
-t <image tag> .
```

## Starting the container
```sh
podman run -d \
-p <your port>:27017 \
--name <container name> \
<image>
```

## Monitoring startup
```sh
podman logs <container name>
```

## Starting and Shutting down
```sh
podman [start/stop] <container name>
```

## Connecting using Mongo Shell (mongosh)
```sh
mongosh "mongodb://<username>:<password>@localhost:<port>/chat"
```
