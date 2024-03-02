import Message from "../model/message.js";

class MessageRepository {
    sendMessage = async(datas) => {
        return await Message.create({
            senderId: datas.senderId,
            receiverId: datas.receiverId,
            message: datas.message
        }) 
    }
}

export default MessageRepository