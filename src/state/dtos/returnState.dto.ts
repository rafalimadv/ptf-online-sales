import { StateEntity } from '../entities/state.entity';

export class RetrunStateDto {
  name: string;

  constructor(state: StateEntity) {
    this.name = state.name;
  }
}
