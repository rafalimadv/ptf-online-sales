import { AddressEntity } from 'src/address/entities/address.entity';
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    phone: string;
    typeUser: number;
    createdAt: Date;
    updatedAt: Date;
    address?: AddressEntity[];
}
