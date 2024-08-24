import { Router } from "express";
import categoriesRoutes from "../product_category/product_category.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);

export { routes };
