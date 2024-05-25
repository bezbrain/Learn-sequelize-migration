import * as Sequelize from "sequelize";

export interface UserPayload {
  id?: number;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface UserModel extends Sequelize.Model<UserModel, UserPayload> {
  id: number;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  createdAt: string;
  updatedAt: string;
}
