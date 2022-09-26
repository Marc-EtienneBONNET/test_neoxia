import { ViandeService } from './viande.service';
export declare class ViandeController {
    private readonly viandeService;
    constructor(viandeService: ViandeService);
    takeAllViande(): Promise<import("./viande.entity").Viande[]>;
    takeByName(name: any): Promise<import("./viande.entity").Viande>;
    addNewViande(body: any): Promise<void>;
    supViande(body: any): Promise<void>;
}
