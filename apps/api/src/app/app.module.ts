import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RootDatasourceModule } from '@fullwhere/kernel/data-access/datasource';

import { appConfig } from './config/app.config';

@Module({
  imports: [ConfigModule.forFeature(appConfig), RootDatasourceModule],
})
export class AppModule {}
