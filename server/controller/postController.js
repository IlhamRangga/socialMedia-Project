class PostController {
    constructor (svc) {
        this.svc = svc
    }

    posting = async (req,res) => {
        try {
            const refreshToken = req.cookies.refreshToken
            await this.svc.posting(refreshToken, req.body)
            res.send({
                "status": "success"
            })
        } catch (error) {
            res.send({ error: error.message})
        }
    }
}