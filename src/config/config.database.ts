import { DataSource } from "typeorm";
import { config } from "./config.enviroment";
import { Product } from "../product/product.model";
import { ProductCategory } from "../product_category/product_category.model";

const {
  db: { db_name, db_port, db_user, db_pw },
} = config;

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: db_user,
  password: db_pw,
  database: db_name,
  port: db_port,
  entities: [ProductCategory, Product],
  synchronize: true,
});

export { AppDataSource };
