import { ApiProperty } from '@nestjs/swagger';

export class HumanReadableWeather {
  @ApiProperty({
    description: 'Title for weather widget',
    required: true,
    type: 'string',
  })
  title: string;
  @ApiProperty({
    description: 'Message for user',
    required: true,
  })
  message: string;
  @ApiProperty({
    description: 'Image for widget',
    required: true,
  })
  icon: string;
}
