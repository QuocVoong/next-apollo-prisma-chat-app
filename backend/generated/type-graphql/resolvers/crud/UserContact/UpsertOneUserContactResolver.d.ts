import { GraphQLResolveInfo } from "graphql";
import { UpsertOneUserContactArgs } from "./args/UpsertOneUserContactArgs";
import { UserContact } from "../../../models/UserContact";
export declare class UpsertOneUserContactResolver {
    upsertOneUserContact(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUserContactArgs): Promise<UserContact>;
}
