import { StateEntityMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const CityEntityMock: CityEntity = {
  createdAt: new Date(),
  updatedAt: new Date(),
  id: 1234,
  name: 'City test',
  stateId: StateEntityMock.id,
};
