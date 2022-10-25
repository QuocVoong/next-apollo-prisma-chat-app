import { GraphQLResolveInfo } from "graphql";
import { FindManyUserContactArgs } from "./args/FindManyUserContactArgs";
import { UserContact } from "../../../models/UserContact";
export declare class FindManyUserContactResolver {
    userContacts(ctx: any, info: GraphQLResolveInfo, args: FindManyUserContactArgs): Promise<UserContact[]>;
}
