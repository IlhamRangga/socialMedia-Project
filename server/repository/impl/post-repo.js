import PostModel from "../model/post.js";

class PostRepository {
    posting = (req) => {
        const post = new PostModel({
            _id: req.id,
            username: req.username,
            image: req.image,
            url: req.url,
        })
        return post.save()
    }
}

export default PostRepository