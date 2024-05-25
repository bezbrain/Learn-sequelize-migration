import bcrypt from "bcryptjs";
import { Logger } from "../libs";

const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    return hashPass;
  } catch (error: any) {
    Logger.info(error.message);
    throw new Error("Server Error: Something went wrong!");
  }
};

export default hashPassword;
