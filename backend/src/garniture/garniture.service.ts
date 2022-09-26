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
  async takeAllGarniture() {
    return await this.garnitureRepository.find();
  }
}
