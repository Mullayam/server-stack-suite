import 'dotenv/config'
const NODE_ENV = String(process.env.NODE_ENV) || "DEVELOPMENT"
const APP_PORT = process.env.APP_PORT
const APP_URL = process.env.APP_URL
const API_KEY = String(process.env.API_KEY)
const APP_SECRET = String(process.env.APP_SECRET)
const CURRENT_WORKING_DIR = String(process.env.CURRENT_WORKING_DIR)

const SALT = process.env.SALT
const JWT_SECRET_KEY = String(process.env.JWT_SECRET_KEY)
const JWT_SECRET_EXPIRATION = String(process.env.JWT_SECRET_EXPIRATION)
const COOKIE_SECRET = String(process.env.COOKIE_SECRET)
const SESSION_SECRET = String(process.env.SESSION_SECRET)
const ENCRYPTION_KEY = String(process.env.ENCRYPTION_KEY)


const DATABASE = {
  DBHOST: String(process.env.DBHOST),
  DBNAME: String(process.env.DBNAME),
  DBUSER: String(process.env.DBUSER),
  DBPASS: String(process.env.DBPASS),
  DBPORT: String(process.env.DBPORT),
  DIALECT: process.env.DIALECT,
}

const SMTP = {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_HOST_PORT: process.env.SMTP_HOST_PORT,
  SMTP_TYPE: process.env.SMTP_TYPE,
  SMTP_HOST_USER: process.env.SMTP_HOST_USER,
  SMTP_HOST_PASS: process.env.SMTP_HOST_PASS,
  SMTP_HOST_FROM: process.env.SMTP_HOST_FROM
}



const config = {
  NODE_ENV,
  DATABASE,
  ENCRYPTION_KEY,
  SMTP,
  APP: {
    CURRENT_WORKING_DIR,
    APP_PORT,
    APP_URL,
    API_KEY,
    SECRETS: {
      APP_SECRET,
      JWT_SECRET_KEY,
      JWT_SECRET_EXPIRATION,
      SALT,
      COOKIE_SECRET,
      SESSION_SECRET
    }
  },
}

export const CONFIG = Object.freeze(config)