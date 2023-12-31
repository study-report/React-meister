export const userProfileImageSrc =
  "https://avatars.githubusercontent.com/u/80014454?v=4";
export const chatGPTProfileImageSrc =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/240px-ChatGPT_logo.svg.png";

export interface Chat {
  id: number;
  isMine: boolean;
  message: string;
}

export const chatListFixture: Chat[] = [
  {
    id: 1,
    isMine: true,
    message: "여자친구 만드는 법",
  },
  {
    id: 2,
    isMine: false,
    message: `여자친구를 만들기 위해서는 다음과 같은 접근 방법을 고려할 수 있습니다:

    자기 자신을 발전시키세요: 자신을 사랑하고 존중하는 사람으로 성장하는 것이 중요합니다. 자신의 관심사나 취미를 개발하고, 자신감을 키우는 노력을 해보세요. 이를 통해 더욱 매력적인 사람으로 변화할 수 있습니다.
    
    사회적인 활동에 참여하세요: 친구들과의 모임, 동호회, 봉사활동 등 다양한 사회적인 활동에 참여해보세요. 이를 통해 새로운 사람들과의 인연을 만들 수 있으며, 그 중에서 여자친구를 만날 수도 있습니다.
    
    관심사에 맞는 그룹이나 동아리에 가입하세요: 자신의 관심사에 맞는 그룹이나 동아리에 참여하면, 공통된 관심사를 가진 사람들을 만날 수 있습니다. 이를 통해 자연스럽게 교류하고 친밀감을 형성할 수 있습니다.
    
    다양한 사람들과 대화하세요: 새로운 사람들과의 대화는 좋은 기회입니다. 다른 사람들과의 대화를 통해 서로를 이해하고 관계를 형성할 수 있습니다. 상대방에게 관심을 가지고 소통하려는 노력을 기울이세요.
    
    온라인 커뮤니티나 소셜 미디어를 활용하세요: 인터넷은 다양한 사람들과 연결되는 수단으로 사용될 수 있습니다. 관심사에 맞는 온라인 커뮤니티나 소셜 미디어 플랫폼에 참여하여 사람들과 교류하고 친밀감을 형성할 수 있습니다.
    
    자연스럽게 관계를 형성하세요: 여자친구를 만들기 위해 과도한 압력을 가하지 마세요. 관계는 자연스럽게 형성되어야 하며, 서로의 호감과 교류를 통해 발전해야 합니다.
    
    마지막으로, 여자친구를 만드는 것은 단기적인 목표보다는 지속적인 관계 형성을 위한 과정입니다. 진정한 연인 관계는 서로를 이해하고 존중하며, 서로의 성장을 도모하는 것에 중점을 두어야 합니다. 인연이 자연스럽게 찾아오기를 바라며, 기다리는 동안에도 자신을 사랑하고 존중하는 데 집중해보세요.`,
  },
  {
    id: 3,
    isMine: true,
    message: "우하하",
  },
  {
    id: 4,
    isMine: false,
    message:
      "웃음을 지으셨군요! 행복한 기분이 느껴지네요. 여자친구를 만들기 위해서는 긍정적인 에너지와 유머 감각을 가지는 것도 좋은 방법입니다. 웃음과 긍정적인 에너지는 다른 사람들과의 관계 형성에 도움이 될 수 있습니다. 자신의 개성과 유머 감각을 살려서 사람들과 함께 즐거운 시간을 보낼 수 있으면 여러 가지 기회를 만날 수 있을 겁니다. 웃음과 긍정은 매력을 높여주는 중요한 요소 중 하나이니까요!",
  },
];
