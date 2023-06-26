import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  numberAddress: number;
  cep: string;
  city: any;

  constructor(addres: AddressEntity) {
    this.complement = addres.complement;
    this.numberAddress = addres.numberAddress;
    this.cep = addres.cep;
    this.city = addres.cityId;
  }
}
