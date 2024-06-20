import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WeatherData } from '../types/weather-data';

@Entity()
@Index(['lat', 'lon'], { unique: true })
export class Weather extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', nullable: false })
  lat: number;

  @Column({ type: 'decimal', nullable: false })
  lon: number;

  @Column('json')
  data: WeatherData;
}
