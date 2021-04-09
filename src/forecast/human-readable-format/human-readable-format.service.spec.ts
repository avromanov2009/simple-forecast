import { Test, TestingModule } from '@nestjs/testing';
import { HumanReadableFormatService } from './human-readable-format.service';

describe('HumanReadableFormatService', () => {
  let service: HumanReadableFormatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HumanReadableFormatService],
    }).compile();

    service = module.get<HumanReadableFormatService>(HumanReadableFormatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
