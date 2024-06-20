import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';
import { RecordWeatherRequestDto } from './dto/record-weather-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBody({
    type: RecordWeatherRequestDto,
  })
  @Post()
  async recordWeatherForLocation(
    @Body() body: RecordWeatherRequestDto,
  ): Promise<void> {
    await this.appService.recordWeatherForLocation(body);
  }

  @Get()
  async getWeatherForLocation(): Promise<any> {}
}
