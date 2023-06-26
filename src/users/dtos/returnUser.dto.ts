import { ReturnAddressDto } from 'src/address/dto/returnAddress.dto';
import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;

  address?: ReturnAddressDto[];

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.cpf = userEntity.cpf;
    this.phone = userEntity.phone;

    this.address = userEntity.address
      ? userEntity.address.map((address) => new ReturnAddressDto(address))
      : undefined;
  }
}
