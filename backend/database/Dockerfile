FROM docker.io/mongodb/mongodb-community-server:latest AS mongodb

ARG username=admin_username
ARG password=admin_password
ARG version=1
ARG debug_build=true

ENV MONGODB_INITDB_ROOT_USERNAME=${username}
ENV MONGODB_INITDB_ROOT_PASSWORD=${password}
ENV DB_VERSION=${version}
ENV DEBUG_BUILD=${debug_build}

ADD ./init.js /docker-entrypoint-initdb.d/init.js
COPY ./migrations/ /migrations/

RUN echo "Listing /migrations:" && ls -al /migrations

EXPOSE 27017
