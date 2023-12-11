FROM --platform=linux/arm64 php:7.4

RUN apt-get update && apt-get install -y libpq-dev postgresql-client && docker-php-ext-install pdo pdo_pgsql
WORKDIR /app
COPY . /app
ENV PORT=8000
EXPOSE $PORT
CMD ["php", "-S", "0.0.0.0:8000", "-t", "/app"]
