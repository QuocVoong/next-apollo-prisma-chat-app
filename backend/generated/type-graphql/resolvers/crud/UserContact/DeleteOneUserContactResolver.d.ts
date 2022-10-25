import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserContactArgs } from "./args/DeleteOneUserContactArgs";
import { UserContact } from "../../../models/UserContact";
export declare class DeleteOneUserContactResolver {
    deleteOneUserContact(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUserContactArgs): Promise<UserContact | null>;
}
