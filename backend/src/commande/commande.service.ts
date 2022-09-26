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

  async takeAllCommande() {
    return await this.CommandeRepository.find();
  }

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

  async supCommandeById(id) {
    const tmp = await this.CommandeRepository.findOneBy({
      id: id,
    });
    this.CommandeRepository.remove(tmp);
  }

  async mouvEtat(id) {
    const tmp = await this.CommandeRepository.findOneBy({
      id: id,
    });
    console.log(tmp);
    if (tmp.etat === 'en attente') {
      tmp.etat = 'en cours';
      this.CommandeRepository.save(tmp);
    } else if (tmp.etat === 'en cours') this.CommandeRepository.remove(tmp);
  }
}
