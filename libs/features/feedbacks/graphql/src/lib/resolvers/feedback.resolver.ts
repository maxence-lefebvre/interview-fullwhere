import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Foo')
export class FeedbackResolver {
  @Query(() => String)
  foo(): string {
    return 'foo';
  }
}
