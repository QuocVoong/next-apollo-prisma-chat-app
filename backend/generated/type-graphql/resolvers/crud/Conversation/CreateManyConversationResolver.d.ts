import { GraphQLResolveInfo } from "graphql";
import { CreateManyConversationArgs } from "./args/CreateManyConversationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyConversationResolver {
    createManyConversation(ctx: any, info: GraphQLResolveInfo, args: CreateManyConversationArgs): Promise<AffectedRowsOutput>;
}
