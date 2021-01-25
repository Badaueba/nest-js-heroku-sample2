import { Test, TestingModule } from '@nestjs/testing';
import { SquareMeterController } from './square-meter.controller';
import { SquareMeterService } from './square-meter.service';
import { HttpModule, Injectable } from '@nestjs/common';
import { CalcDto } from './dto/calc.dto';

@Injectable()
class MockSquareMeterService {
	getSquareMeterPrice() {
		return 1;
	}

	calcSquareMeters(data: CalcDto) {
		return this.getSquareMeterPrice() * data.meters;
	}
}

describe('SquareMeterController', () => {
	let controller: SquareMeterController;
	let service: MockSquareMeterService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [SquareMeterController],
			providers: [
				{
					provide: SquareMeterService,
					useClass: MockSquareMeterService,
				},
			],
			imports: [HttpModule],
		}).compile();

		controller = module.get<SquareMeterController>(SquareMeterController);
		service = new MockSquareMeterService();
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	it('should be greater than 0', async () => {
		expect(await controller.getSquareMeterPrice()).toBeGreaterThan(0);
	});

	it('should be equal to mock calc', async () => {
		const dto: CalcDto = { meters: 5 };
		const mockCalc = service.calcSquareMeters(dto);
		expect(await controller.calcSquareMeters({ meters: 5 })).toEqual(
			mockCalc,
		);
	});
});
