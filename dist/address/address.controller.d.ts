import { CreateAddressDto } from './dto/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    createAddress(createAddress: CreateAddressDto, userId: number): Promise<AddressEntity>;
}
