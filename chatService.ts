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

const sendMessage = (message) => {
  socket && socket.emit('send_message', message);
};

const disconnect = () => {
  socket && socket.disconnect();
};

const sendTyping = (message) => {
  socket && socket.emit('typing', message);
};

const sendStopTyping = (message) => {
  socket && socket.emit('stop_typing', message);
};

export {
  connect,
  disconnect,
  sendMessage,
  sendTyping,
  sendStopTyping,
};
