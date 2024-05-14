import { Request, Response } from "express";

const NotFoundMiddleware = (req: Request, res: Response) => {
  return res.send("This route does not exist");
};

export default NotFoundMiddleware;
