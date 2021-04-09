import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForecastModule } from './forecast/forecast.module';
import { ForecastHttpService } from './forecast-http/forecast-http.service';

const environment =
  process.env.NODE_ENV !== 'production' ? 'development' : 'production';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    ForecastModule,
  ],
  controllers: [],
  providers: [ForecastHttpService],
})
export class AppModule {}
