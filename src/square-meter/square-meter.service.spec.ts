import { Test, TestingModule } from '@nestjs/testing';
import { SquareMeterService } from './square-meter.service';

describe('SquareMeterService', () => {
  let service: SquareMeterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SquareMeterService],
    }).compile();

    service = module.get<SquareMeterService>(SquareMeterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
