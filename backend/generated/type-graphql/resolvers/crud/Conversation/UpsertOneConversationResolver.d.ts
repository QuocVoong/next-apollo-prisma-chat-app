import { GraphQLResolveInfo } from "graphql";
import { UpsertOneConversationArgs } from "./args/UpsertOneConversationArgs";
import { Conversation } from "../../../models/Conversation";
export declare class UpsertOneConversationResolver {
    upsertOneConversation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneConversationArgs): Promise<Conversation>;
}
