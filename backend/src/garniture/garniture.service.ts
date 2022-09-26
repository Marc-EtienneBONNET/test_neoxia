import { Injectable } from '@nestjs/common';
import { Garniture } from './garniture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GarnitureService {
  constructor(
    @InjectRepository(Garniture)
    readonly garnitureRepository: Repository<Garniture>,
  ) {}

  addNewGarniture(garniture) {
    if (garniture) {
      const tmp = new Garniture();
      tmp.name = garniture;
      this.garnitureRepository.save(tmp);
    }
  }

  async takeAllGarniture() {
    return await this.garnitureRepository.find();
  }

  async takeByName(name) {
    return await this.garnitureRepository.findOneBy({
      name: name,
    });
  }

  async supGarniture(garniture) {
    const tmp = await this.garnitureRepository.findOneBy({
      name: garniture,
    });
    this.garnitureRepository.remove(tmp);
  }
}
