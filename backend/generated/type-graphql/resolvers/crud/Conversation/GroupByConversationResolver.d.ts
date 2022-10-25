import { GraphQLResolveInfo } from "graphql";
import { GroupByConversationArgs } from "./args/GroupByConversationArgs";
import { ConversationGroupBy } from "../../outputs/ConversationGroupBy";
export declare class GroupByConversationResolver {
    groupByConversation(ctx: any, info: GraphQLResolveInfo, args: GroupByConversationArgs): Promise<ConversationGroupBy[]>;
}
