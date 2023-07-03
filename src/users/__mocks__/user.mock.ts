import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const UserEntityMock: UserEntity = {
  cpf: '01234567890',
  createdAt: new Date(),
  email: 'teste@unitario.com',
  id: 1234,
  name: 'Testenelson Unitario',
  password: 'senhaunitario',
  phone: '46999009999',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
