import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  TestId: any;
  UserId: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Test */
  TestCreate?: Maybe<Test>;
  /** Remove a object of type Test */
  TestDelete?: Maybe<Scalars['Boolean']>;
  /** Update or create an object of type Test */
  TestUpdate?: Maybe<Test>;
  /** Create a User */
  UserCreate?: Maybe<User>;
  /** Remove a object of type User */
  UserDelete?: Maybe<Scalars['Boolean']>;
  /** Update or create an object of type User */
  UserUpdate?: Maybe<User>;
};


export type MutationTestCreateArgs = {
  input?: InputMaybe<TestInput>;
};


export type MutationTestDeleteArgs = {
  item: Scalars['TestId'];
};


export type MutationTestUpdateArgs = {
  input: TestInput;
  item: Scalars['TestId'];
};


export type MutationUserCreateArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUserDeleteArgs = {
  item: Scalars['UserId'];
};


export type MutationUserUpdateArgs = {
  input: UserInput;
  item: Scalars['UserId'];
};

export type OrderListInput = {
  field: Scalars['String'];
  order?: InputMaybe<OrderListOrder>;
};

export enum OrderListOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  /** Find a Test by id */
  Test?: Maybe<Test>;
  /** Find all objects of type Test  */
  TestList?: Maybe<TestListPayload>;
  /** Find a User by id */
  User?: Maybe<User>;
  /** Find all objects of type User  */
  UserList?: Maybe<UserListPayload>;
};


export type QueryTestArgs = {
  id: Scalars['TestId'];
};


export type QueryTestListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderListInput>>;
};


export type QueryUserArgs = {
  id: Scalars['UserId'];
};


export type QueryUserListArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderListInput>>;
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TestInput = {
  name: Scalars['String'];
};

export type TestListPayload = {
  __typename?: 'TestListPayload';
  items: Array<Test>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastname?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type UserInput = {
  name: Scalars['String'];
};

export type UserListPayload = {
  __typename?: 'UserListPayload';
  items: Array<User>;
};

export type _TestFragment = { __typename?: 'Test', id: number, name: string };

export type _UserFragment = { __typename?: 'User', id: number, email: string, firstname?: string | null, lastname?: string | null, thumbnail?: boolean | null, username: string };

export type TestQueryVariables = Exact<{
  id: Scalars['TestId'];
}>;


export type TestQuery = { __typename?: 'Query', res?: { __typename?: 'Test', id: number, name: string } | null };

export type TestListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderListInput> | OrderListInput>;
}>;


export type TestListQuery = { __typename?: 'Query', res?: { __typename?: 'TestListPayload', items: Array<{ __typename?: 'Test', id: number, name: string }> } | null };

export type UserQueryVariables = Exact<{
  id: Scalars['UserId'];
}>;


export type UserQuery = { __typename?: 'Query', res?: { __typename?: 'User', id: number, email: string, firstname?: string | null, lastname?: string | null, thumbnail?: boolean | null, username: string } | null };

export type UserListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrderListInput> | OrderListInput>;
}>;


export type UserListQuery = { __typename?: 'Query', res?: { __typename?: 'UserListPayload', items: Array<{ __typename?: 'User', id: number, email: string, firstname?: string | null, lastname?: string | null, thumbnail?: boolean | null, username: string }> } | null };

export type TestCreateMutationVariables = Exact<{
  input?: InputMaybe<TestInput>;
}>;


export type TestCreateMutation = { __typename?: 'Mutation', res?: { __typename?: 'Test', id: number, name: string } | null };

export type TestDeleteMutationVariables = Exact<{
  item: Scalars['TestId'];
}>;


export type TestDeleteMutation = { __typename?: 'Mutation', res?: boolean | null };

export type TestUpdateMutationVariables = Exact<{
  input: TestInput;
  item: Scalars['TestId'];
}>;


export type TestUpdateMutation = { __typename?: 'Mutation', res?: { __typename?: 'Test', id: number, name: string } | null };

export type UserCreateMutationVariables = Exact<{
  input?: InputMaybe<UserInput>;
}>;


export type UserCreateMutation = { __typename?: 'Mutation', res?: { __typename?: 'User', id: number, email: string, firstname?: string | null, lastname?: string | null, thumbnail?: boolean | null, username: string } | null };

export type UserDeleteMutationVariables = Exact<{
  item: Scalars['UserId'];
}>;


export type UserDeleteMutation = { __typename?: 'Mutation', res?: boolean | null };

export type UserUpdateMutationVariables = Exact<{
  input: UserInput;
  item: Scalars['UserId'];
}>;


export type UserUpdateMutation = { __typename?: 'Mutation', res?: { __typename?: 'User', id: number, email: string, firstname?: string | null, lastname?: string | null, thumbnail?: boolean | null, username: string } | null };

export const _TestFragmentDoc = gql`
    fragment _Test on Test {
  id
  name
}
    `;
export const _UserFragmentDoc = gql`
    fragment _User on User {
  id
  email
  firstname
  lastname
  thumbnail
  username
}
    `;
export const TestDocument = gql`
    query Test($id: TestId!) {
  res: Test(id: $id) {
    ..._Test
  }
}
    ${_TestFragmentDoc}`;

/**
 * __useTestQuery__
 *
 * To run a query within a React component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTestQuery(baseOptions: Apollo.QueryHookOptions<TestQuery, TestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestQuery, TestQueryVariables>(TestDocument, options);
      }
export function useTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestQuery, TestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestQuery, TestQueryVariables>(TestDocument, options);
        }
export type TestQueryHookResult = ReturnType<typeof useTestQuery>;
export type TestLazyQueryHookResult = ReturnType<typeof useTestLazyQuery>;
export type TestQueryResult = Apollo.QueryResult<TestQuery, TestQueryVariables>;
export const TestListDocument = gql`
    query TestList($limit: Int, $offset: Int, $orderBy: [OrderListInput!]) {
  res: TestList(limit: $limit, offset: $offset, orderBy: $orderBy) {
    items {
      ..._Test
    }
  }
}
    ${_TestFragmentDoc}`;

/**
 * __useTestListQuery__
 *
 * To run a query within a React component, call `useTestListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useTestListQuery(baseOptions?: Apollo.QueryHookOptions<TestListQuery, TestListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestListQuery, TestListQueryVariables>(TestListDocument, options);
      }
export function useTestListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestListQuery, TestListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestListQuery, TestListQueryVariables>(TestListDocument, options);
        }
export type TestListQueryHookResult = ReturnType<typeof useTestListQuery>;
export type TestListLazyQueryHookResult = ReturnType<typeof useTestListLazyQuery>;
export type TestListQueryResult = Apollo.QueryResult<TestListQuery, TestListQueryVariables>;
export const UserDocument = gql`
    query User($id: UserId!) {
  res: User(id: $id) {
    ..._User
  }
}
    ${_UserFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserListDocument = gql`
    query UserList($limit: Int, $offset: Int, $orderBy: [OrderListInput!]) {
  res: UserList(limit: $limit, offset: $offset, orderBy: $orderBy) {
    items {
      ..._User
    }
  }
}
    ${_UserFragmentDoc}`;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: Apollo.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
      }
export function useUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = Apollo.QueryResult<UserListQuery, UserListQueryVariables>;
export const TestCreateDocument = gql`
    mutation TestCreate($input: TestInput) {
  res: TestCreate(input: $input) {
    ..._Test
  }
}
    ${_TestFragmentDoc}`;
export type TestCreateMutationFn = Apollo.MutationFunction<TestCreateMutation, TestCreateMutationVariables>;

/**
 * __useTestCreateMutation__
 *
 * To run a mutation, you first call `useTestCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTestCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [testCreateMutation, { data, loading, error }] = useTestCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTestCreateMutation(baseOptions?: Apollo.MutationHookOptions<TestCreateMutation, TestCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TestCreateMutation, TestCreateMutationVariables>(TestCreateDocument, options);
      }
export type TestCreateMutationHookResult = ReturnType<typeof useTestCreateMutation>;
export type TestCreateMutationResult = Apollo.MutationResult<TestCreateMutation>;
export type TestCreateMutationOptions = Apollo.BaseMutationOptions<TestCreateMutation, TestCreateMutationVariables>;
export const TestDeleteDocument = gql`
    mutation TestDelete($item: TestId!) {
  res: TestDelete(item: $item)
}
    `;
export type TestDeleteMutationFn = Apollo.MutationFunction<TestDeleteMutation, TestDeleteMutationVariables>;

/**
 * __useTestDeleteMutation__
 *
 * To run a mutation, you first call `useTestDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTestDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [testDeleteMutation, { data, loading, error }] = useTestDeleteMutation({
 *   variables: {
 *      item: // value for 'item'
 *   },
 * });
 */
export function useTestDeleteMutation(baseOptions?: Apollo.MutationHookOptions<TestDeleteMutation, TestDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TestDeleteMutation, TestDeleteMutationVariables>(TestDeleteDocument, options);
      }
export type TestDeleteMutationHookResult = ReturnType<typeof useTestDeleteMutation>;
export type TestDeleteMutationResult = Apollo.MutationResult<TestDeleteMutation>;
export type TestDeleteMutationOptions = Apollo.BaseMutationOptions<TestDeleteMutation, TestDeleteMutationVariables>;
export const TestUpdateDocument = gql`
    mutation TestUpdate($input: TestInput!, $item: TestId!) {
  res: TestUpdate(input: $input, item: $item) {
    ..._Test
  }
}
    ${_TestFragmentDoc}`;
export type TestUpdateMutationFn = Apollo.MutationFunction<TestUpdateMutation, TestUpdateMutationVariables>;

/**
 * __useTestUpdateMutation__
 *
 * To run a mutation, you first call `useTestUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTestUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [testUpdateMutation, { data, loading, error }] = useTestUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *      item: // value for 'item'
 *   },
 * });
 */
export function useTestUpdateMutation(baseOptions?: Apollo.MutationHookOptions<TestUpdateMutation, TestUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TestUpdateMutation, TestUpdateMutationVariables>(TestUpdateDocument, options);
      }
export type TestUpdateMutationHookResult = ReturnType<typeof useTestUpdateMutation>;
export type TestUpdateMutationResult = Apollo.MutationResult<TestUpdateMutation>;
export type TestUpdateMutationOptions = Apollo.BaseMutationOptions<TestUpdateMutation, TestUpdateMutationVariables>;
export const UserCreateDocument = gql`
    mutation UserCreate($input: UserInput) {
  res: UserCreate(input: $input) {
    ..._User
  }
}
    ${_UserFragmentDoc}`;
export type UserCreateMutationFn = Apollo.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserCreateMutation(baseOptions?: Apollo.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, options);
      }
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const UserDeleteDocument = gql`
    mutation UserDelete($item: UserId!) {
  res: UserDelete(item: $item)
}
    `;
export type UserDeleteMutationFn = Apollo.MutationFunction<UserDeleteMutation, UserDeleteMutationVariables>;

/**
 * __useUserDeleteMutation__
 *
 * To run a mutation, you first call `useUserDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userDeleteMutation, { data, loading, error }] = useUserDeleteMutation({
 *   variables: {
 *      item: // value for 'item'
 *   },
 * });
 */
export function useUserDeleteMutation(baseOptions?: Apollo.MutationHookOptions<UserDeleteMutation, UserDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserDeleteMutation, UserDeleteMutationVariables>(UserDeleteDocument, options);
      }
export type UserDeleteMutationHookResult = ReturnType<typeof useUserDeleteMutation>;
export type UserDeleteMutationResult = Apollo.MutationResult<UserDeleteMutation>;
export type UserDeleteMutationOptions = Apollo.BaseMutationOptions<UserDeleteMutation, UserDeleteMutationVariables>;
export const UserUpdateDocument = gql`
    mutation UserUpdate($input: UserInput!, $item: UserId!) {
  res: UserUpdate(input: $input, item: $item) {
    ..._User
  }
}
    ${_UserFragmentDoc}`;
export type UserUpdateMutationFn = Apollo.MutationFunction<UserUpdateMutation, UserUpdateMutationVariables>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *      item: // value for 'item'
 *   },
 * });
 */
export function useUserUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UserUpdateMutation, UserUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(UserUpdateDocument, options);
      }
export type UserUpdateMutationHookResult = ReturnType<typeof useUserUpdateMutation>;
export type UserUpdateMutationResult = Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>;