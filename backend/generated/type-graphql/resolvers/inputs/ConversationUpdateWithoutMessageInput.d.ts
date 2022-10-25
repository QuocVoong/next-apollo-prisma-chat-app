import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PaticipantsUpdateManyWithoutConversationNestedInput } from "../inputs/PaticipantsUpdateManyWithoutConversationNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutConversationNestedInput } from "../inputs/UserUpdateOneRequiredWithoutConversationNestedInput";
export declare class ConversationUpdateWithoutMessageInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    secondaryName?: NullableStringFieldUpdateOperationsInput | undefined;
    creator?: UserUpdateOneRequiredWithoutConversationNestedInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Paticipants?: PaticipantsUpdateManyWithoutConversationNestedInput | undefined;
}
