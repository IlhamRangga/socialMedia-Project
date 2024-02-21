class PostController {
    constructor (svc) {
        this.svc = svc
    }

    posting = async (req,res) => {
        try {
            const token = req.header("Authorization")
            const accessToken = token.split(" ")[1]
            const userInput = req.file
            const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
            console.log(req.file)
            await this.svc.posting(accessToken, userInput, url)
            res.send({
                "status": "success"
            })
        } catch (error) {
            res.send({ error: error.message})
        }
    }
}

export default PostController