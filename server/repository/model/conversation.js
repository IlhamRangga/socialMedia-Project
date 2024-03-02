import {  DataTypes } from "sequelize";
import db from "../../utils/db/connection.js";

const Conversation = db.define("conversation",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    participantIds: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    messageIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        defaultValue: []
    }
})

await Conversation.sync()

export default Conversation