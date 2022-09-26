import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Restorateur {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  login: string;
  @Column()
  password: string;
  @Column()
  log: boolean;
}
