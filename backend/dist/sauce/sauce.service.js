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
exports.SauceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sauce_entity_1 = require("./sauce.entity");
let SauceService = class SauceService {
    constructor(SauceRepository) {
        this.SauceRepository = SauceRepository;
    }
    addNewSauce(sauce) {
        if (sauce) {
            const tmp = new sauce_entity_1.Sauce();
            tmp.name = sauce;
            this.SauceRepository.save(tmp);
        }
    }
    async takeAllSauce() {
        return await this.SauceRepository.find();
    }
    async supSauce(sauce) {
        const tmp = await this.SauceRepository.findOneBy({
            name: sauce,
        });
        this.SauceRepository.remove(tmp);
    }
    async takeByName(name) {
        return await this.SauceRepository.findOneBy({
            name: name,
        });
    }
};
SauceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sauce_entity_1.Sauce)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SauceService);
exports.SauceService = SauceService;
//# sourceMappingURL=sauce.service.js.map