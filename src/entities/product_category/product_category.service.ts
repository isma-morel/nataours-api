import { ProductCategoryInterface } from "./product_category.interface";
import { ProductCategory } from "./product_category.model";
import { ProductCategoryRepository } from "./product_category.repository";

export class ProductCategoryService {
  private productCategoryRepository: ProductCategoryRepository;
  constructor() {
    this.productCategoryRepository = new ProductCategoryRepository();
  }
  async findAll() {
    return await this.productCategoryRepository.findAll();
  }
  async findById(id: number): Promise<ProductCategory | null> {
    const category = await this.productCategoryRepository.findById(id);
    if (!id) {
      throw new Error("error id");
    }
    return category;
  }
  async create(data: Partial<ProductCategoryInterface>) {
    if (!data.product_category_img || !data.product_category_desc) {
      throw new Error("category name & img required");
    }
    return await this.productCategoryRepository.create(data);
  }
  async update(id: number, data: Partial<ProductCategoryInterface>) {
    const category = await this.findById(id);
    if (!category) {
      console.log(category);
      throw new Error("category not found");
    }
    return await this.productCategoryRepository.update(id, data);
  }
  async delete(id: number) {
    const category = await this.findById(id);
    if (!category) {
      throw new Error("category not found");
    }
    return await this.productCategoryRepository.delete(id);
  }
}
