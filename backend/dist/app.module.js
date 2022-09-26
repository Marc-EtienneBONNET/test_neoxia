"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const viande_module_1 = require("./viande/viande.module");
const user_module_1 = require("./user/user.module");
const sauce_module_1 = require("./sauce/sauce.module");
const garniture_module_1 = require("./garniture/garniture.module");
const commande_module_1 = require("./commande/commande.module");
const typeorm_1 = require("@nestjs/typeorm");
const appData_conf_1 = require("./appData.conf");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(appData_conf_1.config),
            viande_module_1.ViandeModule,
            user_module_1.UserModule,
            sauce_module_1.SauceModule,
            garniture_module_1.GarnitureModule,
            commande_module_1.CommandeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map