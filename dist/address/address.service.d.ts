import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/createAddress.dto';
import { UsersService } from 'src/users/users.service';
import { CityService } from 'src/city/city.service';
export declare class AddressService {
    private readonly addressRepository;
    private readonly userService;
    private readonly cityService;
    constructor(addressRepository: Repository<AddressEntity>, userService: UsersService, cityService: CityService);
    createAddress(createAddress: CreateAddressDto, userId: number): Promise<AddressEntity>;
}
