import { ColourRepository } from "./colour.repository";
import { ColourInterface } from "./colour.interface";
import { Colour } from "./colour.model";

export class ColourService {
  private colourRepository: ColourRepository;
  constructor() {
    this.colourRepository = new ColourRepository();
  }
  async findAll() {
    return await this.colourRepository.findAll();
  }
  async findById(id: number): Promise<Colour | null> {
    const colour = await this.colourRepository.findById(id);
    if (!id) {
      throw new Error("error id");
    }
    return colour;
  }
  async create(data: Partial<ColourInterface>) {
    if (!data.colour_name) {
      throw new Error("colour name required");
    }
    return await this.colourRepository.create(data);
  }
  async update(id: number, data: Partial<ColourInterface>) {
    const colour = await this.findById(id);
    if (!colour) {
      console.log(colour);
      throw new Error("colour not found");
    }
    return await this.colourRepository.update(id, data);
  }
  async delete(id: number) {
    const colour = await this.findById(id);
    if (!colour) {
      throw new Error("colour not found");
    }
    return await this.colourRepository.delete(id);
  }
}
