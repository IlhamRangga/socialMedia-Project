class AuthController {
    constructor(svc) {
        this.svc = svc
    }

    register = async (req,res) => {
        try {
            const token = await this.svc.register(req.body)
            res.cookie('refreshToken', token.refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                // secure: true
            })
            res.send({
                status: "success",
                token: token.accessToken
            })
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    login = async (req,res) => {
        try {
            const token = await this.svc.login(req.body)
            res.cookie('refreshToken', token.refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: "none"
                // secure: true
            })
            res.send({
                status: "success",
                token: token.accessToken
            })
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    logout = async (req,res) => {
        try {
            const refreshToken = req.cookies.refreshToken
            await this.svc.logout(refreshToken)
            res.clearCookie("refreshToken")
            res.send({
                status: "success"
            })
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    getUser = async (req,res) => {
        try {
            const user = await this.svc.getUser(req.body.username)
            res.send({
                status: "success",
                user
            })
        } catch (error) {
            res.send({message: error.message})
        }
    }
}

export default AuthController
