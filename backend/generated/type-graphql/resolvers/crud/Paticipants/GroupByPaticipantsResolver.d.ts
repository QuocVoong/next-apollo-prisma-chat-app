import { GraphQLResolveInfo } from "graphql";
import { GroupByPaticipantsArgs } from "./args/GroupByPaticipantsArgs";
import { PaticipantsGroupBy } from "../../outputs/PaticipantsGroupBy";
export declare class GroupByPaticipantsResolver {
    groupByPaticipants(ctx: any, info: GraphQLResolveInfo, args: GroupByPaticipantsArgs): Promise<PaticipantsGroupBy[]>;
}
