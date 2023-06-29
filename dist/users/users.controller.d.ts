import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dtos/returnUser.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").UserEntity>;
    getAllUsers(): Promise<ReturnUserDto[]>;
    getUserById(userId: number): Promise<ReturnUserDto>;
}
