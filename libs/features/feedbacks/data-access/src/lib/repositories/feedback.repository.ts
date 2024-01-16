import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FeedbackModel } from '@fullwhere/features/feedbacks/domain';

@Injectable()
export class FeedbackRepository {
  private readonly logger = new Logger(FeedbackRepository.name);

  public constructor(
    @InjectRepository(FeedbackModel)
    private readonly feedbackRepository: Repository<FeedbackModel>,
  ) {}

  find(
    ...args: Parameters<Repository<FeedbackModel>['find']>
  ): Promise<FeedbackModel[]> {
    return this.feedbackRepository.find(...args);
  }
}
