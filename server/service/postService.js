import { verifyAccessToken } from "../utils/auth/auth"

class PostService {
    constructor(repo) {
        this.repo = repo
    }

    posting = async (refreshToken, userInput) => {
        const user = verifyAccessToken(refreshToken)
    }
}