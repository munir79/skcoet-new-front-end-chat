import { io } from "socket.io-client";
import { baseUriBackend } from "./url";

let socket = null;

// Connect socket
export const initSocket = (token) => {
  const url=baseUriBackend
  if (!socket) {
    socket = io(url, {
      auth: {
        token, // send JWT to backend
      },
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log(" Socket connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  }
};

// Get socket instance
export const getSocket = () => socket;

// Disconnect socket
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};