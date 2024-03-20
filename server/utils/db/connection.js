import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize("socialMedia","postgres","12345", {
    host: "localhost",
    dialect: "postgres",
    logging: false
} )

export default db
