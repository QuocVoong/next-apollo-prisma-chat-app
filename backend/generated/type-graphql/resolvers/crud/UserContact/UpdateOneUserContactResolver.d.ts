import { GraphQLResolveInfo } from "graphql";
import { UpdateOneUserContactArgs } from "./args/UpdateOneUserContactArgs";
import { UserContact } from "../../../models/UserContact";
export declare class UpdateOneUserContactResolver {
    updateOneUserContact(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUserContactArgs): Promise<UserContact | null>;
}
