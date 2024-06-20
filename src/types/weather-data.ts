import { Expose } from 'class-transformer';

export class CurrentWeatherData {
  @Expose()
  sunrise: number;

  @Expose()
  sunset: number;

  @Expose()
  temp: number;

  @Expose()
  feels_like: number;

  @Expose()
  pressure: number;

  @Expose()
  humidity: number;

  @Expose()
  uvi: number;

  @Expose()
  wind_speed: number;
}

export interface WeatherData {
  current: CurrentWeatherData;
}
