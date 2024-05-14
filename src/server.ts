import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Logger } from "./libs";

const app: Express = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use("/", (req: Request, res: Response) => {
  res.send("Home page");
});

const port = process.env.PORT || 3200;

app.listen(port, () => Logger.info(`Server is listening on port ${port}`));
