import { Module, HttpModule } from '@nestjs/common';
import { SquareMeterService } from './square-meter.service';
import { SquareMeterController } from './square-meter.controller';

@Module({
	providers: [SquareMeterService],
	controllers: [SquareMeterController],
	imports: [HttpModule],
})
export class SquareMeterModule {}
