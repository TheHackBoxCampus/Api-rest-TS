import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { request } from "../interfaces/request.interface";


/* services */
import { storageUpload } from "../services/storage.service"
import { storage } from "../interfaces/storage.interface";

const storageUploadCtrl = async ({ user, file }: request, res: Response) => {     
    try {
        let data: storage = {
            fileName: `${file?.filename}`,
            owner: user?.id,
            path: `${file?.path}`,
            size: file?.size
        }
        let responseStorage = await storageUpload(data)
        res.send(responseStorage);
      } catch (err: unknown) {
        res.status(500);
        handleHttp(res, "ERROR_UPLOAD_FILE", err);
    }
}

export { storageUploadCtrl }