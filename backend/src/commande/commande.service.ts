/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { Commande } from './commande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommandeService {
  constructor(
    @InjectRepository(Commande)
    readonly CommandeRepository: Repository<Commande>,
  ) {}
  addNewCommande(name, garniture, viande, sauce) {
    if (name && garniture && viande && sauce) {
      const tmp = new Commande();
      tmp.name = name;
      tmp.garniture = garniture;
      tmp.viande = viande;
      tmp.sauce = sauce;
      tmp.etat = 'en attente';
      tmp.date = new Date();
      this.CommandeRepository.save(tmp);
    }
  }
}
