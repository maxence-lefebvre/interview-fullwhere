import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeedbackEntity } from './entities/feedback.entity';
import { FeedbackRepository } from './repositories/feedback.repository';

export { FeedbackRepository };

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackEntity])],
  providers: [FeedbackRepository],
  exports: [FeedbackRepository],
})
export class FeedbackDataModule {}
