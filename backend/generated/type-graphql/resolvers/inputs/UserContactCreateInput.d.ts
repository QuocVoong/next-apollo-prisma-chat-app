import { UserCreateNestedOneWithoutContactUserInput } from "../inputs/UserCreateNestedOneWithoutContactUserInput";
import { UserCreateNestedOneWithoutOwnerContactInput } from "../inputs/UserCreateNestedOneWithoutOwnerContactInput";
export declare class UserContactCreateInput {
    ownerContact?: UserCreateNestedOneWithoutOwnerContactInput | undefined;
    contactUser: UserCreateNestedOneWithoutContactUserInput;
    email: string;
    username?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phoneNumber?: string | undefined;
    photo?: string | undefined;
}
