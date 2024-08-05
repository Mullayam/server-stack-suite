import { Test, TestingModule } from '@nestjs/testing';
import { ServerTypesService } from './server-types.service';

describe('ServerTypesService', () => {
  let service: ServerTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerTypesService],
    }).compile();

    service = module.get<ServerTypesService>(ServerTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
