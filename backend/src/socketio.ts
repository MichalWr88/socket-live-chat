import * as http from "http";
import * as express from "express";
import { Server, Socket } from "socket.io";
import { MainEvents } from "../../shared/models/socketEvents";
import { workspaceList } from "../../shared/models/channelsModels";

const socket = (server: http.Server, app: express.Application): void => {
  const io = new Server(server, {
    path: "/socket.io",
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  app.set("io", io);
  io.on("connection", (socket: Socket) => {
    const req = socket.request;
    const ip = req.headers["X-forwarded-for"] || req.socket.remoteAddress;
    console.log("client connected!", ip, socket.id);

    socket.on("message", (data) => {
      socket.emit("message", { response: data });
    });
    socket.on("error", (error) => {
      console.error(error);
    });
    socket.on("disconnect", () => {
      console.log("client disconnected", ip, socket.id);
    });
    socket.emit<MainEvents>("list", workspaceList);
  });
};

export default socket;
