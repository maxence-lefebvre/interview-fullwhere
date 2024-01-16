import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces/apollo-driver-config.interface';
import { ConfigType, registerAs } from '@nestjs/config';

export const graphqlConfig = registerAs(
  'graphql',
  () =>
    ({
      playground: true,
      autoSchemaFile: true,
      sortSchema: true,
      introspection: true,
    }) satisfies ApolloDriverConfig,
);

export type GraphqlConfig = ConfigType<typeof graphqlConfig>;
