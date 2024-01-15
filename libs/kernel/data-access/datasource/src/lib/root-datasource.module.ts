import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DbConfig, dbConfig } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(dbConfig)],
      useFactory: (config: DbConfig) => config,
      inject: [dbConfig.KEY],
    }),
  ],
})
export class RootDatasourceModule {}
