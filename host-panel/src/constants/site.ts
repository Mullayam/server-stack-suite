import { __config } from "./config"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Server Stack Suite",
    apiUrl: __config.APP.APP_URL,
    description:
        "Server Stack Suite is a suite of tools that make it easy to build and deploy server apps with ease.",
}