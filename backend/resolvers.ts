// import { Resolvers } from "./generated/graphql";

export const resolvers = {
  Query: {
    AllUsers: async (parent, args, context) => {
      return await context.db.user.findMany({
        skip: args.skip,
        take: args.take,
        orderBy: args.orderBy?.map((item: any) => ({ [item.path]: item.descending ? 'desc' : 'asc' }))
      })
    },
  },
  Mutation: {
    createUser: async (_, args, context) => {
      return await context.db.user.create({ data: { username: args.username, email: args.email, password: args.password || '12345678' } })
    },
  },
}