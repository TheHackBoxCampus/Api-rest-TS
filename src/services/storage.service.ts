import storageModel from "../models/storage.model";
import { storage } from "../interfaces/storage.interface";

const storageUpload = async ({ fileName, owner, path, size }:storage) => { 
    const responseStorage = await storageModel.create({ fileName, owner, path, size });
    return responseStorage
}

export { storageUpload }