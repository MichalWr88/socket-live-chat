import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", (socket) => {npm create vite@latest my-vue-app --template vue
  // send a message to the client
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("hello from client", (...args) => {
    // ...
  });
});