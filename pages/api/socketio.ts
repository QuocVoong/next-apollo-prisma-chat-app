import { NextApiRequest, NextApiResponse } from "next";
import { Server as NetServer, Socket } from "net";
import { Server as ServerIO } from "socket.io";
import { verify } from "jsonwebtoken";
import { TOKEN_SECRET } from "../../backend/constants";

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
      console.log('socket.auth ', socket?.auth?.token);
      let user;
      try {
        if (socket?.auth?.token) {
          user = verify(socket?.auth?.token, TOKEN_SECRET) as any;
        }
      } catch (err) {
        return;
      }

      // your sockets here
      console.log('IO_CONNECTION');
      socket.on('user_join', (conversationList) => {
        conversationList.forEach(con => {
          socket.join(con);
          conversations[con] = con;
        })
      });
      socket.on('send_message', (msg) => {
        socket.to(conversations[msg.conversationId]).emit('new_message', msg);
      });
    });
    res.socket.server.io = io;
  }
  res.end();
};
