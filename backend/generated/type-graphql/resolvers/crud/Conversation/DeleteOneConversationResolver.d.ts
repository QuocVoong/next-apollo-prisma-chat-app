import { GraphQLResolveInfo } from "graphql";
import { DeleteOneConversationArgs } from "./args/DeleteOneConversationArgs";
import { Conversation } from "../../../models/Conversation";
export declare class DeleteOneConversationResolver {
    deleteOneConversation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneConversationArgs): Promise<Conversation | null>;
}
