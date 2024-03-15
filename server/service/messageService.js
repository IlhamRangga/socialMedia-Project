import UserRepository from "../repository/impl/user-repo.js"
import ConversationRepository from "../repository/impl/conversation-repo.js"
import BaseError from "../utils/error/baseError.js"

class MessageService {
    constructor (repo) {
        this.message = repo
        this.user = new UserRepository
        this.conversation = new ConversationRepository
    }

    sendMessage = async (datas) => {
        console.log(datas)
        if (!datas.message) {
            throw new BaseError(400,"message must be filled")
        }

        const receiver = await this.user.findOneById(datas.receiverId)
        console.log(datas.receiverId)
        if (!receiver) {
            throw new BaseError(404,"receiver not found")
        }

        const message = await this.message.sendMessage(datas)

        const conversation = await this.conversation.findOrCreateConversation({senderId: datas.senderId, receiverId: datas.receiverId, messageId: [message.dataValues.id]})
        
        if(!conversation[1]) {
                const updatedMessageIds = conversation[0].dataValues.messageIds || []

                updatedMessageIds.push(message.dataValues.id)

                await this.conversation.updateByParticipants({messageId: updatedMessageIds, senderId: datas.senderId, receiverId: datas.receiverId})
        }

    }

    getMessage = async(datas) => {
        const receiver = this.user.findOneById(datas.receiverId)
        if (!receiver) {
            throw new BaseError(404,"receiver not found")
        }

        const conversation = await this.conversation.findByParticipants(datas)

        if(!conversation) {
            throw new BaseError(404,"conversation not found")
        }

        const message = await this.message.findById(conversation.dataValues.messageIds)

        return message
    }

    getUserWeChat = async(id) => {
        const senderId = id
        
        const conversation = await this.conversation.findBySenderId(senderId)

        if(!conversation) {
            throw new BaseError(404,"user not found")
        }

        const receiverId = conversation.map(user => user.participantIds[1])

        const receiverDatas = await this.user.findAllById(receiverId)

        return receiverDatas
    }
}

export default MessageService