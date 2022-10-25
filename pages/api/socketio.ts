import { NextApiRequest, NextApiResponse } from "next";
import { Server as NetServer, Socket } from "net";
import { Server as ServerIO } from "socket.io";
import { verify } from "jsonwebtoken";
import { TOKEN_SECRET } from "../../backend/constants";
import { context } from "../../backend/context";
import moment from "moment";

type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: ServerIO;
    };
  };
};


export const config = {
  api: {
    bodyParser: false,
  },
};

const conversations = {}

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log("New Socket.io server...");
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: "/api/socketio",
    });
    io.on('connection', socket => {
      let user;
      // try {
      //   if (socket?.handshake?.auth?.token) {
      //     user = verify(socket.handshake.auth.token, TOKEN_SECRET) as any;
      //   }
      // } catch (err) {
      //   console.log('err ', err);
      //   return;
      // }

      // your sockets here
      console.log('IO_CONNECTION');
      socket.on('user_join', async (userId) => {
        socket.join(userId);
        socket.join('global_room');
      });
      socket.on('new_conversation', (conversation) => {
        conversation?.Paticipants?.forEach(p => {
          socket.to(p.userId).emit('new_conversation', conversation)
        });
      });
      socket.on('send_message', async (msg) => {
        await context.prisma.conversation.update({
          where: { id: msg.conversationId },
          data: {
            updatedAt: moment().toISOString(),
          },
        });
        msg.conversation?.Paticipants?.forEach(p => {
          socket.to(p.userId).emit('new_message', msg)
        })
      });
      socket.on('typing', (msg) => {
        socket.to(conversations[msg.conversationId]).emit('typing', msg);
      });
      socket.on('stop_typing', (msg) => {
        socket.to(conversations[msg.conversationId]).emit('stop_typing', msg);
      });
      io.on('disconnecting', (reason) => {
        console.log('disconnecting ');
        console.log('reason ', reason);
      })
    });
    res.socket.server.io = io;
  }
  res.end();
};
