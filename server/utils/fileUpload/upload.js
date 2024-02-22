import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images")
    },
    
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    },

})

const upload = multer({
     storage: storage,
     limits: { fileSize: 5 * 1024 * 1024 },
    
    })

// const post = (req , res, file) => {
//     upload.single(file)(req, res, (err) => {
//         if (err instanceof multer.MulterError) {
//             // Aksi jika terjadi error dari Multer
//             res.status(400).json({ message: 'Terjadi kesalahan saat mengunggah file.' });
//         } else if (err) {
//             // Aksi jika terjadi error selain dari Multer
//             res.status(500).json({ message: 'Terjadi kesalahan server.' });
//         } else {
//             // Lanjutkan logika jika tidak ada error
//         }
//     });
// } 

export default upload