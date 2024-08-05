import { FirstSetupConfiguration } from "@/types/FirstSetup.interface";
import { api as apiInstance } from "./instance";

class ApiCore {

    // First Setup 
    async createServerConfiguration(data:FirstSetupConfiguration) {        
        return apiInstance.post(`/first-setup`, data)
    }
    async getAllHosts(server:string) {
        return apiInstance.get(`/${server}/hosts`)
    }
    
    // Proxy Hosts
    async addNewHosts(server:string, data:any,hostType:"proxy" | "redirect" | "notFound") {
        return apiInstance.post(`/${server}/hosts/${hostType}`, data)
    }
    
 
}
export const handler = new ApiCore();
