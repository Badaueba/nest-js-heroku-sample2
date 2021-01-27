import {
	Controller,
	Get,
	Body,
	Post,
	UsePipes,
	ValidationPipe,
	BadRequestException,
} from '@nestjs/common';
import {
	ApiTags,
	ApiOperation,
	ApiResponse,
	ApiOkResponse,
	ApiBadGatewayResponse,
	ApiBadRequestResponse,
} from '@nestjs/swagger';
import { SquareMeterService } from './square-meter.service';
import { CalcDto } from './dto/calc.dto';
import { Price } from './interfaces/price.interface';

@ApiTags('Square Meter')
@Controller('square-meter')
export class SquareMeterController {
	constructor(private squareService: SquareMeterService) {}

	@ApiOperation({
		summary: 'Calculates square meters',
		description: 'Calculate total price for passed square meters',
	})
	@ApiOkResponse({
		status: 200,
		description: 'total price = (price per meter²) * meters',
		type: Price,
	})
	@ApiBadRequestResponse({
		status: 400,
		type: BadRequestException,
	})
	@UsePipes(new ValidationPipe({ transform: true }))
	@Post('calc')
	calcSquareMeters(@Body() data: CalcDto): Promise<Price> {
		return this.squareService.calcSquareMeters(data);
	}

	@ApiOperation({
		summary: 'base price',
		description: 'consult base api  to get price per single square meters',
	})
	@ApiResponse({
		status: 200,
		type: Number,
		description: 'return the value price for single square meter',
	})
	@Get('/consult')
	getSquareMeterPrice(): Promise<number> {
		return this.squareService.getSquareMeterPrice();
	}
}
