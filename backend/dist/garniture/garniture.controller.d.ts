import { GarnitureService } from './garniture.service';
export declare class GarnitureController {
    private readonly garnitureService;
    constructor(garnitureService: GarnitureService);
    takeAllGar(): Promise<import("./garniture.entity").Garniture[]>;
    takeByName(name: any): Promise<import("./garniture.entity").Garniture>;
    addNewGar(body: any): Promise<void>;
    supGar(body: any): Promise<void>;
}
