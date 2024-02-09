"use client";
import { useAuthContext } from "@/context/AuthContext";
import React from "react";

const ChatBoard = () => {
  const { user } = useAuthContext();

  return <div>ChatBoard</div>;
};

export default ChatBoard;
