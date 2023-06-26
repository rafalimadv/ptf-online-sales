import { RetrunStateDto } from 'src/state/dtos/returnState.dto';
import { CityEntity } from '../entities/city.entity';

export class ReturnCityDto {
  name: string;
  state?: RetrunStateDto;

  constructor(city: CityEntity) {
    this.name = city.name;
    this.state = city.state ? new RetrunStateDto(city.state) : undefined;
  }
}
