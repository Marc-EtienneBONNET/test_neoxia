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
exports.GarnitureController = void 0;
const common_1 = require("@nestjs/common");
const garniture_service_1 = require("./garniture.service");
let GarnitureController = class GarnitureController {
    constructor(garnitureService) {
        this.garnitureService = garnitureService;
    }
    async takeAllGar() {
        const tmp = await this.garnitureService.takeAllGarniture();
        return tmp;
    }
    async takeByName(name) {
        const tmp = await this.garnitureService.takeByName(name);
        return tmp;
    }
    async addNewGar(body) {
        await this.garnitureService.addNewGarniture(body.data);
    }
    async supGar(body) {
        await this.garnitureService.supGarniture(body.data);
    }
};
__decorate([
    (0, common_1.Get)('takeAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GarnitureController.prototype, "takeAllGar", null);
__decorate([
    (0, common_1.Get)('takeByName:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GarnitureController.prototype, "takeByName", null);
__decorate([
    (0, common_1.Post)('addNew'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GarnitureController.prototype, "addNewGar", null);
__decorate([
    (0, common_1.Post)('supOne'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GarnitureController.prototype, "supGar", null);
GarnitureController = __decorate([
    (0, common_1.Controller)('garniture'),
    __metadata("design:paramtypes", [garniture_service_1.GarnitureService])
], GarnitureController);
exports.GarnitureController = GarnitureController;
//# sourceMappingURL=garniture.controller.js.map