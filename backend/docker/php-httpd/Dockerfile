FROM amazonlinux:2.0.20220121.0

RUN yum -y update 
# 開発で利用するパッケージをインストール。
# procps-ng ⇒ psが使える
# systemd-sysv ⇒ systemdが利用できる。一旦削除
RUN yum install -y \
    procps-ng
# httpdと何かしら利用するパッケージをインストール
RUN yum install -y \
    httpd \
    curl \
    unzip
# httpd.conf編集 mpmをeventに設定
COPY ./docker/php-httpd/httpd/00-mpm.conf /etc/httpd/conf.modules.d/
COPY ./docker/php-httpd/httpd/vhost.conf /etc/httpd/conf.d/

#PHPインストール 
# RUN amazon-linux-extras install -y php7.4

# PHP 8.1 install
RUN amazon-linux-extras install epel -y
RUN yum install -y http://rpms.remirepo.net/enterprise/remi-release-7.rpm
RUN yum install -y yum-utils

RUN yum-config-manager --disable 'remi-php*'
RUN yum-config-manager --enable remi-php81
RUN yum repolist

RUN yum install -y php81 php81-php
# 拡張モジュール
RUN yum install -y php81-php-mbstring php81-php-mysqlnd php81-php-gd php81-php-xml php81-php-fpm php81-php-pear php81-php-devel gcc make

# RUN yum install -y php81-php-mbstring php81-php-pdo php81-php-gd php81-php-mysqlnd php81-php-xml php81-php-sodium php-xml
RUN alternatives --install /usr/bin/php php /usr/bin/php81 1

# PHP Exstensionインストール laravel入れる場合php-xmlは必須。 そこに含む？ext-domを利用するらしい。。。 
# RUN yum -y install php-xml php-mbstring php-gd php-sodium

# xdebugインストール 開発用
# 8.1用でのインストール方法が不明なため保留
# RUN pecl install xdebug-3.1.3

COPY ./docker/php-httpd/php/php.ini /etc

#Composerインストール
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
# RUN php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer


# 以下はコンテナ起動後に手動実行する。
#RUN composer create-project laravel/laravel .
#RUN chown -R apache:apache .

#supervisorインストール 
RUN yum -y install pip
RUN pip install supervisor
COPY ./docker/php-httpd/supervisor/supervisord.conf /etc
COPY ./docker/php-httpd/supervisor/httpd.ini /etc/supervisor.d/
COPY ./docker/php-httpd/supervisor/php-fpm.ini /etc/supervisor.d/

# SSL対応
RUN yum install -y \
    mod_ssl
COPY ./docker/php-httpd/ssl/ssl.conf /etc/httpd/conf.d
COPY ./docker/php-httpd/ssl/ssl.crt /etc/pki/tls/certs/
COPY ./docker/php-httpd/ssl/ssl.key /etc/pki/tls/private


# ログ出力先を変更する場合に利用
#COPY ./docker/php-httpd/php-fpm/www.conf /etc/php-fpm.d/www.conf

# コンテナ起動時 実行コマンド
#ENTRYPOINT [ "tail", "-f" , "/dev/null" ]
ENTRYPOINT [ "supervisord" ]
CMD [ "-n","-c", "/etc/supervisord.conf" ] 
