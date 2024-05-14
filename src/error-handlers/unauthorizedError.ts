import { StatusCodes } from "http-status-codes";
import CustomErrorAPI from "./customError";

class UnauthorizedError extends CustomErrorAPI {
  statusCode: StatusCodes;

  constructor(message: string | undefined) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthorizedError;
