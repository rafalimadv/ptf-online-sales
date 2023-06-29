import { CityEntity } from 'src/city/entities/city.entity';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class AddressEntity {
    id: number;
    userId: number;
    complement: string;
    numberAddress: number;
    cep: string;
    cityId: number;
    createdAt: Date;
    updatedAt: Date;
    user?: UserEntity;
    city?: CityEntity;
}
