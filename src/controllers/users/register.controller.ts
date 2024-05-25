import { Request, Response } from "express";
import { UserService } from "../../service";

const register = async (req: Request, res: Response) => {
  return UserService.register(req.body, res);
};

export default register;
