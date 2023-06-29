import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    findUserById(userId: number): Promise<UserEntity>;
    findUserByEmail(userEmail: string): Promise<UserEntity>;
    getUserByIdUsingRelations(userId: number): Promise<UserEntity>;
}
