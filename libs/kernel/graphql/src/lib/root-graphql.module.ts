import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { GraphqlConfig, graphqlConfig } from './config/graphql.config';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule.forFeature(graphqlConfig)],
      useFactory: (config: GraphqlConfig) => config,
      inject: [graphqlConfig.KEY],
    }),
  ],
})
export class RootGraphQLModule {}
