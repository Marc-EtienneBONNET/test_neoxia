import { Injectable } from '@nestjs/common';
import { Viande } from './viande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ViandeService {
  constructor(
    @InjectRepository(Viande) readonly ViandeRepository: Repository<Viande>,
  ) {}

  async takeAllViande() {
    return await this.ViandeRepository.find();
  }
}
