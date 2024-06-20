import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WeatherData } from '../types/weather-data';

@Entity()
export class Weather extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  data: WeatherData;
}
