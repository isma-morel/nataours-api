import { ProductCategory } from "./product_category.model";
import { ProductCategoryInterface } from "./product_category.interface";
import { Repository } from "typeorm";
import { AppDataSource } from "../../config/config.database";

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

  async create(data: Partial<ProductCategoryInterface>) {
    const productCategory = this.repository.create(data);
    return await this.repository.save(productCategory);
  }

  async update(id: number, data: Partial<ProductCategoryInterface>) {
    return await this.repository.update(id, data);
  }

  async delete(id: number) {
    return await this.repository.delete({ product_category_id: id });
  }
}
