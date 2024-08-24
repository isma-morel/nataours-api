import { Router } from "express";
import { ProductCategoryController } from "./product_category.controller";
const routes = Router();

const productCategoryController = new ProductCategoryController();

routes.get("/", productCategoryController.findAll);
routes.get("/:id", productCategoryController.findById);
routes.post("/create", productCategoryController.create);
routes.put("/update/:id", productCategoryController.update);
routes.delete("/delete/:id", productCategoryController.delete);

export default routes;
