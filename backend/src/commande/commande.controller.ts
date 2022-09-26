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

  @Get('takeFiltre:filtre')
  async takeFiltre(@Param('filtre') filtre) {
    const tmp = await this.commandeService.takeAllCommande();
    const tmp_cmd = [];

    for (let i = 0; tmp[i]; i++) {
      if (
        tmp[i].garniture.indexOf(filtre) !== -1 ||
        tmp[i].viande.indexOf(filtre) !== -1 ||
        tmp[i].sauce.indexOf(filtre) !== -1
      )
        tmp_cmd.push(tmp[i]);
    }
    return tmp_cmd;
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
