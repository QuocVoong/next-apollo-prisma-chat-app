import { MessageCreateNestedManyWithoutConversationInput } from "../inputs/MessageCreateNestedManyWithoutConversationInput";
import { UserCreateNestedOneWithoutConversationInput } from "../inputs/UserCreateNestedOneWithoutConversationInput";
export declare class ConversationCreateWithoutPaticipantsInput {
    id?: string | undefined;
    name?: string | undefined;
    secondaryName?: string | undefined;
    creator: UserCreateNestedOneWithoutConversationInput;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Message?: MessageCreateNestedManyWithoutConversationInput | undefined;
}
