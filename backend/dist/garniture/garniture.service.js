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
exports.GarnitureService = void 0;
const common_1 = require("@nestjs/common");
const garniture_entity_1 = require("./garniture.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let GarnitureService = class GarnitureService {
    constructor(garnitureRepository) {
        this.garnitureRepository = garnitureRepository;
    }
    addNewGarniture(garniture) {
        if (garniture) {
            const tmp = new garniture_entity_1.Garniture();
            tmp.name = garniture;
            this.garnitureRepository.save(tmp);
        }
    }
    async takeAllGarniture() {
        return await this.garnitureRepository.find();
    }
    async takeByName(name) {
        return await this.garnitureRepository.findOneBy({
            name: name,
        });
    }
    async supGarniture(garniture) {
        const tmp = await this.garnitureRepository.findOneBy({
            name: garniture,
        });
        this.garnitureRepository.remove(tmp);
    }
};
GarnitureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(garniture_entity_1.Garniture)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GarnitureService);
exports.GarnitureService = GarnitureService;
//# sourceMappingURL=garniture.service.js.map