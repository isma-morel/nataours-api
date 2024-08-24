import { ProductCategory } from "./product_category.model";
import { AppDataSource } from "../config/config.database";
import { ProductCategoryInterface } from "./product_category.interface";
import { Repository } from "typeorm";

export class ProductCategoryRepository {
  private repository: Repository<ProductCategory>;
  constructor() {
    this.repository = AppDataSource.getRepository(ProductCategory);
  }
  async findAll() {
    return await this.repository.find();
  }

  async findById(id: number) {
    return await this.repository.findOneBy({
      product_category_id: id,
    });
  }

  async create(data: ProductCategory) {
    const productCategory = this.repository.create(data);
    return await this.repository.save(productCategory);
  }

  async update(data: ProductCategoryInterface) {
    return await this.repository.save(data);
  }

  async delete(id: number) {
    return await this.repository.delete({ product_category_id: id });
  }
}
