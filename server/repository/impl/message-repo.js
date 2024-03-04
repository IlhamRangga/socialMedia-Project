import Message from "../model/message.js";
import { Op  } from "sequelize";

class MessageRepository {
    sendMessage = async(datas) => {
        return await Message.create({
            senderId: datas.senderId,
            receiverId: datas.receiverId,
            message: datas.message
        }) 
    }
    deleteMessage = async(id) => {
        return await Message.destroy({
            where: {
                id
            }
        })
    }
    findById = async(id) => {
        return await Message.findAll({
            where : {
                id: {
                    [Op.in]: id
                }
            }
        })
    }
}

export default MessageRepository