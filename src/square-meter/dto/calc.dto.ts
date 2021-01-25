import { IsNumber, IsInt, Max, Min, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CalcDto {
	@IsNotEmpty({ message: 'The meters should not be empty' })
	@IsNumber({}, { message: 'The meters should be a number' })
	@IsInt({ message: 'The meters should be an integer number' })
	@Min(10, { message: 'The meters should be greater or equal to 10' })
	@Max(10_000, { message: 'The meters should not be greater than 10000' })
	@ApiProperty({
		required: true,
		example: '40',
	})
	meters: number;
}
