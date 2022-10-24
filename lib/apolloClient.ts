import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
// import { WebSocketLink } from "@apollo/client/link/ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const IS_PROD = process.env.ENV === "production";
const WS_URI = 'ws://localhost:3000/api/graphql';
const HTTP_URI = 'http://localhost:3000/api/graphql';

const ssrMode = (typeof window === 'undefined');

const httpLink = new HttpLink({
  uri: HTTP_URI,
  credentials: "include",
});

// const wsLink = null;

const wsLink = process.browser
  ? new GraphQLWsLink(
    createClient({
      url: WS_URI,
      // keepAlive: 10_000,
      on: {
        connected: () => console.log("connected client"),
        closed: () => console.log("closed"),
      }
    }),
  )
  : null;

const link = wsLink
  ? split(
      ({ query }) => {
        const def = getMainDefinition(query);
        return (
          def.kind === "OperationDefinition" && def.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    )
  : httpLink;

const apolloClient = new ApolloClient({
  ssrMode,
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});

export default apolloClient;
