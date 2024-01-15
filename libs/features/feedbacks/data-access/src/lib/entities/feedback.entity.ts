import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum FeedbackProvider {
  DELIVEROO = 'deliveroo',
  UBER_EATS = 'uber-eats',
  SALESFORCE = 'salesforce',
  SHOPIFY = 'shopify',
}

export enum FeedbackStatus {
  NEW = 'new',
  WAITING = 'waiting',
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  PINNED = 'pinned',
}

@Entity({ name: 'feedbacks' })
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'enum', enum: FeedbackProvider })
  provider: FeedbackProvider;

  @Column({ type: 'enum', enum: FeedbackStatus })
  status: FeedbackStatus;

  @Column({ type: 'int' })
  note: number;

  @Column({ type: 'text' })
  content: string;
}
