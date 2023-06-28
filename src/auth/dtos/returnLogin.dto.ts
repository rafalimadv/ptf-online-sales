import { ReturnUserDto } from 'src/users/dtos/returnUser.dto';

export interface ReturnLoginDto {
  user: ReturnUserDto;
  acessToken: string;
}
