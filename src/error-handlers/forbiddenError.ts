import { StatusCodes } from "http-status-codes";
import CustomErrorAPI from "./customError";

class ForbiddenError extends CustomErrorAPI {
  StatusCode: StatusCodes;

  constructor(message: string | undefined) {
    super(message);
    this.StatusCode = StatusCodes.FORBIDDEN;
  }
}

export default ForbiddenError;
