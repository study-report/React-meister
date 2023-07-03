export const userProfileImageSrc =
  "https://avatars.githubusercontent.com/u/80014454?v=4";
export const chatGPTProfileImageSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/240px-ChatGPT_logo.svg.png";

export interface Chat {
  id: number;
  isMe: boolean;
  content: string;
}

export const chatList: Chat[] = [
  {
    id: 1,
    isMe: true,
    content: "안녕하세요",
  },
  {
    id: 2,
    isMe: false,
    content: "안녕하세요",
  },
  {
    id: 3,
    isMe: true,
    content: "우하하",
  },
  {
    id: 4,
    isMe: false,
    content: "안녕하세요",
  },
];
