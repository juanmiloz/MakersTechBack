// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { AppDataSource } from "./config/db";

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

routes(app);


AppDataSource.initialize();
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});