import { ConfigType, registerAs } from '@nestjs/config';
import * as env from 'env-var';

export const appConfig = registerAs('app', () => ({
  port: env.get('PORT').default('3000').asPortNumber(),
}));

export type AppConfig = ConfigType<typeof appConfig>;
