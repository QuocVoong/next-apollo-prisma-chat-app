import { GraphQLResolveInfo } from "graphql";
import { UpdateOneMessageArgs } from "./args/UpdateOneMessageArgs";
import { Message } from "../../../models/Message";
export declare class UpdateOneMessageResolver {
    updateOneMessage(ctx: any, info: GraphQLResolveInfo, args: UpdateOneMessageArgs): Promise<Message | null>;
}
