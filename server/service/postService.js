import { verifyAccessToken } from "../utils/auth/auth.js"
import { v4 as uuidv4 } from 'uuid';

class PostService {
    constructor(repo) {
        this.repo = repo
    }

    posting = async (accessToken, url, caption, file) => {
        console.log(file.size)
        const user = verifyAccessToken(accessToken)
        const image = file.filename
        const id = uuidv4()
        await this.repo.posting({id, uploader: user.username , image, url, caption})

        return
    }
}

export default PostService