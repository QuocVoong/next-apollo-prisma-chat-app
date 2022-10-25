import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutConversationNestedInput } from "../inputs/MessageUpdateManyWithoutConversationNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PaticipantsUpdateManyWithoutConversationNestedInput } from "../inputs/PaticipantsUpdateManyWithoutConversationNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ConversationUpdateWithoutCreatorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    secondaryName?: NullableStringFieldUpdateOperationsInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Message?: MessageUpdateManyWithoutConversationNestedInput | undefined;
    Paticipants?: PaticipantsUpdateManyWithoutConversationNestedInput | undefined;
}
