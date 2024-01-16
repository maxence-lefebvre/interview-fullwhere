import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Logger } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import { FindOptionsWhere, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

import { FeedbackRepository } from '@fullwhere/features/feedbacks/data-access';
import {
  FeedbackModel,
  FeedbackProvider,
  FeedbackStatus,
} from '@fullwhere/features/feedbacks/domain';

@Resolver(() => FeedbackModel)
export class FeedbackResolver {
  private readonly logger = new Logger(FeedbackResolver.name);

  public constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly feedbackRepository: FeedbackRepository,
  ) {}

  @Query(() => [FeedbackModel], { name: 'feedbacks' })
  async feedbacks(
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
    const cacheKey = JSON.stringify({
      status,
      provider,
      minNote,
      createdAfter,
      createdBefore,
    });

    const cachedFeedbacks =
      await this.cacheManager.get<FeedbackModel[]>(cacheKey);

    if (cachedFeedbacks) {
      this.logger.debug(`Cache hit for ${cacheKey}`);
      return cachedFeedbacks;
    }

    const feedbacks = await this.feedbackRepository.find({
      where: {
        ...(status && { status }),
        ...(provider && { provider }),
        ...(minNote && { note: MoreThanOrEqual(minNote) }),
        ...(createdAfter && { createdAt: MoreThanOrEqual(createdAfter) }),
        ...(createdBefore && { createdAt: LessThanOrEqual(createdBefore) }),
      } satisfies FindOptionsWhere<FeedbackModel>,
    });

    await this.cacheManager.set(cacheKey, feedbacks);

    return feedbacks;
  }
}
