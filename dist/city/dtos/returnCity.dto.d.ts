import { RetrunStateDto } from 'src/state/dtos/returnState.dto';
import { CityEntity } from '../entities/city.entity';
export declare class ReturnCityDto {
    name: string;
    state?: RetrunStateDto;
    constructor(city: CityEntity);
}
