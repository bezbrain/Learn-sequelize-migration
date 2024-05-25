import Joi from "joi";
import { UserPayload } from "../interfaces";

class SchemaValidation {
  regSchema(payload: UserPayload) {
    const user: Joi.ObjectSchema = Joi.object({
      email: Joi.string()
        .label("A valid email is required")
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "ng", "io"] } })
        .required(),
    });
  }
}
