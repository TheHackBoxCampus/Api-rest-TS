import { Router } from "express";
import { readdirSync } from "fs";

const PATH = `${__dirname}`;
const router = Router();

const cleanFileName = (filename: string) => {
  const file = filename.split(".").shift();
  return file;
};

readdirSync(PATH).filter((filename) => {
  const cleanName = cleanFileName(filename);

  if (cleanName !== "index") {
    import(`./${cleanName}.route`).then((module) => {
      router.use(`/${cleanName}`, module.router);
    });
  }
});

export { router };
