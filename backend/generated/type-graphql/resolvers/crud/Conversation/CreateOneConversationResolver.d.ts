import { GraphQLResolveInfo } from "graphql";
import { CreateOneConversationArgs } from "./args/CreateOneConversationArgs";
import { Conversation } from "../../../models/Conversation";
export declare class CreateOneConversationResolver {
    createOneConversation(ctx: any, info: GraphQLResolveInfo, args: CreateOneConversationArgs): Promise<Conversation>;
}
