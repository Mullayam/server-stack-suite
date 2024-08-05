import React from 'react'
import Tabsbar from './Tabsbar';
import Hosts from './content/Hosts';
import { Icons } from '@/components/icons';


const Tabs = () => {
    const AllTabs = [
        { name: "Hosts", icon: <Icons.Host/>, content: <Hosts />, url: "hosts" },
        { name: "Logs", icon:<Icons.Host/>, content: <Hosts />, url: "logs" },
        { name: "Load Balancers", icon: <Icons.Host/>, content: <Hosts />, url: "load-balancers" },
        { name: "Firewalls", icon: <Icons.Host/>, content: <Hosts />, url: "firewalls" },
        { name: "SSL Certificates", icon: <Icons.Host/>, content: <Hosts />, url: "ssl-certificates" },
        { name: "3rd Party Apps", icon: <Icons.Host/>, content: <Hosts />, url: "third-party-apps" },
        { name: "Files", icon: <Icons.Host/>, content: <Hosts />, url: "files" },
        { name: "Settings", icon: <Icons.Host/>, content: <Hosts />, url: "settings" },
        { name: "Misc", icon: <Icons.Host/>, content: <Hosts />, url: "miscellaneous" },
    ]

    return <Tabsbar tabs={AllTabs} />
}

export default Tabs
