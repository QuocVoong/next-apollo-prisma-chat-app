import { MessageCreateNestedManyWithoutConversationInput } from "../inputs/MessageCreateNestedManyWithoutConversationInput";
import { PaticipantsCreateNestedManyWithoutConversationInput } from "../inputs/PaticipantsCreateNestedManyWithoutConversationInput";
export declare class ConversationCreateWithoutCreatorInput {
    id?: string | undefined;
    name?: string | undefined;
    secondaryName?: string | undefined;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Message?: MessageCreateNestedManyWithoutConversationInput | undefined;
    Paticipants?: PaticipantsCreateNestedManyWithoutConversationInput | undefined;
}
