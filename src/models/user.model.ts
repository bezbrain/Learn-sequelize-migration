import * as Sequelize from "sequelize";
import { DataTypes, UUIDV4 } from "sequelize";
import { db } from "../datasource";
import { hashPassword } from "../utils";

interface UserPayload {
  id?: number;
  email: string;
  username: string;
  password: string;
}

interface UserModel extends Sequelize.Model<UserModel, UserPayload> {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

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
  },
  { timestamps: true }
);

// Hash password before registration
User.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await hashPassword(user.password);
  }
});
