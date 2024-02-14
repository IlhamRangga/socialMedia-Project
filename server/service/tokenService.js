import { generateAccessToken, verifyRefreshToken } from "../utils/auth/auth.js";

class TokenService {
    constructor(repo) {
        this.repo = repo
    }

    refreshToken = async (token) => {
        const refreshToken = token
        if(!refreshToken) {
            throw new Error("refreshToken not found")
        }
        const user = await this.repo.findByRefreshToken(refreshToken)
        if(!user) {
            throw new Error("refreshToken invalid")
        }
        const verified = verifyRefreshToken(user.refresh_token)
        if(!verified) {
            throw new Error("token is not synchronized")
        }

        const accessToken = await generateAccessToken({id: user.id})

        return accessToken
    }
}

export default TokenService