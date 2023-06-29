import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    getAllCities(): Promise<CityEntity[]>;
    getAllCitiesByStateId(stateId: number): Promise<CityEntity[]>;
}
