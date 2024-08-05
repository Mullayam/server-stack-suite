import { Test, TestingModule } from '@nestjs/testing';
import { ServerTypesController } from './server-types.controller';
import { ServerTypesService } from './server-types.service';

describe('ServerTypesController', () => {
  let controller: ServerTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerTypesController],
      providers: [ServerTypesService],
    }).compile();

    controller = module.get<ServerTypesController>(ServerTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
