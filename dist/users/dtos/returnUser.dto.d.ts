import { ReturnAddressDto } from 'src/address/dto/returnAddress.dto';
import { UserEntity } from '../entities/user.entity';
export declare class ReturnUserDto {
    id: number;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    address?: ReturnAddressDto[];
    constructor(userEntity: UserEntity);
}
