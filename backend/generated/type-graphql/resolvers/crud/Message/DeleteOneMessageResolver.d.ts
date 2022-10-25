import { GraphQLResolveInfo } from "graphql";
import { DeleteOneMessageArgs } from "./args/DeleteOneMessageArgs";
import { Message } from "../../../models/Message";
export declare class DeleteOneMessageResolver {
    deleteOneMessage(ctx: any, info: GraphQLResolveInfo, args: DeleteOneMessageArgs): Promise<Message | null>;
}
