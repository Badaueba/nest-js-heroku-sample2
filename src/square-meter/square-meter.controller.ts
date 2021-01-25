import {
	Controller,
	Get,
	Body,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SquareMeterService } from './square-meter.service';
import { CalcDto } from './dto/calc.dto';

@ApiTags('Square Meter')
@Controller('square-meter')
export class SquareMeterController {
	constructor(private squareService: SquareMeterService) {}

	@ApiOperation({
		summary: 'Calculates square meters',
		description: 'Calculate total price for passed square meters',
	})
	@ApiResponse({
		status: 200,
		type: Number,
		description: 'total price = (price per meter²) * meters',
	})
	@UsePipes(new ValidationPipe({ transform: true }))
	@Post('calc')
	calcSquareMeters(@Body() data: CalcDto): Promise<number> {
		return this.squareService.calcSquareMeters(data);
	}

	@ApiOperation({
		summary: 'base price',
		description: 'consult base price per single square meters',
	})
	@ApiResponse({
		status: 200,
		type: Number,
		description: 'total price = (price per meter²) * meters',
	})
	@Get('/consult')
	getSquareMeterPrice(): Promise<number> {
		return this.squareService.getSquareMeterPrice();
	}
}
