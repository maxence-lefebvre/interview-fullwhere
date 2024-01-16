import { faker } from '@faker-js/faker';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Command, CommandRunner } from 'nest-commander';
import { Repository } from 'typeorm';

import {
  FeedbackModel,
  FeedbackProvider,
  FeedbackStatus,
} from '@fullwhere/features/feedbacks/domain';

@Command({ name: 'seed' })
export class SeedCommand extends CommandRunner {
  private readonly logger = new Logger(SeedCommand.name);

  public constructor(
    @InjectRepository(FeedbackModel)
    private readonly feedbackRepository: Repository<FeedbackModel>,
  ) {
    super();
  }

  override async run(): Promise<void> {
    this.logger.log('Seeding feedbacks...');

    const data = Array.from({ length: 100 }, () =>
      this.feedbackRepository.create({
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),

        provider: faker.helpers.enumValue(FeedbackProvider),
        status: faker.helpers.enumValue(FeedbackStatus),

        note: faker.number.int({ min: 1, max: 5 }),

        content: faker.lorem.paragraph(),
      }),
    );

    await this.feedbackRepository.save(data);

    this.logger.log('Feedbacks seeded.');
  }
}
