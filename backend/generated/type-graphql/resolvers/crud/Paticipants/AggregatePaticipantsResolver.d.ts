import { GraphQLResolveInfo } from "graphql";
import { AggregatePaticipantsArgs } from "./args/AggregatePaticipantsArgs";
import { AggregatePaticipants } from "../../outputs/AggregatePaticipants";
export declare class AggregatePaticipantsResolver {
    aggregatePaticipants(ctx: any, info: GraphQLResolveInfo, args: AggregatePaticipantsArgs): Promise<AggregatePaticipants>;
}
