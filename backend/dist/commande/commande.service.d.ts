import { Commande } from './commande.entity';
import { Repository } from 'typeorm';
export declare class CommandeService {
    readonly CommandeRepository: Repository<Commande>;
    constructor(CommandeRepository: Repository<Commande>);
    takeAllCommande(): Promise<Commande[]>;
    addNewCommande(name: any, garniture: any, viande: any, sauce: any): void;
    supCommandeById(id: any): Promise<void>;
    mouvEtat(id: any): Promise<void>;
}
