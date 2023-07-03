"use client";

import ChatView from "@/components/Chat";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import { Chat, chatListFixture } from "@/fixture";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [chatList, setChatList] = useState<Chat[]>(chatListFixture);
  const chatListEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatListEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  return (
    <div className="flex flex-col">
      <Header />
      <ChatView chatList={chatList} chatListEndRef={chatListEndRef} />
      <TextInput setChatList={setChatList} />
    </div>
  );
}
