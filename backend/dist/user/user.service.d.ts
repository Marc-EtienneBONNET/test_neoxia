import { Restorateur } from './user.entity';
import { Repository } from 'typeorm';
export declare class RestorateurService {
    readonly RestorateurRepository: Repository<Restorateur>;
    constructor(RestorateurRepository: Repository<Restorateur>);
    addNewUser(login: any, password: any): void;
    mouvLog(login: any): Promise<void>;
    takeOneUserByLogin(login: any): Promise<Restorateur>;
    takeOneUserByLog(): Promise<Restorateur>;
}
