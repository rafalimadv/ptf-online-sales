import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passwoedhash = await hash(createUserDto.password, saltOrRounds);

    const user = {
      ...createUserDto,
      password: passwoedhash,
      id: 1234,
    };

    // this.users.push(user);
    return user;
  }

  async getAllUsers() {
    return [];
  }
}
