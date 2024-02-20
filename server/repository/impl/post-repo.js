import PostModel from "../model/post";

class PostRepository {
    add = (req) => {
        const post = new PostModel({
            _id: req.id,
            username: req.decoded.username,
            image: req.userInput.image,
            url: req.userInput.url,
        })
        return post.save()
    }
}

export default PostRepository