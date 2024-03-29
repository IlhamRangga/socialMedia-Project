class AuthController {
    constructor(svc) {
        this.svc = svc
    }

    register = async (req,res) => {
        try {
            const data = await this.svc.register(req.body)
            res.cookie('refreshToken', data.refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                // secure: true
            })
            res.send({
                status: "success",
                username: data.username,
                token: data.accessToken,
                id: data.id
            })
        } catch (error) {
            res.status(error.statusCode).send({message: error.message})
        }
    }

    login = async (req,res) => {
        try {
            const data = await this.svc.login(req.body)
            res.cookie('refreshToken', data.refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                // secure: true
            })
            res.send({
                status: "success",
                username: data.username,
                token: data.accessToken,
                id: data.id
            })
        } catch (error) {
            res.status(error.statusCode).send({message: error.message})        
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
            res.status(error.statusCode).send({message: error.message})
        }
    }

    getUser = async (req,res) => {
        try {
            // const user = await this.svc.getUser(req.body.username)
            const user = await this.svc.getUser("ilham")
            res.send({
                status: "success",
                user
            })
        } catch (error) {
            res.status(error.statusCode).send({message: error.message})
        }
    }
}

export default AuthController
