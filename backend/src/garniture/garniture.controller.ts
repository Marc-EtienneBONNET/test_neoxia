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

  @Get('takeByName:name')
  async takeByName(@Param('name') name) {
    const tmp = await this.garnitureService.takeByName(name);
    return tmp;
  }

  @Post('addNew')
  async addNewGar(@Body() body) {
    await this.garnitureService.addNewGarniture(body.data);
  }

  @Post('supOne')
  async supGar(@Body() body) {
    await this.garnitureService.supGarniture(body.data);
  }
}
