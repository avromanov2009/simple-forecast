import { ApiProperty } from '@nestjs/swagger';

export class HumanReadableWeather {
  @ApiProperty()
  title: string;
  @ApiProperty()
  message: string;
  @ApiProperty()
  icon: string;
}
