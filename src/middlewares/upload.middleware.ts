import { Request } from  "express"; 
import multer, { diskStorage } from "multer";

const PATH_DIR_STORAGE = `${process.cwd()}/src/storage`; 

const addFile = diskStorage({
    destination(req: Request, file: Express.Multer.File, cb: any) { 
        cb(null, PATH_DIR_STORAGE); 
    },
    filename(req: Request, file: Express.Multer.File, cb: any) {
        const extension = file.originalname.split(".").pop(); 
        const nameFile = `image-${Date.now()}.${extension}`; 
        cb(null, nameFile)
    }
})

const uploadMiddleware = multer({ storage: addFile }); 

export default uploadMiddleware; 