class Controller {
    constructor(svc) {
        this.svc = svc
    }

    register = async (req,res) => {
        try {
            await this.svc.register(req.body)
            res.send({
                status: "success"
            })
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    login = async (req,res) => {
        try {
            const token = await this.svc.login(req.body)
            res.send({
                status: "success",
                token,
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

    updateUser = async (req,res) => {
        try {
            const token = await this.svc.updateUser(req.params.id, req.body)
            res.send({
                status: "success",
                token
            })
        }catch (error) {
            res.send({message: error.message})
        }
    }

    deleteUser = async (req, res) => {
        try {
            await this.svc.deleteUser(req.params.id)
            res.send({
                status: "success"
            })
        } catch (error) {
            res.send({message: error.message})
        }  
    }
}

export default Controller
