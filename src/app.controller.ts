import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { RecordWeatherRequestDto } from './dto/record-weather-request.dto';
import { GetWeatherResponseDto } from './dto/get-weather-response.dto';
import { GetWeatherRequestDto } from './dto/get-weather-request.dto';
import { WeatherResponseInterceptor } from './weather-response.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBody({
    type: RecordWeatherRequestDto,
  })
  @ApiCreatedResponse()
  @Post()
  async recordWeatherForLocation(
    @Body() body: RecordWeatherRequestDto,
  ): Promise<void> {
    await this.appService.recordWeatherForLocation(body);
  }

  @ApiOkResponse({
    type: GetWeatherResponseDto,
  })
  @UseInterceptors(WeatherResponseInterceptor)
  @Get()
  async getWeatherForLocation(
    @Query() query: GetWeatherRequestDto,
  ): Promise<GetWeatherResponseDto> {
    return this.appService.getWeatherForLocation(query);
  }
}
