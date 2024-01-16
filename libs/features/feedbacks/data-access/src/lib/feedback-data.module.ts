import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeedbackModel } from '@fullwhere/features/feedbacks/domain';

import { FeedbackRepository } from './repositories/feedback.repository';

export { FeedbackRepository };

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackModel])],
  providers: [FeedbackRepository],
  exports: [FeedbackRepository],
})
export class FeedbackDataModule {}
