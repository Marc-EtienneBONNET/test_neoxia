import { ConfigurableModuleBuilder, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViandeModule } from './viande/viande.module';
import { SauceModule } from './sauce/sauce.module';
import { GarnitureModule } from './garniture/garniture.module';
import { CommandeModule } from './commande/commande.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './appData.conf';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ViandeModule,
    SauceModule,
    GarnitureModule,
    CommandeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
