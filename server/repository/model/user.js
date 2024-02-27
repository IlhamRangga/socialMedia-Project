import { Sequelize } from "sequelize"
import db from "../../utils/db/connection.js"

const { DataTypes } = Sequelize

const User = db.define("user",{
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

// (async () => {
//     try {
//         await db.sync();
//         console.log("Tabel telah dibuat");
//     } catch (error) {
//         console.error("Gagal membuat tabel:", error);
//     }
// })();

// Export User separately
export default User;


