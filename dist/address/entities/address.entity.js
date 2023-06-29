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
exports.AddressEntity = void 0;
const city_entity_1 = require("../../city/entities/city.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let AddressEntity = exports.AddressEntity = class AddressEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], AddressEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', nullable: false }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'complement', nullable: true }),
    __metadata("design:type", String)
], AddressEntity.prototype, "complement", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'number', nullable: false }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "numberAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cep', nullable: false }),
    __metadata("design:type", String)
], AddressEntity.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'city_id', nullable: false }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at' }),
    __metadata("design:type", Date)
], AddressEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], AddressEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (userEntity) => userEntity.address),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], AddressEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.CityEntity, (cityEntity) => cityEntity.address),
    (0, typeorm_1.JoinColumn)({ name: 'city_id', referencedColumnName: 'id' }),
    __metadata("design:type", city_entity_1.CityEntity)
], AddressEntity.prototype, "city", void 0);
exports.AddressEntity = AddressEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'address' })
], AddressEntity);
//# sourceMappingURL=address.entity.js.map