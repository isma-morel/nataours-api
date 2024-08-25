import { ProductInterface } from "./product.interface";
import { Product } from "./product.model";
import { ProductRepository } from "./product.repository";

export class ProductService {
  private productRepository: ProductRepository;
  constructor() {
    this.productRepository = new ProductRepository();
  }
  async findAll() {
    return await this.productRepository.findAll();
  }
  async findById(id: number): Promise<Product | null> {
    const product = await this.productRepository.findById(id);
    if (!id) {
      throw new Error("error id");
    }
    return product;
  }
  async create(data: Partial<ProductInterface>) {
    if (!data.product_category_id || !data.product_desc) {
      throw new Error("category id & product name required");
    }
    return await this.productRepository.create(data);
  }
  async update(id: number, data: Partial<ProductInterface>) {
    const product = await this.findById(id);
    if (!product) {
      console.log(product);
      throw new Error("product not found");
    }
    return await this.productRepository.update(id, data);
  }
  async delete(id: number) {
    const product = await this.findById(id);
    if (!product) {
      throw new Error("product not found");
    }
    return await this.productRepository.delete(id);
  }
}
