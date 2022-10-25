import { UserContactOrderByWithRelationInput } from "../../../inputs/UserContactOrderByWithRelationInput";
import { UserContactWhereInput } from "../../../inputs/UserContactWhereInput";
import { UserContactWhereUniqueInput } from "../../../inputs/UserContactWhereUniqueInput";
export declare class UserContactUserArgs {
    where?: UserContactWhereInput | undefined;
    orderBy?: UserContactOrderByWithRelationInput[] | undefined;
    cursor?: UserContactWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"ownerContactId" | "contactId" | "email" | "username" | "firstName" | "lastName" | "phoneNumber" | "photo"> | undefined;
}
