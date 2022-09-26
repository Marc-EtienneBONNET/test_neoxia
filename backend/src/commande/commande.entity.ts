import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Commande {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  garniture: string;
  @Column()
  viande: string;
  @Column()
  sauce: string;
  @Column()
  etat: 'en cours' | 'en attente';
  @Column()
  date: Date;
}
