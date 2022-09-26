import { Module } from '@nestjs/common';
import { GarnitureController } from './garniture.controller';
import { GarnitureService } from './garniture.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Garniture } from './garniture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Garniture])],
  controllers: [GarnitureController],
  providers: [GarnitureService],
})
export class GarnitureModule {}
