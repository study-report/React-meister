"use client";

import SendIcon from "@/Icons/SendIcon";
import { chatList } from "@/fixture";
import { useState } from "react";

export default function TextInput() {
  const [inputText, setInputText] = useState("");
  const handleSend = () => {
    chatList.push({
      content: inputText,
      isMe: true,
      id: chatList[chatList.length - 1].id + 1,
    });
  };
  return (
    <div className="w-full sticky bottom-0 pt-2 bg-[#343541] border-t border-white/20">
      <div className="mx-2 relative flex h-full flex-1 items-stretch md:flex-col flex-col">
        <input
          type="text"
          className="bg-[#40414F] rounded-xl pl-3 pr-10 py-2.5 focus:outline-none"
          onChange={(e) => setInputText(e.target.value)}
        />
        <SendIcon
          className="h-4 w-4 m-1 absolute top-[11px] right-3"
          onClick={handleSend}
        />
      </div>
      <p className="px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3">
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts. ChatGPT May 24 Version
      </p>
    </div>
  );
}
