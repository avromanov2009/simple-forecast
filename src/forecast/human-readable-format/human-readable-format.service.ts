import { Injectable } from '@nestjs/common';
import { ForecastData } from '../interfaces/forecast-data.interface';
import { HumanReadableWeather } from '../interfaces/human-readable-weather';

@Injectable()
export class HumanReadableFormatService {
  private predictions: string[] = [];
  private getUtcUnixTime(): number {
    const now = new Date();
    return Date.UTC(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
    );
  }

  getNearHourForecast(
    forecast: ForecastData,
    units = 'metric',
  ): HumanReadableWeather {
    const { feels_like } = forecast.list[0].main;
    const { description } = forecast.list[0].weather[0];
    this.predictions.push(
      `Погода в городе ${forecast.city.name} на ближайший час`,
    );
    this.predictions.push(`Сейчас ${description}`);
    if (feels_like < 10 && feels_like > 0) {
      this.predictions.push(
        'Нужно одеться по осеннему. Взять шапку и перчатки',
      );
    } else if (feels_like >= 10 && feels_like < 16) {
      this.predictions.push('Нужно одеться по осеннему, без шапки и перчаток');
    } else if (feels_like >= 16 && feels_like <= 24) {
      this.predictions.push(
        'Вполне летняя погодка, майка и шорты - лучший выбор',
      );
    } else if (feels_like > 24) {
      this.predictions.push('Бегом на пляж или сиди дома с кондиционером');
    } else if (feels_like < 0) {
      this.predictions.push('Бегом одеваться потеплее. Зимняя шапка, куртка');
    }
    const unit =
      units === 'metric'
        ? 'Celsius'
        : units === 'imperial'
        ? 'Fahrenheit'
        : 'Kelvin';
    this.predictions.push(`По ощущениям на улице ${feels_like} ${unit}`);
    return {
      title: `Weather forecast`,
      message: this.predictions.join('. ').trim(),
      icon: forecast.list[0].weather[0].icon,
    };
  }
}
