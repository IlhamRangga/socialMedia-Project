import Conversation from "../model/conversation.js"

class ConversationRepository {
    findByParticipants = async(datas) => {
        return await Conversation.findOne({
            where: {
                participantIds: [datas.senderId, datas.receiverId]
            }
        })
    }

    updateByParticipants = async(datas) => {
        return await Conversation.update({messageIds : [datas.messageId]}, {
            where: {
                participantIds: [datas.senderId, datas.receiverId]
            }
        })
    }

    createConversation = async(datas) => {
        return await Conversation.create({
            participantIds: [datas.senderId, datas.receiverId],
        })
    }
}

export default ConversationRepository