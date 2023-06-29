import { AddressEntity } from 'src/address/entities/address.entity';
import { StateEntity } from 'src/state/entities/state.entity';
export declare class CityEntity {
    id: number;
    stateId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    address?: AddressEntity[];
    state?: StateEntity;
}
