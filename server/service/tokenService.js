import { generateAccessToken, verifyRefreshToken } from "../utils/auth/auth.js";
import BaseError from "../utils/error/baseError.js";

class TokenService {
    constructor(repo) {
        this.repo = repo
    }

    refreshToken = async (token) => {
        const refreshToken = token
        if(!refreshToken) {
            throw new BaseError(404,"refreshToken not found")
        }
        const user = await this.repo.findByRefreshToken(refreshToken)
        if(!user) {
            throw new BaseError(401,"refreshToken invalid")
        }
        const verified = verifyRefreshToken(user.refresh_token)
        if(!verified) {
            throw new BaseError(401,"token is not synchronized")
        }

        const accessToken = await generateAccessToken({id: user.id, username: user.username})

        return accessToken
    }
}

export default TokenService