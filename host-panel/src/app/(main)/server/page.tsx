import { CardHoverEffect } from '@/components/magicui/card-hover-effect'
import React from 'react'

const page = () => {
    const items = [
        {
            title: "Nginx",
            description:
                "Suitable For  Node,Php Apps",
            href: "/server/nginx",
            imgUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACzklEQVR4nOWaTWjUUBDHn1b8xIOIiKI7L2tVLOrF3ZkohSKI1I+DCAtehB7Eg2BPgidZiiiKiDsTPygevHhaTyoIpSfBW0FQL4o3D7aKqCB+1Y+Vl2DRTZYmu5tssh14sLDv5c0vM//38iZRKiaznOImYLoPjON5x96msmK56/0rQPACCH3XQjXTQPAHCI32cv8qlVorDyzQTMdB8O1fx32N8b1mOt1X7luo0mSW2HtA6FlDx+saML2wHCx12u+ZPA/ruB8EO6OPoDxvGkKS1EeYPG+2ccz6iJrnzacVtVcfreZ5x/SRa2OeJ6uPcox5Hrc+rITyPDZ96HB346cJKwgdhgrt10JngOlVk3n+RgsNA9uDIDSiGb+GGdcSAAidqB+3ZnTHUmC8G/FuTteLFCp0JFYAM+m6y/aSoLG9PLhIMz6KADARqD/BL3ECfGw4WCm11imuBMaXISM5FnQNEJzqGIDrwBXaooU+ZBbAmGbca9bwzAIYs9g+lh2AsprfwBnJBIBmOmeWUt8f1VIPCN5LPQAIjYHQnaBIbL64azkIPkk9gPZ21rOB1726E+odSyWAZvqtGY8G9ck7xYJm+pxuAPF2a2DcHdTPPIi5kGkG0F4k3uUrtLFB35H0A4jr4HNzKPJ1rql5WvB26gG01/9h0CEEbg0sNpFQaQfwIoE3I25+U6kC8DSBpxpOmgkAoV8geCjLADVzULHExgwDkGmvN1wrrO8kwLQ5OvomZZoICWAi8Xj1pe3LAh2olnqA8VNsAC6E0NC/Y/KVwlYDFrXqZh7ylD+SQ2HGtwiA37TQeRDap9k+qZkmozg/05gmzV6QEzxgSjSa6cZsp7hZAdzCFuPTphxKrLBVPKi6trTYHcXd4PJ6Nfl0wXGzQKh2WVL6gFB5PhdfMXXHS7426wPanedJ6SPePJ+Lnxp0x8ce6n9zy+yMD0wzv+Oa6A9U7xxcuh36AgAAAABJRU5ErkJggg=="
        },
        {
            title: "Apache/Httpd",
            description:
                "Suitable For Node,Php Apps Apache2.0/Httpd2.0",
                href: "/server/apache",
                imgUrl:"/apache.png"
        },
        {
            title: "Caddy",
              description:
                "Suitable For Node,Php Apps Apache2.0/Httpd2.0",
                href: "/server/caddy",
                imgUrl:"/caddy.jpeg"
        },
    ];
    return <CardHoverEffect items={items} />
}

export default page
