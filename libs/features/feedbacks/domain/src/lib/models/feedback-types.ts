import { registerEnumType } from '@nestjs/graphql';

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

registerEnumType(FeedbackProvider, {
  name: 'FeedbackProvider',
});

registerEnumType(FeedbackStatus, {
  name: 'FeedbackStatus',
});
