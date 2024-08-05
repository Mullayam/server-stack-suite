import { 
  Users,
  Settings,  
  LayoutGrid,
  Server,
  BarChartHorizontal,
  Webhook,
  BookText,
  Github,
  Package,
  Terminal,
  ServerCog
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};
 
type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
  
    {
      groupLabel: "Explore",
      menus: [
        // {
        //   href: "",
        //   label: "Services",
        //   active: pathname.includes("/services"),
        //   icon: SquarePen,
        //   submenus: [
        //     {
        //       href: "/services/mullayam06",
        //       label: "My Services",
        //       active: pathname === "/services/mullayam06"
        //     },
        //     {
        //       href: "/services/addons",
        //       label: "Addons Services",             
        //       active: pathname === "/services/addon"
        //     },          
        //   ]
        // },
        {
          href: "/server",
          label: "Server",
          active: pathname.includes("/server"),
          icon: Server,
          submenus: []
        },
        
        {
          href: "/logs",
          label: "Logs & Metrics",
          active: pathname.includes("/logs"),
          icon: BarChartHorizontal,
          submenus: []
        },
        {
          href: "/terminal",
          label: "Terminal",
          active: pathname.includes("/terminal"),
          icon: Terminal,
          submenus: []
        },
        {
          href: "/deployment",
          label: "Deployment",
          active: pathname.includes("/deployment"),
          icon: ServerCog,
          submenus: []
        },
      ]
    },
    {
      groupLabel: "System",
      menus: [        
        {
          href: "/account",
          label: "Settings",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: [
            {
              href: "/account/profile",
              label: "Profile",
              active: pathname.includes("/tags"), 
            },
            {
              href: "/account/billings",
              label: "Billings",
              active: pathname.includes("/tags"),            
              
            }
          ]
        }
      ]
    },
    {
      groupLabel: "Help",
      menus: [
        {
          href: "/users",
          label: "API",
          active: pathname.includes("/users"),
          icon: Webhook,
          submenus: []
        },
        {
          href: "/users",
          label: "Docs",
          active: pathname.includes("/users"),
          icon: BookText,
          submenus: []
        },
        {
          href: "/users",
          label: "Github",
          active: pathname.includes("/users"),
          icon: Github,
          submenus: []
        },
        {
          href: "/account",
          label: "Developer",
          active: pathname.includes("/account"),
          icon: Package,
          submenus: []
        }
      ]
    }
  ];
}
