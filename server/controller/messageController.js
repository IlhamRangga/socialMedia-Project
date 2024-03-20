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
            const id = req.params.id
            const message = await this.svc.getMessage(id)
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
            const conversation = await this.svc.getConversation(id)
            // console.log(data)
            res.send({
                status: "success",
                conversation
            })
        } catch (error) {
            res.status(error.statusCode).send({message: error.message})
        }
    }
}

export default MessageController