import { Injectable, HttpService } from '@nestjs/common';
import { CalcDto } from './dto/calc.dto';

const api1Host = process.env.API1_HOST;
@Injectable()
export class SquareMeterService {
	constructor(private httpService: HttpService) {}
	async getSquareMeterPrice(): Promise<number> {
		const request = await this.httpService
			.get<number>(`${api1Host}/delivery/meter-price`)
			.toPromise();
		return request.data;
	}

	async calcSquareMeters(data: CalcDto): Promise<number> {
		const price = await this.getSquareMeterPrice();
		return data.meters * price;
	}
}
