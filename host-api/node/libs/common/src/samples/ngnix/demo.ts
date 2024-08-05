export class NginxSample {

    static DeafultServer() { }
    static HTMLApplication() { }
    static DeployApi(server_name: string[], destination: string,path:string) {
        return `
            server {
                     listen 80;
                     listen [::]:80;
                     server_name ${server_name.join(' ')};
                     location ${path} {
                        # reverse proxy for next server
                        proxy_pass ${destination}; 
                        proxy_http_version 1.1;
                        proxy_set_header Upgrade $http_upgrade;
                        proxy_set_header Connection 'upgrade';
                        proxy_set_header Host $host;
                        proxy_cache_bypass $http_upgrade;
                }
            }
        `
    }

    static ReactHTMLApplication(server_name: string[], path) {
        return `
        server {
                listen 80;
                listen [::]:80;

                root /var/www/your_domain/html;
                index index.html index.htm index.nginx-debian.html;

                server_name ${server_name.join(' ')};

                location / {
                        try_files $uri $uri/ =404;
                }
        }
        `
    }
    static ReactServeApplication(server_name: string[], path) {
        return `
        server {
                listen 80;
                listen [::]:80;

                root /var/www/your_domain/html;
                index index.html index.htm index.nginx-debian.html;

                server_name ${server_name.join(' ')};

                location / {
                         
                }
        }
        `
    }
    static NextOutApplication() {
        return `
     server {
                listen 80 default_server;
                listen [::]:80;
                
                server_name www.DOMAINNAME.com DOMAINNAME.com;

                index index.html index.htm;
                root /home/ubuntu/PROJECT_FOLDER; #Make sure your using the full path

                # Serve any static assets with NGINX
                location /_next/static {
                    alias /home/ubuntu/PROJECT_FOLDER/.next/static;
                    add_header Cache-Control "public, max-age=3600, immutable";
                }

                location / {
                    try_files $uri.html $uri/index.html # only serve html files from this dir
                    @public
                    @nextjs;
                    add_header Cache-Control "public, max-age=3600";
                }

                location @public {
                    add_header Cache-Control "public, max-age=3600";
                }

                location @nextjs {
                    # reverse proxy for next server
                    proxy_pass http://localhost:8080; #Don't forget to update your port number
                    proxy_http_version 1.1;
                    proxy_set_header Upgrade $http_upgrade;
                    proxy_set_header Connection 'upgrade';
                    proxy_set_header Host $host;
                    proxy_cache_bypass $http_upgrade;
                }

               
        }
        `
    }
    static NextSSRApplication() { }
    static WithSocketSupport() { }
    static WithCustomHeaders(headers: Record<string, string>) {
        let headersString = ''
        for (const key in headers) {
            headersString += `proxy_set_header ${key} ${headers[key]} \n`
        }

        return headersString
    }
    static WithCacheSupport() { }
    static ErrorPages() { }
    static Redirection() { }
}