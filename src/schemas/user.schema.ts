import Joi from "joi";
import { UserPayload } from "../interfaces";

const PASSWORD_REGEX =
  /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?])[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?]{8,16}$/;

class UserValidation {
  regSchema(payload: UserPayload) {
    const user: Joi.ObjectSchema = Joi.object({
      email: Joi.string()
        .label("A valid email is required")
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "ng", "io"] } })
        .required(),

      username: Joi.string()
        .min(3)
        .label("Username is required and not less than three characters")
        .required(),

      password: Joi.string()
        .min(8)
        .label(
          "Password should contain at least on uppercase, number and special character"
        )
        .pattern(PASSWORD_REGEX)
        .required(),

      confirmPassword: Joi.ref("password"),
    }).with("password", "confirmPassword");

    return user.validate(payload);
  }
}

export default new UserValidation();
