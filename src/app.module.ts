import { Module } from '@nestjs/common';
import { SquareMeterModule } from './square-meter/square-meter.module';

@Module({
	imports: [SquareMeterModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
