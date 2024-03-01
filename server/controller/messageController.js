class MessageController {
    constructor (svc) {
        this.svc = svc
    }

    sendMessage = (req,res) => {
        try {
            const message = req.body.message
            const receiverId = req.params.id
            console.log(message)
            console.log(receiverId)
            res.send({
                status: "success"
            })
        } catch (error) {
            
        }
    }
}

export default MessageController