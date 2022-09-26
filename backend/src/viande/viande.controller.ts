import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ViandeService } from './viande.service';

@Controller('viande')
export class ViandeController {
  constructor(private readonly viandeService: ViandeService) {}

  @Get('takeAll')
  async takeAllViande() {
    const tmp = await this.viandeService.takeAllViande();
    return tmp;
  }

  @Get('takeByName:name')
  async takeByName(@Param('name') name) {
    const tmp = await this.viandeService.takeByName(name);
    return tmp;
  }
}
