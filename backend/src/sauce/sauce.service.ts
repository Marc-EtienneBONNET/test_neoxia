import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sauce } from './sauce.entity';

@Injectable()
export class SauceService {
  constructor(
    @InjectRepository(Sauce) readonly SauceRepository: Repository<Sauce>,
  ) {}

  async takeAllSauce() {
    return await this.SauceRepository.find();
  }

}
