import { ApiProperty } from '@nestjs/swagger';

export class Price {
	@ApiProperty()
	readonly pricePerMeter: number;
	@ApiProperty()
	readonly priceToPay: number;
}
