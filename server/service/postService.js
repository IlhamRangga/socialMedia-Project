import { verifyAccessToken } from "../utils/auth/auth.js"

class PostService {
    constructor(repo) {
        this.repo = repo
    }

    posting = async (accessToken, userInput, url) => {
        const user = verifyAccessToken(accessToken)
        const image = userInput
        console.log(url)
        console.log(userInput)
        console.log(user.id)
        if(!image) {
            throw new Error("image not found")
        }
        await this.repo.posting({id: user.id, username: user.username}, image, url)

        return
    }
}

export default PostService