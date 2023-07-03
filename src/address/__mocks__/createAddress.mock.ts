import { CityEntityMock } from '../../city/__mocks__/city.mock';
import { CreateAddressDto } from '../dto/createAddress.dto';
import { AddressEntityMock } from './address.mock';

export const createAddressMock: CreateAddressDto = {
  cep: AddressEntityMock.complement,
  cityId: CityEntityMock.id,
  complement: AddressEntityMock.complement,
  numberAddress: AddressEntityMock.numberAddress,
};
