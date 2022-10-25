import { GraphQLResolveInfo } from "graphql";
import { DeleteManyConversationArgs } from "./args/DeleteManyConversationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyConversationResolver {
    deleteManyConversation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyConversationArgs): Promise<AffectedRowsOutput>;
}
