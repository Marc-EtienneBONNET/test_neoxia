import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sauce } from './sauce.entity';

@Injectable()
export class SauceService {
  constructor(
    @InjectRepository(Sauce) readonly SauceRepository: Repository<Sauce>,
  ) {}

  addNewSauce(sauce) {
    if (sauce) {
      const tmp = new Sauce();
      tmp.name = sauce;
      this.SauceRepository.save(tmp);
    }
  }

  async takeAllSauce() {
    return await this.SauceRepository.find();
  }

  async supSauce(sauce) {
    const tmp = await this.SauceRepository.findOneBy({
      name: sauce,
    });
    this.SauceRepository.remove(tmp);
  }

  async takeByName(name) {
    return await this.SauceRepository.findOneBy({
      name: name,
    });
  }
}
