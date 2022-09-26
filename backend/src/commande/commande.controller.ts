import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandeService } from './commande.service';

@Controller('commande')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) {}

  @Get('takeAll')
  async takeAllCommande() {
    const tmp = await this.commandeService.takeAllCommande();
    return tmp;
  }

  @Post('addNew')
  async addNewCommande(@Body() body) {
    await this.commandeService.addNewCommande(
      body.name,
      body.garniture,
      body.viande,
      body.sauce,
    );
  }
  @Post('supOne')
  async supViande(@Body() body) {
    await this.commandeService.supCommandeById(body.id);
  }

  @Post('mouvEtat')
  async mouvEtat(@Body() body) {
    await this.commandeService.mouvEtat(body.id);
  }
}
