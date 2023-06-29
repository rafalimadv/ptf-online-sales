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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const address_entity_1 = require("./entities/address.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
const city_service_1 = require("../city/city.service");
let AddressService = exports.AddressService = class AddressService {
    constructor(addressRepository, userService, cityService) {
        this.addressRepository = addressRepository;
        this.userService = userService;
        this.cityService = cityService;
    }
    async createAddress(createAddress, userId) {
        await this.userService.findUserById(userId);
        await this.cityService.findCityById(createAddress.cityId);
        return await this.addressRepository.save(Object.assign(Object.assign({}, createAddress), { userId }));
    }
};
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(address_entity_1.AddressEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_service_1.UsersService,
        city_service_1.CityService])
], AddressService);
//# sourceMappingURL=address.service.js.map