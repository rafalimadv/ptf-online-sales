import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const UserEntityMock: UserEntity = {
  cpf: '01234567890',
  createdAt: new Date(),
  email: 'teste@unitario.com',
  id: 1234,
  name: 'Testenelson Unitario',
  password: '$2b$10$gIcoMZ/y2luKXaXJBKP69OYBBlhAcmMSW3ZuYI8t1It4QVG27f2VC', // 123senha4
  phone: '46999009999',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
