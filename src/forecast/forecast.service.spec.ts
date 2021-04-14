import { Test, TestingModule } from '@nestjs/testing';
import { ForecastService } from './forecast.service';
import { HumanReadableFormatService } from './human-readable-format/human-readable-format.service';
import { HttpModule } from '@nestjs/common';
import { ForecastHttpService } from '../forecast-http/forecast-http.service';
import { ForecastData } from './interfaces/forecast-data.interface';

describe('ForecastService', () => {
  let service: ForecastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule.registerAsync({ useClass: ForecastHttpService })],
      providers: [ForecastService, HumanReadableFormatService],
    }).compile();

    service = await module.resolve<ForecastService>(ForecastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be...', () => {
    jest.spyOn(service, 'getForecast').mockImplementation(
      (): Promise<ForecastData> =>
        Promise.resolve({
          list: [],
          cnt: 1,
          cod: '',
          message: 1,
          city: {
            id: 1,
            name: '',
            country: '',
            coord: {
              lat: 1,
              lon: 1,
            },
            population: 1,
            sunrise: 1,
            sunset: 2,
            timezone: 1,
          },
        }),
    );
  });
});
