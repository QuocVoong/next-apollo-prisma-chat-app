import { GraphQLResolveInfo } from "graphql";
import { FindFirstUserContactArgs } from "./args/FindFirstUserContactArgs";
import { UserContact } from "../../../models/UserContact";
export declare class FindFirstUserContactResolver {
    findFirstUserContact(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserContactArgs): Promise<UserContact | null>;
}
