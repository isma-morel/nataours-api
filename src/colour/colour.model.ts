import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Colour {
  @PrimaryGeneratedColumn()
  colour_id: number;

  @Column()
  colour_name: string;
}
