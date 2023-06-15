import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const passwoedhash = await hash(createUserDto.password, saltOrRounds);

    const user = {
      ...createUserDto,
      password: passwoedhash,
      id: this.users.length + 1,
    };

    this.users.push(user);
    return user;
  }

  async getAllUsers() {
    return this.users;
  }
}
