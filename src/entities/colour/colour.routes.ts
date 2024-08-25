import { Router } from "express";
import { ColourController } from "./colour.controller";
const routes = Router();
const colourController = new ColourController();

routes.get("/", colourController.findAll);
routes.get("/:id", colourController.findById);
routes.post("/create", colourController.create);
routes.put("/update/:id", colourController.update);
routes.delete("/delete/:id", colourController.delete);

export default routes;
