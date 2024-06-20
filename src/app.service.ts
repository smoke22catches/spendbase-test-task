import { Injectable, NotFoundException } from '@nestjs/common';
import { RecordWeatherRequestDto } from './dto/record-weather-request.dto';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './entities/weather.entity';
import { GetWeatherRequestDto } from './dto/get-weather-request.dto';
import { GetWeatherResponseDto } from './dto/get-weather-response.dto';

const ONE_CLICK_API = 'https://api.openweathermap.org/data/3.0/onecall';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {}

  async recordWeatherForLocation(body: RecordWeatherRequestDto): Promise<void> {
    const apiKey = this.configService.get<string>('ONE_CLICK_API_KEY');
    const { lat, lon } = body;
    const url = `${ONE_CLICK_API}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    await this.weatherRepository.upsert({ lat, lon, data }, ['lat', 'lon']);
  }

  async getWeatherForLocation(query: GetWeatherRequestDto): Promise<any> {
    const weatherRecord = await this.weatherRepository.findOne({
      where: query,
    });

    if (!weatherRecord) {
      throw new NotFoundException();
    }

    return weatherRecord.data;
  }
}
