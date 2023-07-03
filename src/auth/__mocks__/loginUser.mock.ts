import { UserEntityMock } from '../../users/__mocks__/user.mock';
import { LoginDto } from '../dtos/login.dto';

export const LoginUserMock: LoginDto = {
  email: UserEntityMock.email,
  password: '123senha4',
};
