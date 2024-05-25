import { DataTypes, UUIDV4 } from "sequelize";
import { db } from "../datasource";
import { hashPassword } from "../utils";
import { UserModel, UserPayload } from "../interfaces";
import { BadRequestError } from "../error-handlers";

const User = db.define<UserModel, UserPayload>(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "username",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "email",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    confirmPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

// Check if password and confirm password are the same

// Hash password before registration
User.beforeCreate(async (user) => {
  if (user.password !== user.confirmPassword) {
    throw new BadRequestError("Password do not match");
  }

  if (user.password) {
    user.password = await hashPassword(user.password);
    user.confirmPassword = ""; // Remove confirmPassword field when same password is confirmed
  }
});

export default User;
