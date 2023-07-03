import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { UserEntity } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
import { ReturnUserDto } from '../users/dtos/returnUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { JwtService } from '@nestjs/jwt';
import { ReturnLoginDto } from './dtos/returnLogin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<ReturnLoginDto> {
    const user: UserEntity = await this.userService
      .findUserByEmail(loginDto?.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException('User invalid!');
    }

    return {
      acessToken: this.jwtService.sign({ ...new LoginPayload(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
