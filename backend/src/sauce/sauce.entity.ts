import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sauce {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
