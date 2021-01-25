import { Controller, Get, Body, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SquareMeterService } from './square-meter.service';

@ApiTags('Square Meter')
@Controller('square-meter')
export class SquareMeterController {
	constructor(private squareService: SquareMeterService) {}

	@Post('calc')
	calcSquareMeters(@Body() data) {
		return this.squareService.calcSquareMeters(data);
	}
}
