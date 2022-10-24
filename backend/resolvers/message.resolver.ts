import {
  Arg,
  Mutation,
  Publisher,
  PubSub,
  Query,
  Resolver,
  Root,
  Subscription,
} from "type-graphql";
import { Message } from "../generated/graphql";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Notification {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  text?: string;
}

export interface NotificationPayload {
  id: string;
  text?: string;
}

@Resolver()
export class MessageResolver {
  // @Mutation(() => Message)
  // async sendMessage(
  //   @Arg("data") data: SendMessageInput,
  //   @PubSub("NEWMESSAGE") publish: Publisher<Message>
  // ) {
  //   const message = Message.create(data);
  //   await message.save();
  //   await publish(message);
  //   return message;
  // }

  @Subscription({
    topics: "NEWMESSAGE",
    // topics: ({ args, payload, context }) => args.topic
  })
  newMessage(@Root() messagePayload: NotificationPayload): Notification {
    console.log('new msg ');
    return messagePayload;
  }
}
