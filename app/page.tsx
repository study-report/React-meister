"use client";

import ChatView from "@/components/Chat";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import { Chat } from "@/fixture";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001");

export default function Home() {
  const [chatList, setChatList] = useState<Chat[]>([]);
  const chatListEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("chat", (message) => {
      setChatList((prev) => [
        ...prev,
        { ...message, id: chatList.length, isMine: false },
      ]);
    });
  }, [chatList.length]);

  const handleChat = (message: string) => {
    socket.emit("chat", { message, id: chatList.length, isMine: true });
    setChatList((prev) => [
      ...prev,
      { message, id: chatList.length, isMine: true },
    ]);
    // gpt api 가져와서 message의 내용을 답변 해주기
  };

  useEffect(() => {
    chatListEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  return (
    <div className="flex flex-col">
      <Header />
      <ChatView chatList={chatList} chatListEndRef={chatListEndRef} />
      <TextInput handleChat={handleChat} />
    </div>
  );
}
