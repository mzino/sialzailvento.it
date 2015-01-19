# Si Alza il Vento Project

## How to setup Apache server


> Domain `A` record must point to server static IP.
>
> Domain `CNAME` record `m` must point to `@`.


#### Install Apache2 and PHP
`sudo apt-get install apache2 php5 libapache2-mod-php5 php5-mcrypt`


#### Configure Apache to prioritize .php over .html
`sudo nano /etc/apache2/mods-enabled/dir.conf`

	<IfModule mod_dir.c>
    	DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
	</IfModule>


> Desktop website "index" is located in `/var/www/html/example/www`
>
> Mobile website "index" is located in `/var/www/html/example/m`


#### Enable .htaccess override
`sudo nano /etc/apache2/apache2.conf`

	<Directory /var/www/>
		Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
	</Directory>


#### Enable mod_rewrite
`sudo a2enmod rewrite`

`sudo service apache2 restart`


#### Setup VirtualHost for desktop site
`sudo nano /etc/apache2/sites-available/example.com.conf`

	<VirtualHost *:80>
		ServerName example.com
		ServerAlias www.example.com
		ServerAdmin	admin@example.com
		DocumentRoot /var/www/html/example/www
		ErrorLog ${APACHE_LOG_DIR}/error.log
		CustomLog ${APACHE_LOG_DIR}/access.log combined
	</VirtualHost>


#### Setup VirtualHost for mobile site
`sudo nano /etc/apache2/sites-available/m.example.com.conf`

	<VirtualHost *:80>
		ServerName m.example.com
		ServerAlias www.m.example.com
		ServerAdmin	admin@example.com
		DocumentRoot /var/www/html/example/m
		ErrorLog ${APACHE_LOG_DIR}/error.log
		CustomLog ${APACHE_LOG_DIR}/access.log combined
	</VirtualHost>


#### Activate VirtualHosts
`sudo a2ensite example.com.conf`

`sudo a2ensite m.example.com.conf`

`sudo service apache2 restart`

This command copies the .conf files from sites-available to sites-enabled. The reverse comand is `a2dissite`.


#### Edit global .htaccess
`sudo nano /var/www/html/.htaccess`


#### Edit desktop .htaccess
`sudo nano /var/www/html/example/www/.htaccess`


#### Edit mobile .htaccess
`sudo nano /var/www/html/example/m/.htaccess`


#### Create soft links to assets if needed
`sudo ln -s /source /destination`
