import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const valueCahe: T = await this.cacheManager.get(key);

    if (valueCahe) {
      return valueCahe;
    }

    const value: T = await functionRequest();

    await this.cacheManager.set(key, value);

    return value;
  }
}