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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityEntity = void 0;
const address_entity_1 = require("../../address/entities/address.entity");
const state_entity_1 = require("../../state/entities/state.entity");
const typeorm_1 = require("typeorm");
let CityEntity = exports.CityEntity = class CityEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], CityEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'state_id', nullable: false }),
    __metadata("design:type", Number)
], CityEntity.prototype, "stateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', nullable: false }),
    __metadata("design:type", String)
], CityEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CityEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], CityEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => address_entity_1.AddressEntity, (adderess) => adderess.city),
    __metadata("design:type", Array)
], CityEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => state_entity_1.StateEntity, (state) => state.cities),
    (0, typeorm_1.JoinColumn)({ name: 'state_id', referencedColumnName: 'id' }),
    __metadata("design:type", state_entity_1.StateEntity)
], CityEntity.prototype, "state", void 0);
exports.CityEntity = CityEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'city' })
], CityEntity);
//# sourceMappingURL=city.entity.js.map