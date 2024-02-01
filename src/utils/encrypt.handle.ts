import { compare, hash } from "bcryptjs";

const encrypt = async (string: string): Promise<string> => {
  let hashed = await hash(string, 10);
  return hashed;
};

const verified = async (string: string, hash: string): Promise<boolean> => {
  let isCorrect = await compare(string, hash);
  return isCorrect;
};

export { verified, encrypt };
