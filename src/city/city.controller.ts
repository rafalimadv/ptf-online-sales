import { Controller, Get, Param } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async getAllCities(): Promise<CityEntity[]> {
    return this.cityService.getAll();
  }

  @Get('/:stateId')
  async getAllCitiesByStateId(
    @Param('stateID') stateId: number,
  ): Promise<CityEntity[]> {
    return this.cityService.getAllCitiesByStateId(stateId);
  }
}
