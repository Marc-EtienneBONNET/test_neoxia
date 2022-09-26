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
exports.CommandeController = void 0;
const common_1 = require("@nestjs/common");
const commande_service_1 = require("./commande.service");
let CommandeController = class CommandeController {
    constructor(commandeService) {
        this.commandeService = commandeService;
    }
    async takeAllCommande() {
        const tmp = await this.commandeService.takeAllCommande();
        return tmp;
    }
    async takeFiltre(filtre) {
        const tmp = await this.commandeService.takeAllCommande();
        const tmp_cmd = [];
        for (let i = 0; tmp[i]; i++) {
            if (tmp[i].garniture.indexOf(filtre) !== -1 ||
                tmp[i].viande.indexOf(filtre) !== -1 ||
                tmp[i].sauce.indexOf(filtre) !== -1)
                tmp_cmd.push(tmp[i]);
        }
        return tmp_cmd;
    }
    async addNewCommande(body) {
        await this.commandeService.addNewCommande(body.name, body.garniture, body.viande, body.sauce);
    }
    async supViande(body) {
        await this.commandeService.supCommandeById(body.id);
    }
    async mouvEtat(body) {
        await this.commandeService.mouvEtat(body.id);
    }
};
__decorate([
    (0, common_1.Get)('takeAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "takeAllCommande", null);
__decorate([
    (0, common_1.Get)('takeFiltre:filtre'),
    __param(0, (0, common_1.Param)('filtre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "takeFiltre", null);
__decorate([
    (0, common_1.Post)('addNew'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "addNewCommande", null);
__decorate([
    (0, common_1.Post)('supOne'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "supViande", null);
__decorate([
    (0, common_1.Post)('mouvEtat'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommandeController.prototype, "mouvEtat", null);
CommandeController = __decorate([
    (0, common_1.Controller)('commande'),
    __metadata("design:paramtypes", [commande_service_1.CommandeService])
], CommandeController);
exports.CommandeController = CommandeController;
//# sourceMappingURL=commande.controller.js.map