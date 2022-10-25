import { GraphQLResolveInfo } from "graphql";
import { FindManyConversationArgs } from "./args/FindManyConversationArgs";
import { Conversation } from "../../../models/Conversation";
export declare class FindManyConversationResolver {
    conversations(ctx: any, info: GraphQLResolveInfo, args: FindManyConversationArgs): Promise<Conversation[]>;
}
