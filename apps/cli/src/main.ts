import { ConsoleLogger } from '@nestjs/common';
import { CommandFactory } from 'nest-commander';

import { CliModule } from './app/cli.module';

async function bootstrap() {
  await CommandFactory.run(CliModule, new ConsoleLogger());
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
