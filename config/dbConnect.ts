import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();


const DB_NAME = process.env.DB_NAME as string;
const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME as string;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = 3306;
const DB_DIALECT = "mysql"

const sequelizeConnection = new Sequelize(DB_NAME,DB_USERNAME, DB_PASSWORD,{
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT
})

export default sequelizeConnection;