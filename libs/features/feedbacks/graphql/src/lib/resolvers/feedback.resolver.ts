import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import {
  Between,
  FindOptionsWhere,
  LessThanOrEqual,
  MoreThanOrEqual,
} from 'typeorm';

import { FeedbackRepository } from '@fullwhere/features/feedbacks/data-access';
import {
  FeedbackModel,
  FeedbackProvider,
  FeedbackStatus,
} from '@fullwhere/features/feedbacks/domain';

@Resolver(() => FeedbackModel)
export class FeedbackResolver {
  public constructor(private readonly feedbackRepository: FeedbackRepository) {}

  @Query(() => [FeedbackModel], { name: 'feedbacks' })
  feedbacks(
    @Args('status', { nullable: true, type: () => FeedbackStatus })
    status: FeedbackStatus | null = null,
    @Args('provider', { nullable: true, type: () => FeedbackProvider })
    provider: FeedbackProvider | null = null,
    @Args('minNote', { nullable: true, type: () => Int })
    minNote: number | null = null,
    @Args('createdAfter', { nullable: true })
    createdAfter: Date | null = null,
    @Args('createdBefore', { nullable: true })
    createdBefore: Date | null = null,
  ): Promise<FeedbackModel[]> {
    return this.feedbackRepository.find({
      where: {
        ...(status && { status }),
        ...(provider && { provider }),
        ...(minNote && { note: MoreThanOrEqual(minNote) }),
        ...(createdAfter && { createdAt: MoreThanOrEqual(createdAfter) }),
        ...(createdBefore && { createdAt: LessThanOrEqual(createdBefore) }),
        ...(createdAfter &&
          createdBefore && { createdAt: Between(createdAfter, createdBefore) }),
      } satisfies FindOptionsWhere<FeedbackModel>,
    });
  }
}
