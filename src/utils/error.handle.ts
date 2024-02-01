import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: Error | unknown) => { 
    let response = errorRaw && errorRaw instanceof Error ? errorRaw.message : ""   
    res.send( { error, type: response })
}

export { handleHttp }