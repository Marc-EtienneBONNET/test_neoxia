import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SauceService } from './sauce.service';

@Controller('sauce')
export class SauceController {
  constructor(private readonly sauceService: SauceService) {}

  @Get('takeAll')
  async takeAllSauce() {
    const tmp = await this.sauceService.takeAllSauce();
    return tmp;
  }
}
