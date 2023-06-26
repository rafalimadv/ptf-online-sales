import { ReturnCityDto } from 'src/city/dtos/returnCity.dto';
import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  numberAddress: number;
  cep: string;
  city?: ReturnCityDto;

  constructor(addres: AddressEntity) {
    this.complement = addres.complement;
    this.numberAddress = addres.numberAddress;
    this.cep = addres.cep;
    this.city = addres.city ? new ReturnCityDto(addres.city) : undefined;
  }
}
