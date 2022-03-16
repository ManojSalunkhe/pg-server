import multer from "multer";


const fileStorage = multer.diskStorage({
    destination: 'src/images',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

export const upload = multer({ storage: fileStorage });