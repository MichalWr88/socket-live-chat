import Server from './server';
import socket from './socketio';

export const server = new Server();

server
  .start()
  .then((serverListener) => {
    socket(serverListener, server.app);
  })
  .catch((err) => console.error(err));
