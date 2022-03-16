import { config } from 'dotenv'

config()

export default {
    PORT: process.env.PORT || 4000,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_SERVER: process.env.DB_SERVER,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_PORT: process.env.DB_PORT
}
