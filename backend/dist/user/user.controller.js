"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(restorateurService) {
        this.restorateurService = restorateurService;
    }
    addNewUser(body) {
        this.restorateurService.addNewUser(body.login, body.password);
    }
    mouvLog(body) {
        this.restorateurService.mouvLog(body.login);
    }
    async takeOneUserByLog() {
        return await this.restorateurService.takeOneUserByLog();
    }
    async takeOneUserByLogin(login) {
        const tmp = await this.restorateurService.takeOneUserByLogin(login);
        return tmp;
    }
};
__decorate([
    (0, common_1.Post)('addNew'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addNewUser", null);
__decorate([
    (0, common_1.Post)('mouvLog'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "mouvLog", null);
__decorate([
    (0, common_1.Get)('takeOneUserByLog'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "takeOneUserByLog", null);
__decorate([
    (0, common_1.Get)('takeOneUserByLogin:login'),
    __param(0, (0, common_1.Param)('login')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "takeOneUserByLogin", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.RestorateurService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map