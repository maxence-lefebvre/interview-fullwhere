import { FeedbackGraphQLModule } from '@fullwhere/features/feedbacks/graphql';
import { RootCacheModule } from '@fullwhere/kernel/cache';
import { RootDatasourceModule } from '@fullwhere/kernel/data-access/datasource';
import { RootGraphQLModule } from '@fullwhere/kernel/graphql';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { appConfig } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forFeature(appConfig),
    RootCacheModule,
    RootDatasourceModule,
    RootGraphQLModule,
    FeedbackGraphQLModule,
  ],
})
export class AppModule {}
