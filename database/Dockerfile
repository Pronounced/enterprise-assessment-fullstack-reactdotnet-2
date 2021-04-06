FROM mysql:8

ENV MYSQL_ROOT_PASSWORD 'test'
ENV MYSQL_DATABASE 'blogmodo'

COPY init.sql /docker-entrypoint-initdb.d/a.sql
COPY seed.sql /docker-entrypoint-initdb.d/b.sql

# CMD ["mysql"]
