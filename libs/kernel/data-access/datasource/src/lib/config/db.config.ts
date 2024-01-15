import { ConfigType, registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as env from 'env-var';

import { migrations } from './migrations';

export const dbConfig = registerAs(
  'db',
  () =>
    ({
      type: 'postgres',
      host: env.get('APP_DB_HOST').required().asString(),
      port: env.get('APP_DB_PORT').required().asPortNumber(),
      username: env.get('APP_DB_USER').required().asString(),
      password: env.get('APP_DB_PASS').required().asString(),
      database: env.get('APP_DB_NAME').required().asString(),
      schema: env.get('APP_DB_SCHEMA').required().asString(),

      synchronize: env.get('APP_DB_SYNCHRONIZE').default('false').asBool(),

      migrations,
      migrationsRun: env.get('APP_DB_RUN_MIGRATIONS').default('false').asBool(),
      migrationsTransactionMode: 'each',
      migrationsTableName: '__typeorm__migrations',

      metadataTableName: '__typeorm__metadata',

      autoLoadEntities: true,

      cache: env.get('APP_DB_CACHE').default('false').asBool(),

      installExtensions: true,
      applicationName: 'nether',
    }) satisfies TypeOrmModuleOptions,
);

export type DbConfig = ConfigType<typeof dbConfig>;
