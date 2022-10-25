import { GraphQLResolveInfo } from "graphql";
import { AggregateUserContactArgs } from "./args/AggregateUserContactArgs";
import { AggregateUserContact } from "../../outputs/AggregateUserContact";
export declare class AggregateUserContactResolver {
    aggregateUserContact(ctx: any, info: GraphQLResolveInfo, args: AggregateUserContactArgs): Promise<AggregateUserContact>;
}
