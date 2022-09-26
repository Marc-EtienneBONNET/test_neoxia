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
exports.SauceController = void 0;
const common_1 = require("@nestjs/common");
const sauce_service_1 = require("./sauce.service");
let SauceController = class SauceController {
    constructor(sauceService) {
        this.sauceService = sauceService;
    }
    async takeAllSauce() {
        const tmp = await this.sauceService.takeAllSauce();
        return tmp;
    }
    async addNewSauce(body) {
        await this.sauceService.addNewSauce(body.data);
    }
    async takeByName(name) {
        const tmp = await this.sauceService.takeByName(name);
        return tmp;
    }
    async supSauce(body) {
        await this.sauceService.supSauce(body.data);
    }
};
__decorate([
    (0, common_1.Get)('takeAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SauceController.prototype, "takeAllSauce", null);
__decorate([
    (0, common_1.Post)('addNew'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SauceController.prototype, "addNewSauce", null);
__decorate([
    (0, common_1.Get)('takeByName:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SauceController.prototype, "takeByName", null);
__decorate([
    (0, common_1.Post)('supOne'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SauceController.prototype, "supSauce", null);
SauceController = __decorate([
    (0, common_1.Controller)('sauce'),
    __metadata("design:paramtypes", [sauce_service_1.SauceService])
], SauceController);
exports.SauceController = SauceController;
//# sourceMappingURL=sauce.controller.js.map