import { Controller, Get, Param, Query } from '@nestjs/common';
import { ForecastService } from './forecast.service';
import { HumanReadableFormatService } from './human-readable-format/human-readable-format.service';
import { ForecastLang } from './interfaces/forecast-lang';
import { HumanReadableWeather } from './interfaces/human-readable-weather';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('forecast')
@Controller('forecast')
export class ForecastController {
  constructor(
    private readonly forecastService: ForecastService,
    private readonly humanReadableForecast: HumanReadableFormatService,
  ) {}

  @Get(':city')
  @ApiParam({
    name: 'city',
    required: true,
    description: 'Here should be city. Like, New York',
    example: 'Minsk',
    examples: {
      Minsk: {
        value: 'Minsk',
      },
      'New York': {
        value: 'New York',
      },
    },
  })
  @ApiQuery({
    required: false,
    name: 'lang',
    examples: {
      empty: {},
      ru: {
        value: 'ru',
      },
      es: {
        value: 'es',
      },
      en: {
        value: 'en',
      },
    },
    description: 'Language for some text fields',
  })
  @ApiQuery({
    name: 'units',
    required: false,
    description:
      'Should be one of metric|imperial|standard. By default: standart (Kelvin)',
    example: 'metric',
    examples: {
      empty: {},
      Fahrenheit: {
        value: 'imperial',
      },
      Celsius: {
        value: 'metric',
      },
      Kelvin: {
        value: 'standard',
      },
    },
  })
  @ApiResponse({
    type: HumanReadableWeather,
  })
  async getWeather(
    @Param('city') city: string,
    @Query('lang') lang?: ForecastLang,
    @Query('units') units?: string,
  ): Promise<HumanReadableWeather> {
    this.forecastService.withCity(city).withLang(lang).withUnits(units);
    const forecast = await this.forecastService.getForecast();
    return this.humanReadableForecast.getNearHourForecast(forecast, units);
  }
}
