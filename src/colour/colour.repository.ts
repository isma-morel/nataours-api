import { AppDataSource } from "../config/config.database";
import { Repository } from "typeorm";
import { Colour } from "./colour.model";
import { ColourInterface } from "./colour.interface";

export class ColourRepository {
  private repository: Repository<Colour>;
  constructor() {
    this.repository = AppDataSource.getRepository(Colour);
  }
  async findAll() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOneBy({
      colour_id: id,
    });
  }

  async create(data: Partial<ColourInterface>) {
    const colour = this.repository.create(data);
    return await this.repository.save(colour);
  }

  async update(id: number, data: Partial<ColourInterface>) {
    return await this.repository.update(id, data);
  }

  async delete(id: number) {
    return await this.repository.delete({ colour_id: id });
  }
}
