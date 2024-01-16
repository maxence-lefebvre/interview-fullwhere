import { Module } from '@nestjs/common';

import { SeedCommandModule } from '@fullwhere/commands/seed';
import { RootDatasourceModule } from '@fullwhere/kernel/data-access/datasource';

@Module({
  imports: [RootDatasourceModule, SeedCommandModule],
  providers: [],
})
export class CliModule {}
