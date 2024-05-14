import { StatusCodes } from "http-status-codes";
import CustomErrorAPI from "./customError";

class NotFoundError extends CustomErrorAPI {
  StatusCode: StatusCodes;

  constructor(message: string | undefined) {
    super(message);
    this.StatusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
