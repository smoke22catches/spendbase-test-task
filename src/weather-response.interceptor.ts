import { Injectable, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { CurrentWeatherData, WeatherData } from './types/weather-data';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class WeatherResponseInterceptor implements NestInterceptor {
  intercept(context, next) {
    return next.handle().pipe(
      map((data: WeatherData) => {
        const { current } = data;
        return plainToInstance(CurrentWeatherData, current, {
          strategy: 'excludeAll',
        });
      }),
    );
  }
}
