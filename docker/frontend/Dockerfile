FROM nginx:1.21.3-alpine
COPY ./docker/frontend/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/html

COPY . .
