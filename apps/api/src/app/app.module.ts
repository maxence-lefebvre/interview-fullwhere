import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RootDatasourceModule } from '@fullwhere/kernel/data-access/datasource';
import { RootGraphQLModule } from '@fullwhere/kernel/graphql';

import { appConfig } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forFeature(appConfig),
    RootDatasourceModule,
    RootGraphQLModule,
  ],
})
export class AppModule {}
