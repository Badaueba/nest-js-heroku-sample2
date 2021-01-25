import { Test, TestingModule } from '@nestjs/testing';
import { SquareMeterController } from './square-meter.controller';

describe('SquareMeterController', () => {
  let controller: SquareMeterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SquareMeterController],
    }).compile();

    controller = module.get<SquareMeterController>(SquareMeterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
