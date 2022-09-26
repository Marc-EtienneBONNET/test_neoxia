import { RestorateurService } from './user.service';
export declare class UserController {
    private readonly restorateurService;
    constructor(restorateurService: RestorateurService);
    addNewUser(body: any): void;
    mouvLog(body: any): void;
    takeOneUserByLog(): Promise<import("./user.entity").Restorateur>;
    takeOneUserByLogin(login: any): Promise<import("./user.entity").Restorateur>;
}
