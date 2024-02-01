import { Router } from "express";
import { storageUploadCtrl } from "../controllers/storage.controller";

/* middleware */
import { validateTokenMiddleware } from "../middlewares/validate.middleware";
import uploadMiddleware from "../middlewares/upload.middleware";

const router = Router();

router.post("/",validateTokenMiddleware,uploadMiddleware.single("file"), storageUploadCtrl);

export { router };
