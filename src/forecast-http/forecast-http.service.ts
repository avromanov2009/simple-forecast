import {
  HttpModuleOptions,
  HttpModuleOptionsFactory,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class ForecastHttpService implements HttpModuleOptionsFactory {
  createHttpOptions(): Promise<HttpModuleOptions> | HttpModuleOptions {
    return {
      timeout: 5000,
      baseURL: `https://api.openweathermap.org/data/2.5/forecast`,
      params: {
        appid: process.env.OPENWEATHER_KEY,
      },
    };
  }
}
