// import multer from 'multer'

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./public/images")
//     },
    
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname)
//     },

// })

// const upload = multer({
//      storage: storage,
//      limits: { fileSize: 5 * 1024 * 1024 },
    
//     })

// // const post = upload.single("image")

// export default upload