import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Foo')
export class FooResolver {
  @Query(() => String)
  foo(): string {
    return 'foo';
  }
}
