import { Response, Request, NextFunction } from "express";
import { verifyToken, getToken } from "../utils/token.handle";
import { handleHttp } from "../utils/error.handle";

/* interface */
import { request } from "../interfaces/request.interface"

const validateTokenMiddleware = async (
  req: request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = getToken(req);

    if (!token) return res.send("ERROR_REQUEST_401");

    let decoded = await verifyToken(token) as { id: string };;
    req.user = decoded; 
    
    return next();
  } catch (err: unknown) {
    res.status(403);
    handleHttp(res, "ERROR_REQUEST_403", err);
  }
};

export { validateTokenMiddleware };
