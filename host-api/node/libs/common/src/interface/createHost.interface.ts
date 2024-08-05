export interface CreateHostInterface {
    domains: Domain[]
    custom_headers: CustomHeader[]
    destination: string
    domain_name: string
    path: string
    has_custom_headers: boolean
    websocket_support: boolean
    force_https_redirect: boolean
    allow_caching: boolean
    block_exploits: boolean
    auto_ssl: boolean
    publicly_accessible: boolean
      // ip_whitelist: false,
            // allowed_ips: string[]
}

export interface Domain {
    source: string
}

export interface CustomHeader {
    name: string
    value: string
}