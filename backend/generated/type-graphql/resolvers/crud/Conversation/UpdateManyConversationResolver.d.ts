import { GraphQLResolveInfo } from "graphql";
import { UpdateManyConversationArgs } from "./args/UpdateManyConversationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyConversationResolver {
    updateManyConversation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyConversationArgs): Promise<AffectedRowsOutput>;
}
