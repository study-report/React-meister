import { Chat, chatGPTProfileImageSrc, userProfileImageSrc } from "@/fixture";
import Image from "next/image";
import classnames from "classnames";
import EditIcon from "@/Icons/EditIcon";
import EvaluationIcon from "@/Icons/EvaluationIcon";
import { RefObject } from "react";

interface ChatProps {
  chatList: Chat[];
  chatListEndRef: RefObject<HTMLDivElement>;
}

export default function Chat({ chatList, chatListEndRef }: ChatProps) {
  return (
    <div className="h-full">
      {chatList.map((chat) => (
        <ChatItem chat={chat} key={chat.id} />
      ))}
      <div ref={chatListEndRef} />
    </div>
  );
}

interface ChatItemProps {
  chat: Chat;
}

function ChatItem({ chat }: ChatItemProps) {
  return (
    <div
      className={classnames("p-4 flex items-start gap-4", {
        "border-b border-black/10": chat.isMine,
        "bg-[#444654]": !chat.isMine,
      })}
    >
      <Image
        width={30}
        height={30}
        src={chat.isMine ? userProfileImageSrc : chatGPTProfileImageSrc}
        alt="프로필 사진"
        className="rounded-sm"
      />
      <div className="flex flex-col w-full">
        <div>{chat.message}</div>
        <div className="flex justify-end">
          <div className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
            {chat.isMine ? (
              <EditIcon className="h-4 w-4" />
            ) : (
              <EvaluationIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
