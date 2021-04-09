import { HttpModule, Module } from '@nestjs/common';
import { ForecastService } from './forecast.service';
import { ForecastController } from './forecast.controller';
import { ForecastHttpService } from '../forecast-http/forecast-http.service';
import { HumanReadableFormatService } from './human-readable-format/human-readable-format.service';

@Module({
  imports: [HttpModule.registerAsync({ useClass: ForecastHttpService })],
  providers: [ForecastService, HumanReadableFormatService],
  controllers: [ForecastController],
})
export class ForecastModule {}
