import { Router } from "express";
import { ProductController } from "./product.controller";
const routes = Router();

const productController = new ProductController();

routes.get("/", productController.findAll);
routes.get("/:id", productController.findById);
routes.post("/create", productController.create);
routes.put("/update/:id", productController.update);
routes.delete("/delete/:id", productController.delete);

export default routes;
