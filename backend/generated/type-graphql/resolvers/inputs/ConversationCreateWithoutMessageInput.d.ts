import { PaticipantsCreateNestedManyWithoutConversationInput } from "../inputs/PaticipantsCreateNestedManyWithoutConversationInput";
import { UserCreateNestedOneWithoutConversationInput } from "../inputs/UserCreateNestedOneWithoutConversationInput";
export declare class ConversationCreateWithoutMessageInput {
    id?: string | undefined;
    name?: string | undefined;
    secondaryName?: string | undefined;
    creator: UserCreateNestedOneWithoutConversationInput;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Paticipants?: PaticipantsCreateNestedManyWithoutConversationInput | undefined;
}
