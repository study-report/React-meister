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

  const handleChat = (message: string) => {
    socket.emit("chat", { message, id: chatList.length, isMine: true });
    setChatList((prev) => [
      ...prev,
      { message, id: chatList.length, isMine: true },
    ]);
    // gpt api 가져와서 message의 내용을 답변 해주기
  };

  useEffect(() => {
    socket.on("chat", (message) => {
      console.log(message);
      setChatList((prev) => [
        ...prev,
        { ...message, id: chatList.length, isMine: false },
      ]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    chatListEndRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log(chatList);
  }, [chatList]);

  return (
    <div className="flex flex-col">
      <Header />
      <ChatView chatList={chatList} chatListEndRef={chatListEndRef} />
      <TextInput handleChat={handleChat} />
    </div>
  );
}
