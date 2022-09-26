import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Garniture {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
