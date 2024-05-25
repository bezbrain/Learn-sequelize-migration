import express, { Express, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { Logger } from "./libs";
import { ErrorHandlerMiddleware, NotFoundMiddleware } from "./middleware";
import { userRouter } from "./routes";

const app: Express = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3200;

app.get("/", (_, res: Response) => {
  res.send("Home page");
});

app.use("/api/v1", userRouter);

app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

const startDB = async () => {
  try {
    app.listen(port, () => Logger.info(`Server is listening on port ${port}`));
  } catch (error) {
    Logger.info(error);
  }
};
startDB();
