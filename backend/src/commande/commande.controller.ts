import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandeService } from './commande.service';

@Controller('commande')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) {}

  @Post('addNew')
  async addNewCommande(@Body() body) {
    await this.commandeService.addNewCommande(
      body.name,
      body.garniture,
      body.viande,
      body.sauce,
    );
  }
}
