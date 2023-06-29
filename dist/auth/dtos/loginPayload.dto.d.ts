import { UserEntity } from 'src/users/entities/user.entity';
export declare class LoginPayload {
    id: number;
    typeUser: number;
    constructor(user: UserEntity);
}
