import {
  ApolloCache,
  DefaultContext,
  MutationHookOptions,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useMutation,
  useQuery
} from '@apollo/client';
import { DocumentNode } from 'graphql';
import { useApolloClient } from './useApolloClient';
import { ApolloClientTypes } from './ApolloClientTypes';

// An abstraction layer to make sure the right Apollo client is used
const useGenericQuery =
  (type: ApolloClientTypes) =>
  <TData = any, TVariables extends OperationVariables = OperationVariables>(
    query: DocumentNode | TypedDocumentNode<TData, TVariables>,
    options?: QueryHookOptions<TData, TVariables>
  ) => {
    const { getClient } = useApolloClient();
    const client = getClient(type);

    return useQuery(query, {
      ...options,
      client: client
    });
  };

const useGenericMutation =
  (type: ApolloClientTypes) =>
  <TData = any, TVariables = OperationVariables, TContext = DefaultContext, TCache extends ApolloCache<any> = ApolloCache<any>>(
    mutation: DocumentNode | TypedDocumentNode<TData, TVariables>,
    options?: MutationHookOptions<TData, TVariables, TContext, TCache>
  ) => {
    const { getClient } = useApolloClient();
    const client = getClient(type);

    return useMutation(mutation, {
      ...options,
      client: client
    });
  };

export const useSpacexQuery = useGenericQuery('spacex');
export const useCountriesQuery = useGenericQuery('countries');

export const useSpacexMutation = useGenericMutation('spacex');
export const useCountriesMutation = useGenericMutation('countries');
