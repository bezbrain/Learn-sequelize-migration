import { Response } from "express";

class ApiResponse {
  public response: {} | undefined;

  Success(res: Response, data: object, message: string, code: number) {
    this.response = {
      success: true,
      data,
      message,
    };
    return res.status(code).json(this.response);
  }

  Error(res: Response, message: string, code: number) {
    this.response = {
      success: false,
      message,
    };
    return res.status(code).json(this.response);
  }
}

export default new ApiResponse();
