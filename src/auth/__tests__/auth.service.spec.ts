import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';

import { AuthService } from '../auth.service';
import { UsersService } from '../../users/users.service';
import { UserEntityMock } from '../../users/__mocks__/user.mock';
import { jwtMock } from '../__mocks__/jwt.mock';
import { LoginUserMock } from '../__mocks__/loginUser.mock';
import { ReturnUserDto } from '../../users/dtos/returnUser.dto';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findUserByEmail: jest.fn().mockResolvedValue(UserEntityMock),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: () => jwtMock,
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
    expect(jwtService).toBeDefined();
  });

  it('should be return user if email and password is valid', async () => {
    const user = await service.login(LoginUserMock);

    expect(user).toEqual({
      accessToken: jwtMock,
      user: new ReturnUserDto(UserEntityMock),
    });
  });

  it('should be return error if password is invalid', async () => {
    expect(
      service.login({ ...LoginUserMock, password: 'xxxx' }),
    ).rejects.toThrowError();
  });

  it('should be return error if email not found', async () => {
    jest.spyOn(userService, 'findUserByEmail').mockResolvedValue(undefined);
    expect(service.login(LoginUserMock)).rejects.toThrowError();
  });

  it('should be return error in userService', async () => {
    jest.spyOn(userService, 'findUserByEmail').mockRejectedValue(new Error());
    expect(service.login(LoginUserMock)).rejects.toThrowError();
  });
});
