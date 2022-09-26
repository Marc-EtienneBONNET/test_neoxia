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
exports.CommandeService = void 0;
const common_1 = require("@nestjs/common");
const commande_entity_1 = require("./commande.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CommandeService = class CommandeService {
    constructor(CommandeRepository) {
        this.CommandeRepository = CommandeRepository;
    }
    async takeAllCommande() {
        return await this.CommandeRepository.find();
    }
    addNewCommande(name, garniture, viande, sauce) {
        if (name && garniture && viande && sauce) {
            const tmp = new commande_entity_1.Commande();
            tmp.name = name;
            tmp.garniture = garniture;
            tmp.viande = viande;
            tmp.sauce = sauce;
            tmp.etat = 'en attente';
            tmp.date = new Date();
            this.CommandeRepository.save(tmp);
        }
    }
    async supCommandeById(id) {
        const tmp = await this.CommandeRepository.findOneBy({
            id: id,
        });
        this.CommandeRepository.remove(tmp);
    }
    async mouvEtat(id) {
        const tmp = await this.CommandeRepository.findOneBy({
            id: id,
        });
        if (tmp.etat === 'en attente') {
            tmp.etat = 'en cours';
            this.CommandeRepository.save(tmp);
        }
        else if (tmp.etat === 'en cours')
            this.CommandeRepository.remove(tmp);
    }
};
CommandeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(commande_entity_1.Commande)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommandeService);
exports.CommandeService = CommandeService;
//# sourceMappingURL=commande.service.js.map