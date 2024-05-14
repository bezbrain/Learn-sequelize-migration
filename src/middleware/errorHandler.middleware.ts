import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const ErrorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  Next: NextFunction
) => {
  const customMessage = {
    message: err.message || "Something went wrong!",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  //
};

export default ErrorHandlerMiddleware;
