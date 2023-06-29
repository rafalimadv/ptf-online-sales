import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';
import { CacheService } from 'src/cache/cache.service';
export declare class CityService {
    private readonly cacheService;
    private readonly cityRepository;
    constructor(cacheService: CacheService, cityRepository: Repository<CityEntity>);
    getAll(): Promise<CityEntity[]>;
    getAllCitiesByStateId(stateId: number): Promise<CityEntity[]>;
    findCityById(cityId: number): Promise<CityEntity>;
}
