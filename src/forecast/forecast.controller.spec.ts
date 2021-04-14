import { Test, TestingModule } from '@nestjs/testing';
import { ForecastController } from './forecast.controller';
import { HumanReadableFormatService } from './human-readable-format/human-readable-format.service';
import { ForecastService } from './forecast.service';
import { HttpModule } from '@nestjs/common';
import { ForecastHttpService } from '../forecast-http/forecast-http.service';

describe('ForecastController', () => {
  let controller: ForecastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule.registerAsync({ useClass: ForecastHttpService })],
      providers: [ForecastService, HumanReadableFormatService],
      controllers: [ForecastController],
    }).compile();

    controller = module.get<ForecastController>(ForecastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
