/* eslint-disable no-console */
/** Apollo / GraphQL * */
import { ApolloClient, ApolloLink, InMemoryCache, ServerError } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { notification } from 'antd';
import { createUploadLink } from 'apollo-upload-client';

import typesMatcher from 'changeMe/gql/possibleTypes';

const isNeworkError = (obj: any): obj is ServerError => obj && obj.statusCode !== undefined;

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError, response }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) => {
                    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
                    notification.error({
                        message: 'Error',
                        description: message,
                    });
                });
            if (isNeworkError(networkError)) {
                if (networkError.statusCode === 401) {
                    notification.error({
                        message: 'Session expirée',
                        description: 'Votre session a expiré. Merci de vous reconnecter.',
                    });
                    // eslint-disable-next-line no-restricted-globals
                    setTimeout(() => location.replace('/'), 5000);
                }
                console.log(networkError.statusCode);
                console.log(`[Network error]: ${networkError}`);
            }
        }),
        createUploadLink({
            uri: '/gql',
            credentials: 'same-origin',
        }),
    ]),
    cache: new InMemoryCache({ possibleTypes: typesMatcher.possibleTypes }),
});

export default client;
