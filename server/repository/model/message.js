import { Sequelize } from "sequelize";
import db from "../../utils/db/connection";

const { DataTypes } = Sequelize;

const message = db.define("message", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    senderId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    receiverId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    message: {
        type: DataTypes.String,
  },
});

export default message;
