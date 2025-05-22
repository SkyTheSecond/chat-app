FROM docker.io/mongodb/mongodb-community-server:latest AS mongodb

ARG username=admin_username
ARG password=admin_password

ENV MONGODB_INITDB_ROOT_USERNAME=${username}
ENV MONGODB_INITDB_ROOT_PASSWORD=${password}

ADD ./init.js /docker-entrypoint-initdb.d/init.js

EXPOSE 27017
