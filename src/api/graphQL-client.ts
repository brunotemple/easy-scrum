import { ApolloClient, NormalizedCacheObject, HttpLink, InMemoryCache } from "apollo-boost";

export const GraphQLClient = new ApolloClient<NormalizedCacheObject>({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:4000/"
    }),
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "cache-and-network"
        }
    }
});
