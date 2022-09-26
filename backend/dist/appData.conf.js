"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const viande_entity_1 = require("./viande/viande.entity");
const sauce_entity_1 = require("./sauce/sauce.entity");
const garniture_entity_1 = require("./garniture/garniture.entity");
const user_entity_1 = require("./user/user.entity");
const commande_entity_1 = require("./commande/commande.entity");
exports.config = {
    type: 'postgres',
    username: 'postgres',
    password: 'root',
    database: 'kebab',
    port: 5431,
    host: '127.0.0.1',
    synchronize: true,
    entities: [viande_entity_1.Viande, sauce_entity_1.Sauce, garniture_entity_1.Garniture, user_entity_1.Restorateur, commande_entity_1.Commande],
};
//# sourceMappingURL=appData.conf.js.map