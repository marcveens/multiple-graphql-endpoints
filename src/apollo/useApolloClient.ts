import { ApolloClient, ApolloClientOptions, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { ApolloClientTypes } from './ApolloClientTypes';

const apolloClient: ApolloClientOptions<NormalizedCacheObject> = {
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      errorPolicy: 'all'
    },
    watchQuery: {
      errorPolicy: 'all'
    }
  }
};

const spacexApolloClient = new ApolloClient(apolloClient);
const countriesApolloClient = new ApolloClient(apolloClient);

export const useApolloClient = () => {
  return {
    getClient: (type: ApolloClientTypes) => {
      spacexApolloClient.setLink(new HttpLink({ uri: 'https://spacex-production.up.railway.app/' }));
      countriesApolloClient.setLink(new HttpLink({ uri: 'https://countries.trevorblades.com/graphql' }));

      const apolloClient = type === 'spacex' ? spacexApolloClient : countriesApolloClient;

      return apolloClient;
    }
  };
};
