import mongoose from "mongoose";

const post = new mongoose.Schema({
    _id: {
        type: String
    },
    username: {
        type: String
    },
    image: {
        type: String
    },
    url: {
        type: String
    }
})

const PostModel = new mongoose.model("post", post)

export default PostModel