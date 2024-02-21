import authorization from "../middleware/middleware.js"
import upload from "../utils/fileUpload/upload.js"

const postRoutes = (app, postController) => {
    app.post("/posting", authorization, upload.single("image"), postController.posting)
}

export default postRoutes