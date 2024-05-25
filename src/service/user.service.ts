import { Response } from "express";
import { UserValidation } from "../schemas";
import { ApiResponse, Logger } from "../libs";
import { StatusCodes } from "http-status-codes";
import { UserTable } from "../models";

class UserService {
  async register(payload: any, res: Response) {
    const { username, email, password, confirmPassword } = payload;
    await UserValidation.regSchema(payload);
    const user = await UserTable.create(payload);
    console.log(user);

    Logger.info("Successful");
    return ApiResponse.Success(res, {}, "Successful", StatusCodes.CREATED);
  }
}

export default new UserService();
