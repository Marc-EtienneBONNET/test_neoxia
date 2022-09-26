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

  @Post('addNew')
  async addNewSauce(@Body() body) {
    await this.sauceService.addNewSauce(body.data);
  }

  @Get('takeByName:name')
  async takeByName(@Param('name') name) {
    const tmp = await this.sauceService.takeByName(name);
    return tmp;
  }

  @Post('supOne')
  async supSauce(@Body() body) {
    await this.sauceService.supSauce(body.data);
  }
}
