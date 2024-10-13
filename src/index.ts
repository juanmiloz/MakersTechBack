// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { AppDataSource } from "./config/db";
import cors from 'cors';

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*", // Cambia esto por la URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions))


routes(app);


AppDataSource.initialize();
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});