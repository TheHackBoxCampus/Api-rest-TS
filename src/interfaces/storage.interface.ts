import { ObjectId } from "mongoose";

export interface storage { 
    fileName: string , 
    owner: ObjectId | string, 
    path: string , 
    size: number | undefined
}
