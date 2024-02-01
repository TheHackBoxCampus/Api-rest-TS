import { Request, Response } from "express";
import { login, register } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";

const registerUser = async ({ body }: Request, res: Response) => {
  try {
    let responseAuth = await register(body);
    res.send(responseAuth);
  } catch (err: unknown) {
    res.status(500);
    handleHttp(res, "REGISTER_FAILURE", err);
  }
};

const loginUser = async ({ body }: Request, res: Response) => {
  try {
    let responseAuth = await login(body);
    res.send(responseAuth);
  } catch (err: unknown) {
    res.status(500);
    handleHttp(res, "LOGIN_FAILURE", err);
  }
};

export { registerUser, loginUser };
