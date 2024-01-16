import { Module } from '@nestjs/common';

import { FeedbackDataModule } from '@fullwhere/features/feedbacks/data-access';

import { FeedbackResolver } from './resolvers';

@Module({
  imports: [FeedbackDataModule],
  providers: [FeedbackResolver],
})
export class FeedbackGraphQLModule {}
