import { Request, Response } from "express";
import { ProductCategoryService } from "./product_category.service";
import { ProductCategoryInterface } from "./product_category.interface";
import { autoBind } from "../utils/bind";

export class ProductCategoryController {
  private service: ProductCategoryService;
  constructor() {
    this.service = new ProductCategoryService();
    autoBind(this);
  }

  async findAll(req: Request, res: Response) {
    try {
      const productCategories = await this.service.findAll();

      return res.status(200).json(productCategories);
    } catch (err) {
      return res.status(500).json({ message: "server error" });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const productCategory = await this.service.findById(parseInt(id));
      return res.status(200).json(productCategory);
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const {
        product_category_id,
        product_category_desc,
        product_category_img,
      }: ProductCategoryInterface = req.body;

      const productCategory = await this.service.create({
        product_category_id,
        product_category_desc,
        product_category_img,
      });
      return res.status(201).json(productCategory);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        product_category_id,
        product_category_desc,
        product_category_img,
      }: ProductCategoryInterface = req.body;

      const productCategory = await this.service.update(parseInt(id), {
        product_category_id,
        product_category_desc,
        product_category_img,
      });
      return res.status(200).json(productCategory);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const product = await this.service.delete(parseInt(id));
      return res.status(200).json(product);
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}
