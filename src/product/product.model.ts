import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductCategory } from "../product_category/product_category.model";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;
  @ManyToOne(
    () => ProductCategory,
    (productCategory) => productCategory.product_category_id
  )
  product_category_id: number;
  @Column()
  product_desc: string;
}
