import { Module } from '@nestjs/common';
import { CommandeController } from './commande.controller';
import { CommandeService } from './commande.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commande } from './commande.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Commande])],
  controllers: [CommandeController],
  providers: [CommandeService],
})
export class CommandeModule {}
