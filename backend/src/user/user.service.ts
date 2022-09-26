import { Injectable } from '@nestjs/common';
import { Restorateur } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RestorateurService {
  constructor(
    @InjectRepository(Restorateur)
    readonly RestorateurRepository: Repository<Restorateur>,
  ) {}

  addNewUser(login, password) {
    if (login && password) {
      const tmp = new Restorateur();
      tmp.login = login;
      tmp.password = password;
      tmp.log = false;
      this.RestorateurRepository.save(tmp);
    }
  }

  async mouvLog(login) {
    const tmp = await this.RestorateurRepository.findOneBy({
      login: login,
    });
    if (tmp) {
      tmp.log = !tmp.log;
      this.RestorateurRepository.save(tmp);
    }
  }

  async takeOneUserByLogin(login) {
    const tmp = await this.RestorateurRepository.findOneBy({
      login: login,
    });
    return tmp;
  }
  async takeOneUserByLog() {
    const tmp = await this.RestorateurRepository.findOneBy({
      log: true,
    });
    return tmp;
  }
}
