import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { AddressService } from '../address.service';
import { AddressEntity } from '../entities/address.entity';
import { AddressEntityMock } from '../__mocks__/address.mock';
import { UsersService } from '../../users/users.service';
import { UserEntityMock } from '../../users/__mocks__/user.mock';
import { CityService } from '../../city/city.service';
import { CityEntityMock } from '../../city/__mocks__/city.mock';
import { createAddressMock } from '../__mocks__/createAddress.mock';

describe('AddressService', () => {
  let service: AddressService;
  let userService: UsersService;
  let cityService: CityService;

  let AddressRepository: Repository<AddressEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressService,
        {
          provide: UsersService,
          useValue: {
            findUserById: jest.fn().mockResolvedValue(UserEntityMock),
          },
        },
        {
          provide: CityService,
          useValue: {
            findCityById: jest.fn().mockResolvedValue(CityEntityMock),
          },
        },
        {
          provide: getRepositoryToken(AddressEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(AddressEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<AddressService>(AddressService);
    userService = module.get<UsersService>(UsersService);
    cityService = module.get<CityService>(CityService);
    AddressRepository = module.get<Repository<AddressEntity>>(
      getRepositoryToken(AddressEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(AddressRepository).toBeDefined();
    expect(userService).toBeDefined();
    expect(cityService).toBeDefined();
  });

  it('should be return address after save', async () => {
    const address = await service.createAddress(
      createAddressMock,
      UserEntityMock.id,
    );

    expect(address).toEqual(AddressEntityMock);
  });

  it('should be return error if exception on user service', async () => {
    jest.spyOn(userService, 'findUserById').mockRejectedValueOnce(new Error());
    expect(
      service.createAddress(createAddressMock, UserEntityMock.id),
    ).rejects.toThrowError();
  });

  it('should be return error if exception on city service', async () => {
    jest.spyOn(cityService, 'findCityById').mockRejectedValueOnce(new Error());
    expect(
      service.createAddress(createAddressMock, UserEntityMock.id),
    ).rejects.toThrowError();
  });
});
