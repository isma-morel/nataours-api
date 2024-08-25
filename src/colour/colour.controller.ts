import { Request, Response } from "express";
import { autoBind } from "../utils/bind";
import { ColourService } from "./colour.service";
import { ColourInterface } from "./colour.interface";

export class ColourController {
  private service: ColourService;
  constructor() {
    this.service = new ColourService();
    autoBind(this);
  }

  async findAll(req: Request, res: Response) {
    try {
      const colours = await this.service.findAll();

      return res.status(200).json(colours);
    } catch (err) {
      return res.status(500).json({ message: "server error" });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const colour = await this.service.findById(parseInt(id));
      return res.status(200).json(colour);
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { colour_id, colour_name }: ColourInterface = req.body;

      const colour = await this.service.create({
        colour_id,
        colour_name,
      });
      return res.status(201).json(colour);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { colour_id, colour_name }: ColourInterface = req.body;

      const colour = await this.service.update(parseInt(id), {
        colour_id,
        colour_name,
      });
      return res.status(200).json(colour);
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
