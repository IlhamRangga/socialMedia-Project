import { Sequelize } from "sequelize"
import db from "../../utils/db/connection"

const { DataTypes } = Sequelize

const user = db.define("user",{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true
})

export default user

(async()=> {
    await db.sync()
})()