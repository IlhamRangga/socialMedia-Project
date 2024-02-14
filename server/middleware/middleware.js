import { verifyAccessToken } from "../utils/auth/auth.js"

const authorization = (req, res, next) => {
    const token = req.header("Authorization")
    if (!token) {
        return res.status(401).json({ error: "Token not found" })
    }

    if (!token.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Invalid token format" })
    }

    const accessToken = token.split(" ")[1]

    try {
        const user = verifyAccessToken(accessToken)

        if (!user) {
            return res.status(401).json({ error: "Invalid token" })
        }

        next()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default authorization