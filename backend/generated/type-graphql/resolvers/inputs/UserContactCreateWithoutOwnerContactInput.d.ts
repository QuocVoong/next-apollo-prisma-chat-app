import { UserCreateNestedOneWithoutContactUserInput } from "../inputs/UserCreateNestedOneWithoutContactUserInput";
export declare class UserContactCreateWithoutOwnerContactInput {
    contactUser: UserCreateNestedOneWithoutContactUserInput;
    email: string;
    username?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phoneNumber?: string | undefined;
    photo?: string | undefined;
}
