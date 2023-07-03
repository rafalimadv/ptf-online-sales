import { Injectable } from '@nestjs/common';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from './dto/createAddress.dto';
import { UsersService } from '../users/users.service';
import { CityService } from '../city/city.service';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UsersService,
    private readonly cityService: CityService,
  ) {}

  async createAddress(
    createAddress: CreateAddressDto,
    userId: number,
  ): Promise<AddressEntity> {
    await this.userService.findUserById(userId);
    await this.cityService.findCityById(createAddress.cityId);

    return await this.addressRepository.save({
      ...createAddress,
      userId,
    });
  }
}
