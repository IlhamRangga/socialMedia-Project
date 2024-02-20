import authorization from "../middleware/middleware.js"
import upload from "../utils/fileUpload/upload.js"

const postRoutes = (app, PostController) => {
    app.post("/post", authorization, upload.single(""),)
}

export default postRoutes