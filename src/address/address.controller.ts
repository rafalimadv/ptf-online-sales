import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAddressDto } from './dto/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../users/enum/user-type.enum';
import { UserId } from '../decorators/user-id.decorator';
import { ReturnAddressDto } from './dto/returnAddress.dto';

@Roles(UserType.User, UserType.Admin)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Roles(UserType.User)
  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddress: CreateAddressDto,
    @UserId() userId: number,
  ): Promise<ReturnAddressDto> {
    return new ReturnAddressDto(
      await this.addressService.createAddress(createAddress, userId),
    );
  }

  @Roles(UserType.User)
  @Get()
  async findAddressByUserId(
    @UserId() userId: number,
  ): Promise<ReturnAddressDto[]> {
    return (await this.addressService.findAddressByUserId(userId)).map(
      (address) => new ReturnAddressDto(address),
    );
  }
}
