import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserContactArgs } from "./args/FindUniqueUserContactArgs";
import { UserContact } from "../../../models/UserContact";
export declare class FindUniqueUserContactResolver {
    userContact(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserContactArgs): Promise<UserContact | null>;
}
