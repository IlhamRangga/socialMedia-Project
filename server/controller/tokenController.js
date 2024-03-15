class TokenController {
    constructor(svc) {
        this.svc = svc
    }
    
    refreshToken = async (req,res) => {
        try {  
            const refreshToken = req.cookies.refreshToken
            const accessToken = await this.svc.refreshToken(refreshToken)
            res.send({
                status: "success",
                accessToken,
            })
        } catch (error) {
            // console.log(error.statusCode)
            res.status(error.statusCode).json({message: error.message})
        }
    }
}

export default TokenController