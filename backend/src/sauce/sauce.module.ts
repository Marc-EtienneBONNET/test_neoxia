import { Module } from '@nestjs/common';
import { SauceController } from './sauce.controller';
import { SauceService } from './sauce.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sauce } from './sauce.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sauce])],
  controllers: [SauceController],
  providers: [SauceService],
})
export class SauceModule {}
