// import { io } from "socket.io-client";
// import { baseUriBackend } from "./url";

// export const socket=io(baseUriBackend,{
//     autoConnect:false,
// })


import { io } from "socket.io-client";

let socket = null;

// Initialize socket with JWT
export const initSocket = (token) => {
  if (!token) return;

  if (!socket) {
    socket = io("http://localhost:5000", {
      auth: { token },
      autoConnect: true,
    });

    socket.on("connect", () => console.log("🔌 Socket connected:", socket.id));
    socket.on("disconnect", () => console.log("❌ Socket disconnected"));
  }

  return socket;
};

// Get the existing socket instance
export const getSocket = () => socket;

// Disconnect manually
export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};