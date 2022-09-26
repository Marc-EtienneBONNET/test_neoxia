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
exports.RestorateurService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RestorateurService = class RestorateurService {
    constructor(RestorateurRepository) {
        this.RestorateurRepository = RestorateurRepository;
    }
    addNewUser(login, password) {
        if (login && password) {
            const tmp = new user_entity_1.Restorateur();
            tmp.login = login;
            tmp.password = password;
            tmp.log = false;
            this.RestorateurRepository.save(tmp);
        }
    }
    async mouvLog(login) {
        const tmp = await this.RestorateurRepository.findOneBy({
            login: login,
        });
        if (tmp) {
            tmp.log = !tmp.log;
            this.RestorateurRepository.save(tmp);
        }
    }
    async takeOneUserByLogin(login) {
        const tmp = await this.RestorateurRepository.findOneBy({
            login: login,
        });
        return tmp;
    }
    async takeOneUserByLog() {
        const tmp = await this.RestorateurRepository.findOneBy({
            log: true,
        });
        return tmp;
    }
};
RestorateurService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Restorateur)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RestorateurService);
exports.RestorateurService = RestorateurService;
//# sourceMappingURL=user.service.js.map