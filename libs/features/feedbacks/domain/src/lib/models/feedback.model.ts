import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { FeedbackProvider, FeedbackStatus } from './feedback-types';

@ObjectType('feedback')
@Entity({ name: 'feedbacks' })
export class FeedbackModel {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => FeedbackProvider)
  @Column({ type: 'enum', enum: FeedbackProvider })
  provider: FeedbackProvider;

  @Field(() => FeedbackStatus)
  @Column({ type: 'enum', enum: FeedbackStatus })
  status: FeedbackStatus;

  @Field(() => Int)
  @Column({ type: 'int' })
  note: number;

  @Field(() => String)
  @Column({ type: 'text' })
  content: string;
}
