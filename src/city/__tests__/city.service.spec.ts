import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CityService } from '../city.service';
import { CityEntity } from '../entities/city.entity';
import { CityEntityMock } from '../__mocks__/city.mock';
import { CacheService } from '../../cache/cache.service';

describe('CityService', () => {
  let service: CityService;
  let cityRepository: Repository<CityEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: CacheService,
          useValue: {
            getCache: jest.fn().mockResolvedValue([CityEntityMock]),
          },
        },
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(CityEntityMock),
            find: jest.fn().mockResolvedValue([CityEntityMock]),
          },
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
    cityRepository = module.get<Repository<CityEntity>>(
      getRepositoryToken(CityEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityRepository).toBeDefined();
  });

  it('should be return a city by id', async () => {
    const city = await service.findCityById(CityEntityMock.id);

    expect(city).toEqual(CityEntityMock);
  });

  it('should be return error on get city by id not found', async () => {
    jest.spyOn(cityRepository, 'findOne').mockResolvedValue(undefined);
    expect(service.findCityById(CityEntityMock.id)).rejects.toThrowError();
  });

  it('should be return a error on get city by id', async () => {
    jest.spyOn(cityRepository, 'findOne').mockRejectedValueOnce(new Error());
    expect(service.findCityById(CityEntityMock.id)).rejects.toThrowError();
  });

  it('should be return a list of cities', async () => {
    const states = await service.getAll();

    expect(states).toEqual([CityEntityMock]);
  });

  //   it('should be return exception on list all cities ', async () => {
  //     jest.spyOn(cityRepository, 'getCache').mockRejectedValueOnce(new Error());
  //     expect(
  //       service.getAllCitiesByStateId(CityEntityMock.stateId),
  //     ).rejects.toThrowError();
  //   });

  it('should be return a list of cities from cache', async () => {
    const states = await service.getAllCitiesByStateId(CityEntityMock.stateId);

    expect(states).toEqual([CityEntityMock]);
  });
});
