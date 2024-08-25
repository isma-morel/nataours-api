import { Router } from "express";
import categoriesRoutes from "../entities/product_category/product_category.routes";
import productRoutes from "../entities/products/product.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/products", productRoutes);

export { routes };
