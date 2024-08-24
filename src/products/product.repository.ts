import { AppDataSource } from "../config/config.database";
import { Repository } from "typeorm";
import { Product } from "./product.model";
import { ProductInterface } from "./product.interface";

export class ProductRepository {
  private repository: Repository<Product>;
  constructor() {
    this.repository = AppDataSource.getRepository(Product);
  }
  async findAll() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOneBy({
      product_id: id,
    });
  }

  async create(data: Partial<ProductInterface>) {
    const productCategory = this.repository.create(data);
    return await this.repository.save(productCategory);
  }

  async update(id: number, data: Partial<Product>) {
    return await this.repository.update(id, data);
  }

  async delete(id: number) {
    return await this.repository.delete({ product_id: id });
  }
}
