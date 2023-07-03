import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntityMock } from '../__mocks__/user.mock';
import { CreateUserMock } from '../__mocks__/createUser.mock';

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(UserEntityMock),
            save: jest.fn().mockResolvedValue(UserEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('should return user in findUserByEmail', async () => {
    const user = await service.findUserByEmail(UserEntityMock.email);

    expect(user).toEqual(UserEntityMock);
  });

  it('should return error in findUserByEmail', async () => {
    //TMP Mock findOne function to return undefined
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);
    expect(
      service.findUserByEmail(UserEntityMock.email),
    ).rejects.toThrowError();
  });

  it('should return DB error in findUserByEmail', async () => {
    //TMP Mock findOne function to return error
    jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error());
    expect(
      service.findUserByEmail(UserEntityMock.email),
    ).rejects.toThrowError();
  });

  it('should return user in findUserById', async () => {
    const user = await service.findUserById(UserEntityMock.id);

    expect(user).toEqual(UserEntityMock);
  });

  it('should return error in findUserById', async () => {
    //TMP Mock findOne function to return undefined
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);
    expect(service.findUserById(UserEntityMock.id)).rejects.toThrowError();
  });

  it('should return DB error in findUserById', async () => {
    //TMP Mock findOne function to return error
    jest.spyOn(userRepository, 'findOne').mockRejectedValueOnce(new Error());
    expect(service.findUserById(UserEntityMock.id)).rejects.toThrowError();
  });

  it('should return user in getUserByIdUsingRelations', async () => {
    const user = await service.getUserByIdUsingRelations(UserEntityMock.id);

    expect(user).toEqual(UserEntityMock);
  });

  it('should return error if user already exists', async () => {
    // findOne will return a mock user, returning error
    expect(service.createUser(CreateUserMock)).rejects.toThrowError();
  });

  it('should return user if user not exists', async () => {
    // Now findOne will not return the user mock
    jest.spyOn(userRepository, 'findOne').mockRejectedValue(undefined);
    const user = await service.createUser(UserEntityMock);

    expect(user).toEqual(UserEntityMock);
  });
});
