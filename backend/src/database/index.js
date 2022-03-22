import { Sequelize, DataTypes } from 'sequelize'
import config from '../config'
import * as mysql2 from 'mysql2'

export const ORM = new Sequelize(
    config.DB_DATABASE, 
    config.DB_USER, 
    config.DB_PASSWORD, 
    {
        dialect: 'mysql',
        port: config.DB_PORT,
        host: config.DB_SERVER,
        logging: false,
        pool: {
            max: 5,
            min: 0
        },
        dialectModule: mysql2,
    }
)

export { DataTypes };
