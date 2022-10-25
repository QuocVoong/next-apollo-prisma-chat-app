import { GraphQLResolveInfo } from "graphql";
import { CreateOneMessageArgs } from "./args/CreateOneMessageArgs";
import { Message } from "../../../models/Message";
export declare class CreateOneMessageResolver {
    createOneMessage(ctx: any, info: GraphQLResolveInfo, args: CreateOneMessageArgs): Promise<Message>;
}
