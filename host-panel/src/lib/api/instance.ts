import { __config } from '@/constants/config'
import axios from 'axios'

axios.defaults.baseURL = __config.APP.API_URL
axios.defaults.headers["common"] = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "X-App-Version": "1.0.0",
    "X-App-Name": "web"
}

export const api = axios.create({
    baseURL: __config.APP.API_URL
})
export function setAuthrization(token: string | null) {
    if (!token) {
        delete api.defaults.headers["common"]["Authorization"]
        return
    }
    api.defaults.headers["common"]["Authorization"] = `Bearer ${token}`
}