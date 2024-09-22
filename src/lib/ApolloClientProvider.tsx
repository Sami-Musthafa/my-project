'use client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { GRAPHQL_URL } from '../constants/global';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const ApolloClientProvider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
