import { GraphQLResolveInfo } from "graphql";
import { AggregateMessageArgs } from "./args/AggregateMessageArgs";
import { CreateOneMessageArgs } from "./args/CreateOneMessageArgs";
import { DeleteManyMessageArgs } from "./args/DeleteManyMessageArgs";
import { DeleteOneMessageArgs } from "./args/DeleteOneMessageArgs";
import { FindFirstMessageArgs } from "./args/FindFirstMessageArgs";
import { FindManyMessageArgs } from "./args/FindManyMessageArgs";
import { FindUniqueMessageArgs } from "./args/FindUniqueMessageArgs";
import { GroupByMessageArgs } from "./args/GroupByMessageArgs";
import { UpdateManyMessageArgs } from "./args/UpdateManyMessageArgs";
import { UpdateOneMessageArgs } from "./args/UpdateOneMessageArgs";
import { UpsertOneMessageArgs } from "./args/UpsertOneMessageArgs";
import { Message } from "../../../models/Message";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMessage } from "../../outputs/AggregateMessage";
import { MessageGroupBy } from "../../outputs/MessageGroupBy";
export declare class MessageCrudResolver {
    aggregateMessage(ctx: any, info: GraphQLResolveInfo, args: AggregateMessageArgs): Promise<AggregateMessage>;
    createOneMessage(ctx: any, info: GraphQLResolveInfo, args: CreateOneMessageArgs): Promise<Message>;
    deleteManyMessage(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMessageArgs): Promise<AffectedRowsOutput>;
    deleteOneMessage(ctx: any, info: GraphQLResolveInfo, args: DeleteOneMessageArgs): Promise<Message | null>;
    findFirstMessage(ctx: any, info: GraphQLResolveInfo, args: FindFirstMessageArgs): Promise<Message | null>;
    messages(ctx: any, info: GraphQLResolveInfo, args: FindManyMessageArgs): Promise<Message[]>;
    message(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMessageArgs): Promise<Message | null>;
    groupByMessage(ctx: any, info: GraphQLResolveInfo, args: GroupByMessageArgs): Promise<MessageGroupBy[]>;
    updateManyMessage(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMessageArgs): Promise<AffectedRowsOutput>;
    updateOneMessage(ctx: any, info: GraphQLResolveInfo, args: UpdateOneMessageArgs): Promise<Message | null>;
    upsertOneMessage(ctx: any, info: GraphQLResolveInfo, args: UpsertOneMessageArgs): Promise<Message>;
}
