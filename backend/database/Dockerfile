FROM docker.io/mongodb/mongodb-community-server:latest AS mongodb

ARG username=admin_username
ARG password=admin_password
ENV MONGODB_INITDB_ROOT_USERNAME=${username}
ENV MONGODB_INITDB_ROOT_PASSWORD=${password}

ARG server_user=ws_server
ARG server_password=server_password
ENV SERVER_USERNAME=${server_user}
ENV SERVER_PASSWORD=${server_password}

ARG version=1
ARG debug_build=true
ENV DB_VERSION=${version}
ENV DEBUG_BUILD=${debug_build}

ADD ./init.js /docker-entrypoint-initdb.d/init.js
COPY ./migrations/ /migrations/

EXPOSE 27017
