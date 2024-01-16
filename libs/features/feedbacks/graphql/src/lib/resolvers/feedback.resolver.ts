import { Query, Resolver } from '@nestjs/graphql';

import { FeedbackRepository } from '@fullwhere/features/feedbacks/data-access';
import { FeedbackModel } from '@fullwhere/features/feedbacks/domain';

@Resolver(() => FeedbackModel)
export class FeedbackResolver {
  public constructor(private readonly feedbackRepository: FeedbackRepository) {}

  @Query(() => [FeedbackModel])
  list(): Promise<FeedbackModel[]> {
    return this.feedbackRepository.find();
  }
}
