import { CityEntity } from 'src/city/entities/city.entity';
export declare class StateEntity {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    cities?: CityEntity[];
}
