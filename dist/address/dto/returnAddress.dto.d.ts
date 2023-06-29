import { ReturnCityDto } from 'src/city/dtos/returnCity.dto';
import { AddressEntity } from '../entities/address.entity';
export declare class ReturnAddressDto {
    complement: string;
    numberAddress: number;
    cep: string;
    city?: ReturnCityDto;
    constructor(addres: AddressEntity);
}
