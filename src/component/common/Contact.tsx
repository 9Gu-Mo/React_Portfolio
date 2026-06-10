'use client';

// type
interface Props {
  id: string;
  icon: ReactNode;
  title: string;
  url: string;
  desc: string;
}

// component
import IconGitHub from '@/component/icon/IconGitHub';
import IconMail from '@/component/icon/IconMail';
import IconPhone from '@/component/icon/IconPhone';

// next
import Link from 'next/link';

// react
import { ReactNode, useRef, useState } from 'react';

// style
import { cn } from '@/lib/utils';
import style from '@/styles/Contact.module.scss';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const contactArr: Props[] = [
  {
    id: 'email',
    icon: <IconMail size={30} />,
    title: 'EMAIL',
    url: 'mailto:wonmo.gu09@gmail.com',
    desc: 'wonmo.gu09@gmail.com',
  },
  {
    id: 'github',
    icon: <IconGitHub size={30} />,
    title: 'GITHUB',
    url: 'https://github.com/9Gu-Mo',
    desc: 'https://github.com/9Gu-Mo',
  },
  {
    id: 'phone',
    icon: <IconPhone size={30} />,
    title: 'phone',
    url: 'tel:+821020621872',
    desc: '010-2062-1872',
  },
];

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = data.text;
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ul
        className={cn('flex flex-wrap gap-8 md:flex-nowrap', style.contact)}
        aria-label="연락처"
      >
        {contactArr.map((item, index) => (
          <li
            key={item.id}
            className={cn('md:w-[calc((100%-40px)/3) min-h-[200px] w-full', style.contactItem)}
            data-aos="fade-down"
            data-aos-duration={1000}
            data-aos-delay={100 * index}
          >
            <Link
              className="flex h-full flex-col items-center justify-center gap-6 rounded-[10px] border-1 p-8"
              target="_blank"
              href={item.url}
              rel="noopener noreferrer"
              aria-label={`${item.title}: ${item.desc}`}
            >
              <div
                className={style.contactIcon}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <b className="text-2xl">{item.title}</b>
              <span className="text-xl">{item.desc}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <h3 className="mb-4 text-lg font-medium">저에 대해 궁금한 게 있으신가요?</h3>

        <div className="rounding-lg mb-3 flex h-64 flex-col gap-3 overflow-y-auto border p-4">
          {messages.length === 0 && <p className="text-gray-400">예? "CGV 프로젝트에서 어떤 역할을 하셨나요?"</p>}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                msg.role === 'user' ? 'self-end bg-blue-500 text-white' : 'self-start bg-gray-100 dark:bg-gray-800'
              }`}
            >
              {msg.content || (isLoading ? '▌' : '')}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="질문을 입력해주세요"
            className="flex-1 rounded-lg border px-4 py-2 outline-none"
          />

          <button
            onClick={sendMessage}
            disabled={isLoading}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
          >
            전송
          </button>
        </div>
      </div>
    </>
  );
}
