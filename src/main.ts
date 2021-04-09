import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Docs')
    .setDescription('This documentation for weather forecast')
    .setVersion('0.0.1')
    .addTag('forecast', 'weather-forecasting')
    .build();
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  const deeplyCustomSwaggerUI: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'My API Docs',
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document, deeplyCustomSwaggerUI);
  await app.listen(3000);
  console.log(`Application running on ${await app.getUrl()}`);
}
bootstrap();
