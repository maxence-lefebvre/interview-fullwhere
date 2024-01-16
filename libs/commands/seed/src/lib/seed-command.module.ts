import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeedbackModel } from '@fullwhere/features/feedbacks/domain';

import { SeedCommand } from './seed.command';

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackModel])],
  providers: [SeedCommand],
})
export class SeedCommandModule {}
