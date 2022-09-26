import { Viande } from './viande.entity';
import { Repository } from 'typeorm';
export declare class ViandeService {
    readonly ViandeRepository: Repository<Viande>;
    constructor(ViandeRepository: Repository<Viande>);
    addNewViande(viande: any): void;
    takeAllViande(): Promise<Viande[]>;
    supViande(viande: any): Promise<void>;
    takeByName(name: any): Promise<Viande>;
}
