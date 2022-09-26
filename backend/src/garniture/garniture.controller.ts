import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GarnitureService } from './garniture.service';

@Controller('garniture')
export class GarnitureController {
  constructor(private readonly garnitureService: GarnitureService) {}

  @Get('takeAll')
  async takeAllGar() {
    const tmp = await this.garnitureService.takeAllGarniture();
    return tmp;
  }
}
