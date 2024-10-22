import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            'X-API-KEY': import.meta.env.VITE_APP_API_KEY,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


export const ApolloClientProvider = ({ children }: Props) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
