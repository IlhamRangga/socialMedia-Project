import {  DataTypes } from "sequelize";
import db from "../../utils/db/connection";



const Conversation = db.define("conversation",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    participantsIds: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false
    },
    messagesIds: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: true
    }
})

await Conversation.sync()

export default Conversation