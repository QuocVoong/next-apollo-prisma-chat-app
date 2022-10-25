import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMessageNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMessageNestedInput";
export declare class MessageUpdateWithoutConversationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    fromUser?: UserUpdateOneRequiredWithoutMessageNestedInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
