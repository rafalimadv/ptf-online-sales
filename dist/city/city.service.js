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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const city_entity_1 = require("./entities/city.entity");
const cache_service_1 = require("../cache/cache.service");
let CityService = exports.CityService = class CityService {
    constructor(cacheService, cityRepository) {
        this.cacheService = cacheService;
        this.cityRepository = cityRepository;
    }
    async getAll() {
        return this.cityRepository.find();
    }
    async getAllCitiesByStateId(stateId) {
        return this.cacheService.getCache(`state_${stateId}`, () => this.cityRepository.find({
            where: {
                stateId,
            },
        }));
    }
    async findCityById(cityId) {
        const city = await this.cityRepository.findOne({
            where: {
                id: cityId,
            },
        });
        if (!city) {
            throw new common_1.NotFoundException('Id City not found!');
        }
        return city;
    }
};
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(city_entity_1.CityEntity)),
    __metadata("design:paramtypes", [cache_service_1.CacheService,
        typeorm_2.Repository])
], CityService);
//# sourceMappingURL=city.service.js.map