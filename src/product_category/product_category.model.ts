import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn()
  product_category_id: number;
  @Column()
  product_category_desc: string;
  @Column()
  product_category_img: string;
}
