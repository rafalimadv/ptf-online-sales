import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

import { StateEntity } from '../entities/state.entity';
import { StateService } from '../state.service';
import { StateEntityMock } from '../__mocks__/state.mock';

describe('StateService', () => {
  let service: StateService;
  let stateRepository: Repository<StateEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StateService,
        {
          provide: getRepositoryToken(StateEntity),
          useValue: {
            find: jest.fn().mockResolvedValue([StateEntityMock]),
          },
        },
      ],
    }).compile();

    service = module.get<StateService>(StateService);
    stateRepository = module.get<Repository<StateEntity>>(
      getRepositoryToken(StateEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(stateRepository).toBeDefined();
  });

  it('should be return a list of states', async () => {
    const states = await service.getAll();

    expect(states).toEqual([StateEntityMock]);
  });

  it('should be return exception on list all states ', async () => {
    jest.spyOn(stateRepository, 'find').mockRejectedValueOnce(new Error());
    expect(service.getAll()).rejects.toThrowError();
  });
});
