import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import 'reflect-metadata';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Page d accueil';
  }
}
