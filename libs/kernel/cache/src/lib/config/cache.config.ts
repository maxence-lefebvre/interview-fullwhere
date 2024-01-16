import { ConfigType, registerAs } from '@nestjs/config';
import * as env from 'env-var';

export const cacheConfig = registerAs('cache', () => ({
  host: env.get('APP_REDIS_HOST').required().asString(),
  port: env.get('APP_REDIS_PORT').required().asPortNumber(),

  ttl: 5000,
}));

export type CacheConfig = ConfigType<typeof cacheConfig>;
