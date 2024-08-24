import { Router } from "express";
import categoriesRoutes from "../product_category/product_category.routes";
import productRoutes from "../products/product.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/products", productRoutes);

export { routes };
