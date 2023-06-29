import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';
export declare class StateService {
    private readonly stateRepository;
    constructor(stateRepository: Repository<StateEntity>);
    getAll(): Promise<StateEntity[]>;
}
