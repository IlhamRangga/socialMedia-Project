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
            res.send({error: error.message})
        }
    }
}

export default MessageController