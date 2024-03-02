import UserRepository from "../repository/impl/user-repo.js"
import ConversationRepository from "../repository/impl/conversation-repo.js"

class MessageService {
    constructor (repo) {
        this.message = repo
        this.user = new UserRepository
        this.conversation = new ConversationRepository
    }

    sendMessage = async (datas) => {
        if (!datas.message) {
            throw new Error("message must be filled")
        }

        const receiver = await this.user.findById(datas.receiverId)
        if (!receiver) {
            throw new Error("receiver not found")
        }

        const conversation = await this.conversation.findByParticipants(datas)
        if (!conversation) {
            this.conversation.createConversation(datas)
        }

        const messageId = await this.message.sendMessage(datas)

        const updatedMessageIds = conversation.dataValues.messageIds || []
        updatedMessageIds.push(messageId.dataValues.id)

        await this.conversation.updateByParticipants({messageId: updatedMessageIds, senderId: datas.senderId, receiverId: datas.receiverId})
    }
}

export default MessageService