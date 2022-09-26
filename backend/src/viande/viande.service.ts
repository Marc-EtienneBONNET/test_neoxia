import { Injectable } from '@nestjs/common';
import { Viande } from './viande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ViandeService {
  constructor(
    @InjectRepository(Viande) readonly ViandeRepository: Repository<Viande>,
  ) {}

  addNewViande(viande) {
    if (viande) {
      const tmp = new Viande();
      tmp.name = viande;
      this.ViandeRepository.save(tmp);
    }
  }

  async takeAllViande() {
    return await this.ViandeRepository.find();
  }

  async supViande(viande) {
    const tmp = await this.ViandeRepository.findOneBy({
      name: viande,
    });
    this.ViandeRepository.remove(tmp);
  }

  async takeByName(name) {
    return await this.ViandeRepository.findOneBy({
      name: name,
    });
  }
}
