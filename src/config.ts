import { IsDefined, IsString, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';

class AppConfiguration {
  @IsString()
  @IsDefined()
  public readonly ONE_CLICK_API_KEY: string =
    'e0e862e4ffc7b338e59563b1589f83f5';
}

export function validate(config: Record<string, unknown>) {
  const configuration = plainToInstance(AppConfiguration, config);
  const errors = validateSync(configuration);

  if (errors.length) {
    throw new Error(errors.toString());
  }

  return configuration;
}
