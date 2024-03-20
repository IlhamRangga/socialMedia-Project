import Conversation from "../model/conversation.js"
import { Op } from "sequelize"

class ConversationRepository {
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

    findByParticipantsId = async(id) => {
        return await Conversation.findAll({
            where: {
                participantIds: {
                    [Op.contains]: [id]
                }
            }
        })
    }

    findById = async (id) => {
        return await Conversation.findOne({
            where: {
                id
            }
        })
    }
}

export default ConversationRepository