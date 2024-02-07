import { verify } from "../utils/auth/auth.js"


const authorization = (req,res,next) => {
    const token = req.header("Authorization")
    if(!token) {
        return res.status(401).json({error: "token not found"})
    }

    try {
        const user = verify(token)

        if(!user) {
            return res.status(401).json({error: "token invalid"})
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}

export default authorization