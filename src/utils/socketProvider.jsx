"use client";

import { useEffect } from "react";
import { disconnectSocket, initSocket } from "./socket";
// import { initSocket, disconnectSocket } from "@/lib/socket";

const SocketProvider = ({ children }) => {

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      initSocket(token);
    }

    return () => {
      disconnectSocket();
    };
  }, []);

  return children;
};

export default SocketProvider;