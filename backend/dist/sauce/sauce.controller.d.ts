import { SauceService } from './sauce.service';
export declare class SauceController {
    private readonly sauceService;
    constructor(sauceService: SauceService);
    takeAllSauce(): Promise<import("./sauce.entity").Sauce[]>;
    addNewSauce(body: any): Promise<void>;
    takeByName(name: any): Promise<import("./sauce.entity").Sauce>;
    supSauce(body: any): Promise<void>;
}
