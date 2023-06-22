import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';
import { ReturnUserDTO } from './dtos/returnUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers(): Promise<ReturnUserDTO[]> {
    return (await this.usersService.getAllUsers()).map(
      (userEntity) => new ReturnUserDTO(userEntity),
    );
  }
}
