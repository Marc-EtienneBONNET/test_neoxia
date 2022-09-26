import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Viande } from './viande/viande.entity';
import { Sauce } from './sauce/sauce.entity';
import { Garniture } from './garniture/garniture.entity';
import { Restorateur } from './user/user.entity';
import { Commande } from './commande/commande.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: true,
};
