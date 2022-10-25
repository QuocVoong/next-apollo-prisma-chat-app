import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ConversationUpdateOneRequiredWithoutMessageNestedInput } from "../inputs/ConversationUpdateOneRequiredWithoutMessageNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMessageNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMessageNestedInput";
export declare class MessageUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    fromUser?: UserUpdateOneRequiredWithoutMessageNestedInput | undefined;
    conversation?: ConversationUpdateOneRequiredWithoutMessageNestedInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
