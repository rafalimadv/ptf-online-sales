import { Test, TestingModule } from '@nestjs/testing';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

import { UserEntityMock } from '../../users/__mocks__/user.mock';
import { CacheService } from '../cache.service';

describe('CacheService', () => {
  let service: CacheService;
  let cacheManager: Cache;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CacheService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: jest.fn().mockResolvedValue(UserEntityMock),
            set: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CacheService>(CacheService);
    cacheManager = module.get(CACHE_MANAGER);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return data in cache', async () => {
    const user = await service.getCache('key', () => null);
    expect(user).toEqual(UserEntityMock);
  });

  it('should be no return data in cache and exec the function ', async () => {
    const result = { test: '123' };
    jest.spyOn(cacheManager, 'get').mockResolvedValue(undefined);
    const user = await service.getCache('key', () => Promise.resolve(result));
    expect(user).toEqual(result);
  });
});
