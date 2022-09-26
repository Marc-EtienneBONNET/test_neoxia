import { Garniture } from './garniture.entity';
import { Repository } from 'typeorm';
export declare class GarnitureService {
    readonly garnitureRepository: Repository<Garniture>;
    constructor(garnitureRepository: Repository<Garniture>);
    addNewGarniture(garniture: any): void;
    takeAllGarniture(): Promise<Garniture[]>;
    takeByName(name: any): Promise<Garniture>;
    supGarniture(garniture: any): Promise<void>;
}
