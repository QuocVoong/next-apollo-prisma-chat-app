import { GraphQLResolveInfo } from "graphql";
import { FindUniqueConversationArgs } from "./args/FindUniqueConversationArgs";
import { Conversation } from "../../../models/Conversation";
export declare class FindUniqueConversationResolver {
    conversation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueConversationArgs): Promise<Conversation | null>;
}
