import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `당신은 웹퍼블리셔 구원모의 포트폴리오 AI 어시스턴트입니다.
방문자가 구원모에 대해 궁금한 것을 질문하면 친절하게 답해주세요.

[구원모 정보]
- 직무: 웹퍼블리셔 (경력 5년)
- 기술 스택: HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue3, SCSS
- 주요 프로젝트: CGV 디지털 시스템 리빌드
- 답변은 2~3문장으로 간결하게, 한국어로 해주세요.`;

export async function POST(req: NextRequest) {
  console.log('API KEY:', process.env.GEMINI_API_KEY);
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash-latest',
      systemInstruction: SYSTEM_PROMPT,
    });

    const history = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const lastMessage = messages[messages.length - 1].content;

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage);
    const text = result.response.text();

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Gemini API error:', error);
    return new Response(JSON.stringify({ text: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
