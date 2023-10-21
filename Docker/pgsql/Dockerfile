FROM postgres:latest

COPY init.sql /docker-entrypoint-initdb.d/

# Set the default environment variables
ENV POSTGRES_DB=arduino
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

# Expose the default PostgreSQL port
EXPOSE 5432
