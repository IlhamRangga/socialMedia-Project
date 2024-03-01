import {  DataTypes } from "sequelize";
import db from "../../utils/db/connection.js"

const User = db.define("user",{
    id: {
        type: DataTypes.UUID,
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
        allowNull: true
    }
},{
    freezeTableName:true
})

await User.sync();

export default User;


