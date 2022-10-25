import SocketIOClient from "socket.io-client";

const socket = SocketIOClient.connect(process.env.BASE_URL, {
  path: "/api/socketio",
  autoConnect: false,
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

const disconnect = () => {
  socket && socket.disconnect();
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
