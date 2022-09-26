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
exports.ViandeController = void 0;
const common_1 = require("@nestjs/common");
const viande_service_1 = require("./viande.service");
let ViandeController = class ViandeController {
    constructor(viandeService) {
        this.viandeService = viandeService;
    }
    async takeAllViande() {
        const tmp = await this.viandeService.takeAllViande();
        return tmp;
    }
    async takeByName(name) {
        const tmp = await this.viandeService.takeByName(name);
        return tmp;
    }
    async addNewViande(body) {
        await this.viandeService.addNewViande(body.data);
    }
    async supViande(body) {
        await this.viandeService.supViande(body.data);
    }
};
__decorate([
    (0, common_1.Get)('takeAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ViandeController.prototype, "takeAllViande", null);
__decorate([
    (0, common_1.Get)('takeByName:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ViandeController.prototype, "takeByName", null);
__decorate([
    (0, common_1.Post)('addNew'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ViandeController.prototype, "addNewViande", null);
__decorate([
    (0, common_1.Post)('supOne'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ViandeController.prototype, "supViande", null);
ViandeController = __decorate([
    (0, common_1.Controller)('viande'),
    __metadata("design:paramtypes", [viande_service_1.ViandeService])
], ViandeController);
exports.ViandeController = ViandeController;
//# sourceMappingURL=viande.controller.js.map