import userModel from "../models/user.model";
import { user } from "../interfaces/user.interface";
import { encrypt, verified } from "../utils/encrypt.handle";
import { createToken } from "../utils/token.handle";

const login = async ({ email, password }: user) => {
  let found = await isExistUser(email);

  if (!found) return "DATA_INCORRECT";

  const hash = found.password;
  const isCorrect = await verified(password, hash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  let token = await createToken({ id: found._id});
  
  return { id: found._id, response: "USER_SUCCESSFUL_LOGGUED", token}
};

const isExistUser = async (email: string) => {
  let user = await userModel.findOne({ email });
  return user;
};

const register = async ({
  age,
  name,
  email,
  password,
  phone,
}: user): Promise<string> => {
  let found = await isExistUser(email);

  if (found) return "ALREADY_USER";

  let hashpwd = await encrypt(password);

  await userModel.create({
    name,
    email,
    age,
    password: hashpwd,
    phone,
  });

  return "USER_REGISTER_SUCCESFULL";
};

export { login, register };
