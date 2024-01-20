import multer, { diskStorage } from "multer";

const storage =multer.diskStorage({
    destination : (req , file , cb)=>{
        cb(null,"public/images")
    },
    filename : (req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname.replace(/\s+/g,"_")}`)

    }
})

const upload = multer({storage : storage}) ;

export default upload ;