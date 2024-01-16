import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';

import { CacheConfig, cacheConfig } from './config/cache.config';

import type { RedisClientOptions } from 'redis';

@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>({
      isGlobal: true,
      imports: [ConfigModule.forFeature(cacheConfig)],
      useFactory: (config: CacheConfig) => ({
        store: redisStore,
        ttl: config.ttl,
        socket: {
          host: config.host,
          port: config.port,
        },
      }),
      inject: [cacheConfig.KEY],
    }),
  ],
})
export class RootCacheModule {}
