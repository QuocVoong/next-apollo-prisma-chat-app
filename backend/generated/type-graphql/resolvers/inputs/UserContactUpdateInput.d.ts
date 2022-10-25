import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutContactUserNestedInput } from "../inputs/UserUpdateOneRequiredWithoutContactUserNestedInput";
import { UserUpdateOneRequiredWithoutOwnerContactNestedInput } from "../inputs/UserUpdateOneRequiredWithoutOwnerContactNestedInput";
export declare class UserContactUpdateInput {
    ownerContact?: UserUpdateOneRequiredWithoutOwnerContactNestedInput | undefined;
    contactUser?: UserUpdateOneRequiredWithoutContactUserNestedInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    username?: NullableStringFieldUpdateOperationsInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
}
