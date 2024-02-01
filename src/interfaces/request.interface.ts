import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface request extends Request { 
    user?: JwtPayload | { id: string }
}

