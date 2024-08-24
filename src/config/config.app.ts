import express, { Express } from "express";
import cors from "cors";
import { routes } from "./config.routes";

const app: Express = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors());

app.use("/", routes);

export default app;
