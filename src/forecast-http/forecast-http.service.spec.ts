import { Test, TestingModule } from '@nestjs/testing';
import { ForecastHttpService } from './forecast-http.service';

describe('ForecastHttpService', () => {
  let service: ForecastHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForecastHttpService],
    }).compile();

    service = module.get<ForecastHttpService>(ForecastHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
