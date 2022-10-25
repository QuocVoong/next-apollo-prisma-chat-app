import { UserCreateNestedOneWithoutMessageInput } from "../inputs/UserCreateNestedOneWithoutMessageInput";
export declare class MessageCreateWithoutConversationInput {
    id?: string | undefined;
    fromUser: UserCreateNestedOneWithoutMessageInput;
    text: string;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
