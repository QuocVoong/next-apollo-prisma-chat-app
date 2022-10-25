import { ConversationCreateNestedOneWithoutMessageInput } from "../inputs/ConversationCreateNestedOneWithoutMessageInput";
import { UserCreateNestedOneWithoutMessageInput } from "../inputs/UserCreateNestedOneWithoutMessageInput";
export declare class MessageCreateInput {
    id?: string | undefined;
    fromUser: UserCreateNestedOneWithoutMessageInput;
    conversation: ConversationCreateNestedOneWithoutMessageInput;
    text: string;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
