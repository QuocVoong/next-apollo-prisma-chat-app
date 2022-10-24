import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { setCookie } from 'cookies-next';
import bcrypt from "bcrypt";
import { AuthenticationError, ForbiddenError, UserInputError } from 'apollo-server-micro';
import {
  LoginInput,
  LoginResponse,
  SignUpInput,
  UserResponse,
} from '../schemas/user.schema';
import type { Context } from '../context';
import { auth } from '../auth';

@Resolver()
export default class UserResolver {

  @Mutation(() => UserResponse)
  async signupUser(@Arg('input') input: SignUpInput, @Ctx() ctx: Context) {
    try {
      const hash = bcrypt.hashSync(input.password, 12);
      const user = await ctx.prisma.user.create({ data: { email: input.email, username: input.email.split('@')?.[0], password: hash } });

      // const conversation = await ctx.prisma.conversation.create({ data: { name: user.username || user.email, creatorId: user.id }});
      // await ctx.prisma.paticipants.create({ data: { userId: user.id, conversationId: conversation.id }});

      const { token, refreshToken } = auth(user);
      setCookie('token', token, { req: ctx.req, res: ctx.res, maxAge: 60 * 60 * 8 });
      setCookie('refresh-token', refreshToken, { req: ctx.req, res: ctx.res, maxAge: 60 * 60 * 8 });
      return {
        status: 'OK',
        user
      }
    } catch (err) {
      console.log('err ', JSON.stringify(err));
      if (err.code === 'P2002') {
        throw new UserInputError('Email already exists', { errors: err });
      }
      throw new UserInputError("Bad User Input", { errors: err });
    }
  }

  @Mutation(() => LoginResponse)
  async loginUser(@Arg('input') loginInput: LoginInput, @Ctx() ctx: Context) {
    const user = await ctx.prisma.user.findFirst({ where: { email: loginInput.email }});
    if (!user) {
      throw new UserInputError("user not found");
    }
    if (!bcrypt.compareSync(loginInput.password, user.password)) {
      throw new UserInputError("email or password are incorrect");
    }
    const { token, refreshToken } = auth(user);
    setCookie('token', token, { req: ctx.req, res: ctx.res, maxAge: 60 * 60 * 8 });
    setCookie('refresh-token', refreshToken, { req: ctx.req, res: ctx.res, maxAge: 60 * 60 * 8 });
    return {
      status: "Ok",
      message: "Login successfully"
    }
  }

  @Query(() => UserResponse)
  async getMe(@Ctx() ctx: Context) {
    const user = ctx.user?.id && await ctx.prisma.user.findFirst({ where: { id: ctx.user?.id }});
    if (!user) {
      return {
        status: 'ERROR',
        user: null,
      }
    }

    return {
      status: "OK",
      user,
    }
  }

  @Query(() => LoginResponse)
  async refreshAccessToken(@Ctx() ctx: Context) {
    // return this.userService.refreshAccessToken(ctx);
  }

  @Query(() => Boolean)
  async logoutUser(@Ctx() ctx: Context) {
    // return this.userService.logoutUser(ctx);
  }
}