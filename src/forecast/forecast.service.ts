import { HttpException, HttpService, Injectable, Scope } from '@nestjs/common';
import { ForecastData } from './interfaces/forecast-data.interface';
import { AxiosResponse } from 'axios';

@Injectable({ scope: Scope.REQUEST })
export class ForecastService {
  private query: Record<string, string> = {};
  constructor(private readonly httpService: HttpService) {}
  withCity(city: string): ForecastService {
    Object.assign(this.query, {
      q: city,
    });
    return this;
  }
  withLang(lang: string): ForecastService {
    Object.assign(this.query, {
      lang: lang || 'en',
    });
    return this;
  }
  withUnits(units: string): ForecastService {
    Object.assign(this.query, {
      units: units || 'metric',
    });
    return this;
  }
  async getForecast(): Promise<ForecastData> {
    try {
      const { data } = await this.httpService
        .get(`?${new URLSearchParams(this.query).toString()}`)
        .toPromise<AxiosResponse<ForecastData>>();
      return data;
    } catch (e) {
      throw new HttpException(e.response.data.message, e.response.data.cod);
    }
  }
}
