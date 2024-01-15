import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FeedbackEntity } from '../entities/feedback.entity';

@Injectable()
export class FeedbackRepository {
  private readonly logger = new Logger(FeedbackRepository.name);

  public constructor(
    @InjectRepository(FeedbackEntity)
    private readonly feedbackRepository: Repository<FeedbackEntity>,
  ) {}
}
