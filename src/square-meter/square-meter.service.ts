import { Injectable, HttpService } from '@nestjs/common';

const api1Host = process.env.API1_HOST;
@Injectable()
export class SquareMeterService {
	constructor(private httpService: HttpService) {}
	private async getSquareMeterPrice(): Promise<number> {
		const request = await this.httpService
			.get<number>(`${api1Host}/delivery/meter-price`)
			.toPromise();
		return request.data;
	}

	async calcSquareMeters(data: { meters: number }) {
		return this.getSquareMeterPrice();
	}
}
