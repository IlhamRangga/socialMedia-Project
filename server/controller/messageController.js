class MessageController {
    constructor (svc) {
        this.svc = svc
    }

    sendMessage = async(req,res) => {
        try {
            const message = req.body.message
            const receiverId = req.params.id
            const senderId = req.user.id
            await this.svc.sendMessage({receiverId, senderId, message})
            res.send({
                status: "success",
                receiverId
            })
        } catch (error) {
            res.send({error: error.message,})
        }
    }

    getMessage = async(req,res) => {
        try {
            const receiverId = req.params.id
            const senderId = req.user.id
            const message = await this.svc.getMessage({receiverId, senderId})
            res.send({
                status: "success",
                message
            })
        } catch (error) {
            res.send({error: error.message,})
        }
    }

    getUserWeChat = async(req,res) => {
        try {
            const id = req.user.id
            const user = await this.svc.getUserWeChat(id)
            res.send({
                status: "success",
                user
            })
        } catch (error) {
            res.send({error: error.message,})
        }
    }
}

export default MessageController