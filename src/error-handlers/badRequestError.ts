import { StatusCodes } from "http-status-codes";
import CustomErrorAPI from "./customError";

class BadRequestError extends CustomErrorAPI {
  statusCode: StatusCodes;

  constructor(message: string | undefined) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
