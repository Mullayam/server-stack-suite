export const SERVER_TYPE_FILE_PATH = {
    NGINX: {
        DEFAULT: "/etc/nginx",
        DEAFULT_CONFIGURATION_FILE: "/etc/nginx/nginx.conf",
        SITES_AVAILABLE_LOCATION_FILE: "/etc/nginx/sites-available/:file_name",
        SITES_ENABLED_LOCATION_FILE: "/etc/nginx/sites-enabled:file_name",

    },
    HTTPD: {
        DEFAULT: "/etc/httpd",
        DEAFULT_CONFIGURATION_FILE: "/etc/httpd/httpd.conf",
    },
    APACHE: {
        DEFAULT: "/etc/apache2",
        DEAFULT_CONFIGURATION_FILE: "/etc/apache2/apache2.conf",

    },
    CADDY: {
        DEFAULT: "/etc/caddy",
        DEAFULT_CONFIGURATION_FILE: "/etc/caddy/Caddyfile",
    }
}

export const PATHS = {
    ROOT: "/",
    SSH: {
        DEFAULT: "/root/.ssh"

    },
    SSL_CERTIFICATES: {
        DEFAULT: "/etc/ssl/certs",
        LETS_ENCRYPT: "/etc/letsencrypt/live {domain}"
    },
    ...SERVER_TYPE_FILE_PATH
}
export const COMMANDS = {
    BASIX: {
        UPDATE_PACKAGES: ["apt update", "apt upgrade -y"],
        CEHCK_PACKAGES_REQUIREMENTS: ["nginx -v", "apache2 -v", "httpd -v", "caddy -v", "certbot --version", "pm2 -v"],
        SETUP: {
            NGINX: "sudo apt install nginx -y",
            HTTPD: "sudo apt install apache2 -y",
            CADDY: "sudo apt install caddy -y",
            PM2: "sudo npm install pm2 -g",
            GIT: "sudo apt install git -y",
            CERTBOT: "sudo apt install certbot python3-certbot-nginx",
            SSH: "sudo apt install openssh-server -y",
            NODE: "sudo apt install nodejs -y",
        }
    },
    NGINX: {
        TEST_CONF_FILE: "sudo nginx -t",
        RELOAD_CONF: "sudo systemctl reload nginx",
        RESTART_SERVER: "sudo systemctl restart nginx",
        START_SERVER: "sudo systemctl start nginx",
        STOP_SERVER: "sudo systemctl stop nginx",
        STATUS: "sudo systemctl status nginx",

    },
    HTTPD: {
        TEST_CONF_FILE: "sudo httpd -t",
        STOP_SERVER: "sudo service httpd stop",
        START_SERVER: "sudo service httpd start",
        RESTART_SERVER: "sudo service httpd restart",
        STATUS: "sudo service apache2  restart",

    },
    APACHE: {
        TEST_CONF_FILE: "sudo sudo httpd -t",
        STOP_SERVER: "sudo service apache2  stop",
        START_SERVER: "sudo service apache2  start",
        RESTART_SERVER: "sudoservice apache2  restart",
        STATUS: "sudo service apache2  status",
    },
    CADDY: {
        TEST_CONF_FILE: "sudo caddy -t",
        RELOAD_CONF: "sudo systemctl reload caddy",
        RESTAT_SERVER: "sudo systemctl restart caddy",
    },
    PM2: {
        RESTART: "pm2 restart {id}",
        START: "pm2 start {id}",
        STOP: "pm2 stop {id}",
        DELETE: "pm2 delete {id}",
        LOGS: "pm2 logs",
    },
    SSL: {
        GENERATE: "sudo certbot --{server} -d {domain} ",
        RENEW: "sudo certbot --{server} -d {domain} ",
        REMOVE: "sudo certbot delete --cert-name {domain}",
    },

    GIT: {
        ALL_KEYS: "ls -al ~/.ssh",
        CONFIG: "~/.ssh/config",
        ADD: "ssh-add ~/.ssh/{key_name}",
        ADsD: `Host github.com
    Hostname ssh.github.com
    Port 443
    User git`,
        TEST_CONNECTION: "ssh -T git@github.com",
        ADD_KEY: "ssh-add -l -E sha256",
        SSH: {
            KEY: `ssh-keygen -t rsa -b 4096 -C "{email}" -f ~/.ssh/{key_name} -N ""`,
        },
        CLONE: "git clone {url}"
    }
}