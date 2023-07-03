import {
  Chat,
  chatGPTProfileImageSrc,
  chatList,
  userProfileImageSrc,
} from "@/fixture";
import Image from "next/image";
import classnames from "classnames";
import EditIcon from "@/Icon/EditIcon";
import EvaluationIcon from "@/Icon/EvaluationIcon";

export default function Chat() {
  return (
    <div className="">
      {chatList.map((chat) => (
        <ChatItem chat={chat} />
      ))}
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
        "border-b border-black/10": chat.isMe,
        "bg-[#444654]": !chat.isMe,
      })}
    >
      <Image
        width={30}
        height={30}
        src={chat.isMe ? userProfileImageSrc : chatGPTProfileImageSrc}
        alt="프로필 사진"
        className="rounded-sm"
      />
      <div className="flex flex-col w-full">
        <div>{chat.content}</div>
        <div className="flex justify-end">
          <div className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
            {chat.isMe ? <EditIcon className="h-4 w-4" /> : <EvaluationIcon />}
          </div>
        </div>
      </div>
    </div>
  );
}
