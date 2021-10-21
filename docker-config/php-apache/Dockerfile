FROM php:7.4-apache
RUN apt-get update && \
    docker-php-ext-install pdo pdo_mysql mysqli
COPY php.ini /usr/local/etc/php/
ADD apache2.conf /etc/apache2/
ADD 000-default.conf /etc/apache2/sites-available/