import { GraphQLResolveInfo } from "graphql";
import { UpdateOneConversationArgs } from "./args/UpdateOneConversationArgs";
import { Conversation } from "../../../models/Conversation";
export declare class UpdateOneConversationResolver {
    updateOneConversation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneConversationArgs): Promise<Conversation | null>;
}
