import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNumber } from 'class-validator';

export class GetWeatherRequestDto {
  @ApiProperty()
  @IsDecimal()
  lat: number;

  @ApiProperty()
  @IsDecimal()
  lon: number;
}
