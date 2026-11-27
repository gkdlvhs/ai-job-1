// API 키는 이 파일에 쓰지 않습니다. (Vercel 환경변수에만 넣어요)
const CONFIG = {

  botName: "내 챗봇 이름",
  tagline: "한 줄 소개",
  greeting: "안녕하세요! 무엇이 궁금하세요?",
  examples: [
    "예시 질문 1",
    "예시 질문 2",
    "예시 질문 3"
  ],

  role: `
너는 '(챗봇 이름)'이야.
(누구를 위한 챗봇인지 적어 주세요)
`,

  tone: `
- 친근한 해요체로 말한다.
- 5문장 이내로 답하고, 마지막에 질문 하나를 한다.
`,

  rules: `

`,

  // 채용 공고와 기관 정보는 jobs.js에 있습니다. 여기에는 그 밖의 참고 정보만 둡니다.
  knowledge: `

`,

  // 꾸미기 (웹 교재 꾸미기 페이지에서 고른 값)
  theme: {
    color: "#2563eb",
    avatar: "",
    header: "line",
    background: "plain",
    bubble: "round"
  }
};

    bubble: "round"        // 말풍선: round(둥근) / square(각진) / pill(알약)
  }
};
