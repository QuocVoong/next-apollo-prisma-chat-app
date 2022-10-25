import { GraphQLResolveInfo } from "graphql";
import { AggregateConversationArgs } from "./args/AggregateConversationArgs";
import { AggregateConversation } from "../../outputs/AggregateConversation";
export declare class AggregateConversationResolver {
    aggregateConversation(ctx: any, info: GraphQLResolveInfo, args: AggregateConversationArgs): Promise<AggregateConversation>;
}
