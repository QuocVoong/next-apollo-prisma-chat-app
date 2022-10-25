import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ConversationUpdateOneRequiredWithoutMessageNestedInput } from "../inputs/ConversationUpdateOneRequiredWithoutMessageNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MessageUpdateWithoutFromUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    conversation?: ConversationUpdateOneRequiredWithoutMessageNestedInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    isDeleted?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
