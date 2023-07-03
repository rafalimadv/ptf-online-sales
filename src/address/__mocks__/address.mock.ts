import { CityEntityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { UserEntityMock } from '../../users/__mocks__/user.mock';

export const AddressEntityMock: AddressEntity = {
  id: 1223,
  cep: '88559000',
  createdAt: new Date(),
  updatedAt: new Date(),
  cityId: CityEntityMock.id,
  complement: 'test complement address',
  numberAddress: 1234,
  userId: UserEntityMock.id,
};
