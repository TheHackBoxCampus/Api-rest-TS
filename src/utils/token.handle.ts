import "dotenv/config";
import { Request } from "express";
import { sign, verify, JwtPayload } from "jsonwebtoken";

let secret = process.env.SECRETACCESSTOKEN
  ? process.env.SECRETACCESSTOKEN
  : "null";

const createToken = (payload: Object):Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    sign(
      payload,
      secret,
      { algorithm: "HS256", expiresIn: "10m" },
      (err, token) => (err ? reject(err) : resolve(token))
    );
  });
};

const getToken = ({ headers }: Request):string | undefined => {
  let { authorization } = headers;
  return authorization;
};

const verifyToken = (token: string):Promise<string | JwtPayload | undefined > => {
  return new Promise((resolve, reject) => {
    if (secret == "null") return reject("error");
    verify(token, secret, (err, decoded) =>
      err ? reject(err) : resolve(decoded)
    );
  });
};

export { createToken, verifyToken, getToken };
