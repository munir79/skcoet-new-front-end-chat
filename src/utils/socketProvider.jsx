"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { initSocket, disconnectSocket } from "@/lib/socket";

const SocketProvider = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) initSocket(token);

    return () => disconnectSocket();
  }, [token]);

  return children;
};

export default SocketProvider;