import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RestorateurService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly restorateurService: RestorateurService) {}

  @Post('addNew')
  addNewUser(@Body() body) {
    this.restorateurService.addNewUser(body.login, body.password);
  }

  @Post('mouvLog')
  mouvLog(@Body() body) {
    this.restorateurService.mouvLog(body.login);
  }

  @Get('takeOneUserByLog')
  async takeOneUserByLog() {
    return await this.restorateurService.takeOneUserByLog();
  }

  @Get('takeOneUserByLogin:login')
  async takeOneUserByLogin(@Param('login') login) {
    const tmp = await this.restorateurService.takeOneUserByLogin(login);
    return tmp;
  }
}
