import { Module } from '@nestjs/common';
import { ViandeController } from './viande.controller';
import { ViandeService } from './viande.service';
import { Viande } from './viande.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Viande])],
  controllers: [ViandeController],
  providers: [ViandeService],
})
export class ViandeModule {}
