import { GraphQLResolveInfo } from "graphql";
import { CreateOneUserContactArgs } from "./args/CreateOneUserContactArgs";
import { UserContact } from "../../../models/UserContact";
export declare class CreateOneUserContactResolver {
    createOneUserContact(ctx: any, info: GraphQLResolveInfo, args: CreateOneUserContactArgs): Promise<UserContact>;
}
