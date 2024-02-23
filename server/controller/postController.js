// import multer from "multer";
// import upload from "../utils/fileUpload/upload.js";
// const post = upload.single("image");

class PostController {
    constructor (svc) {
        this.svc = svc
        // this.post = post
    }



    posting = async (req,res) => {
        try {
            // console.log(req.body)
            // this.post(req, res, (err) => {
            //     if (err instanceof multer.MulterError) {
            //       res.send(err);
            //     }
            //   });
            const token = req.header("Authorization")
            const accessToken = token.split(" ")[1]
            const file = req.file
            const caption = req.body.caption
            if(!file) {
                throw new Error("file not found")
            }
            const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
            await this.svc.posting(accessToken, url, caption, file)
            res.send({
                "status": "success"
            })
        } catch (error) {
            res.send({ error: error.message})
        }
    }
}

export default PostController