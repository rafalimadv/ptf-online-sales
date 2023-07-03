import { ReturnUserDto } from '../../users/dtos/returnUser.dto';

export interface ReturnLoginDto {
  user: ReturnUserDto;
  acessToken: string;
}
