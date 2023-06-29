import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';
export declare class StateController {
    private readonly stateService;
    constructor(stateService: StateService);
    getAllStates(): Promise<StateEntity[]>;
}
