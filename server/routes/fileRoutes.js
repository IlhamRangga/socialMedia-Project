import authorization from "../middleware/middleware";
import upload from "../utils/fileUpload/upload";

const fileRoutes = (app) => {
    app.post('/upload', authorization, upload.single('file'), (req,res) => { 
        console.log(req.body)
    })
}
export default fileRoutes