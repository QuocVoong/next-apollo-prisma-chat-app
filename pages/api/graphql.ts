import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { NextApiRequest, NextApiResponse } from 'next';
const { PubSub } = require('graphql-subscriptions');
import { makeExecutableSchema } from '@graphql-tools/schema';
import { useServer } from 'graphql-ws/lib/use/ws';
import { Disposable } from 'graphql-ws';
import { WebSocketServer } from 'ws';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { buildSchema, Query, Resolver } from 'type-graphql';
import { typeDefs } from '../../backend/type-defs';
import { resolvers } from '../../backend/resolvers';
import { context } from '../../backend/context';
import {
  UserCrudResolver,
  MessageCrudResolver,
  ConversationCrudResolver,
  PaticipantsCrudResolver,
  MessageRelationsResolver,
  ConversationRelationsResolver,
  PaticipantsRelationsResolver,
  UserContactRelationsResolver,
} from "../../backend/generated/type-graphql";
import UserResolver from "../../backend/resolvers/user.resolver";
import { MessageResolver } from "../../backend/resolvers/message.resolver";
import { TOKEN_SECRET } from '../../backend/constants';
import { verify } from 'jsonwebtoken';
import { setCookie, deleteCookie } from 'cookies-next';

// const schema = makeExecutableSchema({ typeDefs, resolvers });

const schema = await buildSchema({
  resolvers: [
    UserCrudResolver,
    MessageCrudResolver,
    ConversationCrudResolver,
    PaticipantsCrudResolver,
    MessageRelationsResolver,
    ConversationRelationsResolver,
    PaticipantsRelationsResolver,
    UserContactRelationsResolver,
    UserResolver,
    // MessageResolver,
  ],
  dateScalarMode: 'isoDate',
  validate: false,
});

const pubsub = new PubSub();
let graphqlWSS;
let apolloServerHandler;
const wsServer = new WebSocketServer({
  noServer: true,
});

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req, res }: any) => {
    const token = req.cookies["token"];
    const refreshToken = req.cookies["refresh-token"]

    let user;
    try {
      if (token) {
        user = verify(token, TOKEN_SECRET) as any;
      }
    } catch {
      deleteCookie('token');
      deleteCookie('refresh-token');
    }

    return { req, res, prisma: context.prisma, user }
  },
  // introspection: true,
  // plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})]
  // plugins: [
  //   {
  //     async serverWillStart() {
  //       return {
  //         async drainServer() {
  //           await serverCleanup?.dispose();
  //         },
  //       };
  //     },
  //   },
  // ]
})

// const getHandler = async () => {
//   await startServer;
//   return apolloServer.createHandler({
//     path: '/api/graphql',
//   });
// }

const cors = Cors();
let serverCleanup: Disposable | null = null;

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  // add socket subscription

  // const oldApolloServer = res.socket.server.apolloServer;
  // if (oldApolloServer && oldApolloServer !== apolloServer) {
  //   console.warn('Fixing Apollo Server hot reload');
  //   oldApolloServer.stop();
  //   delete res.socket.server.apolloServer;
  // }

  if (!res.socket.server.apolloServer) {
    // res.socket.server.apolloServer = apolloServer;
    // if (!serverCleanup) {
    //   /* eslint-disable react-hooks/rules-of-hooks */
    //   console.log(`Initializing GraphQL WSS`);
    //   const wss = new WebSocketServer({
    //     server: res.socket.server,
    //     path: '/api/graphql',
    //   });

    //   serverCleanup = useServer(
    //     {
    //       schema,
    //       context() {
    //         const { session, socket, cookies } = req;
    //         return { session, pubsub: socket.server.pubsub };
    //       },
    //     },
    //     wss,
    //   );
    // }

    // await startServer;
    // apolloServerHandler = apolloServer.createHandler({ path: '/api/graphql' });
  }
  await startServer;
  apolloServerHandler = apolloServer.createHandler({ path: '/api/graphql' });

  await apolloServerHandler(req, res);

  // const handler = await getHandler();
  // await handler(req, res)
})

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
