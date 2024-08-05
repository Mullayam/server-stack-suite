import { z } from 'zod'

const envSchema = z.object({
    BASE_URL: z.string().url(),
    GQL_URL: z.string().url(),
    APP_ENV: z.string().url(),
    APP_URL: z.string().url(),
  })
 const config = {
    APP: {
        BASE_URL: process.env.NEXT_PUBLIC_API_URL,
        API_URL: process.env.NEXT_PUBLIC_API_URL+"/api/v1",
        APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
        APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    }
}    
 
 
export const __config = Object.freeze(config)