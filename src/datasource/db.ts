import { Sequelize } from "sequelize";
import { env } from "../config";
import { Logger } from "../libs";
import * as pg from "pg";

// Define an interface for the environment variables
interface Env {
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: string;
}

// Type assertion to ensure env has the right type
const config: Env = {
  DB_NAME: env.DB_NAME as string,
  DB_USER: env.DB_USER as string,
  DB_PASSWORD: env.DB_PASSWORD as string,
  DB_HOST: env.DB_HOST as string,
  DB_PORT: env.DB_PORT as string,
};

const dbClient = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: "postgres",
    port: parseInt(config.DB_PORT),
    logging: false,
    pool: {
      max: 2,
      min: 0,
      acquire: 3000,
      idle: 0,
    },
    dialectModule: pg,
    define: {
      freezeTableName: true,
    },
  }
);

dbClient
  .sync()
  .then(() => {
    Logger.info("Database connected successfully!");
  })
  .catch((err) => Logger.error(err));

export default dbClient;
