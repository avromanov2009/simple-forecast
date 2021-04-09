import { DataTimeForecast } from './data-time-forecast.interface';

export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: DataTimeForecast[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}
