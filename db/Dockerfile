FROM mysql:5.6

COPY ./structure.sql /docker-entrypoint-initdb.d/structure.sql

ENV MYSQL_ALLOW_EMPTY_PASSWORD yes
ENV MYSQL_DATABASE wheelmap_development