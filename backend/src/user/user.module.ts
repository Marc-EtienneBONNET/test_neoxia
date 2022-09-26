import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { RestorateurService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restorateur } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restorateur])],
  controllers: [UserController],
  providers: [RestorateurService],
})
export class UserModule {}
