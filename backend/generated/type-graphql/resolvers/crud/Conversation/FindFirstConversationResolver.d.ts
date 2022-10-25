import { GraphQLResolveInfo } from "graphql";
import { FindFirstConversationArgs } from "./args/FindFirstConversationArgs";
import { Conversation } from "../../../models/Conversation";
export declare class FindFirstConversationResolver {
    findFirstConversation(ctx: any, info: GraphQLResolveInfo, args: FindFirstConversationArgs): Promise<Conversation | null>;
}
