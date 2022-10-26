import SocketIOClient from "socket.io-client";
import { WS_URI } from "./lib/apolloClient";

const socket = SocketIOClient.connect(WS_URI, {
  path: "/api/socketio",
  // autoConnect: false,
  auth: {},
});

const connect = (token) => {
  socket.auth.token = token;
  socket.connect();

  return socket
};

const addNewConversation = (message) => {
  socket && socket.emit('new_conversation', message);
};

const sendMessage = (message) => {
  socket && socket.emit('send_message', message);
};

const disconnect = (message) => {
  socket && socket.disconnect(message);
};

const sendTyping = (message) => {
  console.log('sendTyping ');
  socket && socket.emit('typing', message);
};

const sendStopTyping = (message) => {
  socket && socket.emit('stop_typing', message);
};

export {
  connect,
  disconnect,
  addNewConversation,
  sendMessage,
  sendTyping,
  sendStopTyping,
};
