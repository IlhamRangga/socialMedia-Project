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
            res.status(error.statusCode).send({message: error.message})
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
            res.status(error.statusCode).send({message: error.message})
        }
    }

    getConversation = async(req,res) => {
        try {
            const id = req.user.id
            const user = await this.svc.getConversation(id)
            // const user = await this.svc.getConversation("0feca021-b3f6-4615-9b36-55be311c8034")
            res.send({
                status: "success",
                user
            })
        } catch (error) {
            res.status(error.statusCode).send({message: error.message})
        }
    }
}

export default MessageController