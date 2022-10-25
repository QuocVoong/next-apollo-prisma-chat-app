import { GraphQLResolveInfo } from "graphql";
import { AggregateUserContactArgs } from "./args/AggregateUserContactArgs";
import { CreateOneUserContactArgs } from "./args/CreateOneUserContactArgs";
import { DeleteManyUserContactArgs } from "./args/DeleteManyUserContactArgs";
import { DeleteOneUserContactArgs } from "./args/DeleteOneUserContactArgs";
import { FindFirstUserContactArgs } from "./args/FindFirstUserContactArgs";
import { FindManyUserContactArgs } from "./args/FindManyUserContactArgs";
import { FindUniqueUserContactArgs } from "./args/FindUniqueUserContactArgs";
import { GroupByUserContactArgs } from "./args/GroupByUserContactArgs";
import { UpdateManyUserContactArgs } from "./args/UpdateManyUserContactArgs";
import { UpdateOneUserContactArgs } from "./args/UpdateOneUserContactArgs";
import { UpsertOneUserContactArgs } from "./args/UpsertOneUserContactArgs";
import { UserContact } from "../../../models/UserContact";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserContact } from "../../outputs/AggregateUserContact";
import { UserContactGroupBy } from "../../outputs/UserContactGroupBy";
export declare class UserContactCrudResolver {
    aggregateUserContact(ctx: any, info: GraphQLResolveInfo, args: AggregateUserContactArgs): Promise<AggregateUserContact>;
    createOneUserContact(ctx: any, info: GraphQLResolveInfo, args: CreateOneUserContactArgs): Promise<UserContact>;
    deleteManyUserContact(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUserContactArgs): Promise<AffectedRowsOutput>;
    deleteOneUserContact(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUserContactArgs): Promise<UserContact | null>;
    findFirstUserContact(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserContactArgs): Promise<UserContact | null>;
    userContacts(ctx: any, info: GraphQLResolveInfo, args: FindManyUserContactArgs): Promise<UserContact[]>;
    userContact(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserContactArgs): Promise<UserContact | null>;
    groupByUserContact(ctx: any, info: GraphQLResolveInfo, args: GroupByUserContactArgs): Promise<UserContactGroupBy[]>;
    updateManyUserContact(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUserContactArgs): Promise<AffectedRowsOutput>;
    updateOneUserContact(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUserContactArgs): Promise<UserContact | null>;
    upsertOneUserContact(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUserContactArgs): Promise<UserContact>;
}
