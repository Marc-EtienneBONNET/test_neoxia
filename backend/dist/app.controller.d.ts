import { AppService } from './app.service';
import 'reflect-metadata';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
