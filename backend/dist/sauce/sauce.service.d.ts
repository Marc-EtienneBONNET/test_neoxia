import { Repository } from 'typeorm';
import { Sauce } from './sauce.entity';
export declare class SauceService {
    readonly SauceRepository: Repository<Sauce>;
    constructor(SauceRepository: Repository<Sauce>);
    addNewSauce(sauce: any): void;
    takeAllSauce(): Promise<Sauce[]>;
    supSauce(sauce: any): Promise<void>;
    takeByName(name: any): Promise<Sauce>;
}
