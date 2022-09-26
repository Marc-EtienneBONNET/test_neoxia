import { CommandeService } from './commande.service';
export declare class CommandeController {
    private readonly commandeService;
    constructor(commandeService: CommandeService);
    takeAllCommande(): Promise<import("./commande.entity").Commande[]>;
    takeFiltre(filtre: any): Promise<any[]>;
    addNewCommande(body: any): Promise<void>;
    supViande(body: any): Promise<void>;
    mouvEtat(body: any): Promise<void>;
}
