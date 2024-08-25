import { Request, Response } from "express";
import { autoBind } from "../utils/bind";
import { ProductService } from "./product.service";
import { ProductInterface } from "./product.interface";

export class ProductController {
  private service: ProductService;
  constructor() {
    this.service = new ProductService();
    autoBind(this);
  }

  async findAll(req: Request, res: Response) {
    try {
      const products = await this.service.findAll();

      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json({ message: "server error" });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await this.service.findById(parseInt(id));
      return res.status(200).json(product);
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const {
        product_id,
        product_category_id,
        product_desc,
      }: ProductInterface = req.body;

      const product = await this.service.create({
        product_id,
        product_category_id,
        product_desc,
      });
      return res.status(201).json(product);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        product_id,
        product_category_id,
        product_desc,
      }: ProductInterface = req.body;

      const product = await this.service.update(parseInt(id), {
        product_id,
        product_category_id,
        product_desc,
      });
      return res.status(200).json(product);
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
