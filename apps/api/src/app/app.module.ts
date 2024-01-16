import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { FeedbackGraphQLModule } from '@fullwhere/features/feedbacks/graphql';
import { RootDatasourceModule } from '@fullwhere/kernel/data-access/datasource';
import { RootGraphQLModule } from '@fullwhere/kernel/graphql';

import { appConfig } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forFeature(appConfig),
    RootDatasourceModule,
    RootGraphQLModule,
    FeedbackGraphQLModule,
  ],
})
export class AppModule {}
