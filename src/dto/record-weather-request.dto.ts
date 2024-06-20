import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNumber, IsString } from 'class-validator';

export class RecordWeatherRequestDto {
  @ApiProperty()
  @IsNumber()
  lat: number;

  @ApiProperty()
  @IsNumber()
  lon: number;

  // @ApiProperty({ example: 'current' })
  // @IsString()
  // @IsIn(['current', 'minutely', 'hourly', 'daily', 'alerts'])
  // part: 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts';
}
