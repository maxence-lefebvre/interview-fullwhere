import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { AppConfig, appConfig } from './app/config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { port } = app.get<AppConfig>(appConfig.KEY);

  await app.listen(port);
  Logger.log(`Application is running on: http://localhost:${port}`);
}

bootstrap().catch((error) => {
  Logger.error(error);
  process.exit(1);
});
