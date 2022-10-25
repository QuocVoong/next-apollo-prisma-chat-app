import { GraphQLResolveInfo } from "graphql";
import { GroupByUserContactArgs } from "./args/GroupByUserContactArgs";
import { UserContactGroupBy } from "../../outputs/UserContactGroupBy";
export declare class GroupByUserContactResolver {
    groupByUserContact(ctx: any, info: GraphQLResolveInfo, args: GroupByUserContactArgs): Promise<UserContactGroupBy[]>;
}
