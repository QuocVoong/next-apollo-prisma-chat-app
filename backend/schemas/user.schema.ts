import { Field, InputType, ObjectType } from 'type-graphql';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class SignUpInput {
  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(32, { message: 'Password must be at most 32 characters long' })
  @Field(() => String)
  password: string;
}

@InputType()
export class LoginInput {
  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(8, { message: 'Invalid email or password' })
  @MaxLength(32, { message: 'Invalid email or password' })
  @Field(() => String)
  password: string;
}

@ObjectType()
export class UserData {
  @Field(() => String)
  readonly id: string;

  @Field(() => String, { nullable: true })
  username: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => Boolean)
  isAdmin: boolean;

  @Field(() => String, { nullable: true })
  photo?: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

@ObjectType()
export class UserResponse {
  @Field(() => String)
  status: string;

  @Field(() => UserData, { nullable: true })
  user: UserData;
}

@ObjectType()
export class LoginResponse {
  @Field(() => String)
  status: string;

  @Field(() => String)
  message: string;
}