import { DataSource } from "typeorm";
import { User } from "../enitites/user.entity";
import { Product } from "../enitites/product.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User, Product],
    subscribers: [],
    migrations: [],
})