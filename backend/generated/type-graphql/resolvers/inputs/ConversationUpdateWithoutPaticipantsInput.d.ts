import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutConversationNestedInput } from "../inputs/MessageUpdateManyWithoutConversationNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutConversationNestedInput } from "../inputs/UserUpdateOneRequiredWithoutConversationNestedInput";
export declare class ConversationUpdateWithoutPaticipantsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    secondaryName?: NullableStringFieldUpdateOperationsInput | undefined;
    creator?: UserUpdateOneRequiredWithoutConversationNestedInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    Message?: MessageUpdateManyWithoutConversationNestedInput | undefined;
}
