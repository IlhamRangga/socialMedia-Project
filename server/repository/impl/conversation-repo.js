import Conversation from "../model/conversation.js"
import { Op } from "sequelize"

class ConversationRepository {
    findByParticipants = async(datas) => {
        return await Conversation.findOne({
            where: {
                participantIds: [datas.senderId, datas.receiverId]
            }
        })
    }

    updateByParticipants = async(datas) => {
        return await Conversation.update({messageIds : datas.messageId}, {
            where: {
                participantIds: [datas.senderId, datas.receiverId]
            }
        })
    }

    findOrCreateConversation = async(datas) => {
        return await Conversation.findOrCreate({
            where: { participantIds: [datas.senderId, datas.receiverId]},
            defaults: {
                messageIds: [datas.messageId],
                participantIds: [datas.senderId, datas.receiverId]
            }
        })
    }

    findBySenderId = async(senderId) => {
        return await Conversation.findAll({
            where: {
                participantIds: {
                    [Op.contains]: [senderId]
                }
            }
        })
    }
}

export default ConversationRepository