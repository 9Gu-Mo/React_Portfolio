'use client';

// type
interface Props {
  id: string;
  icon: ReactNode;
  title: string;
  url: string;
  desc: string;
}

// react
import { ReactNode } from 'react';

// style
import IconGitHub from '@/component/icon/IconGitHub';
import IconMail from '@/component/icon/IconMail';
import IconPhone from '@/component/icon/IconPhone';
import style from '@/styles/Contact.module.scss';
import Link from 'next/link';

const contactArr: Props[] = [
  {
    id: 'email',
    icon: <IconMail size="30" />,
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
    icon: <IconPhone size="30" />,
    title: 'phone',
    url: 'tel:+821020621872',
    desc: '010-2062-1872',
  },
];

export default function Contact() {
  return (
    <>
      <ul className={`${style.contact} flex flex-wrap gap-8 md:flex-nowrap`}>
        {contactArr.map((item, index) => (
          <li
            key={item.id}
            className={`${style.contactItem} md:w-[calc((100%-40px)/3) min-h-[200px] w-full`}
            data-aos="fade-down"
            data-aos-duration={1000}
            data-aos-delay={100 * index}
          >
            <Link
              className="flex h-full flex-col items-center justify-center gap-6 rounded-[10px] border-1 p-8"
              target="_blank"
              href={item.url}
            >
              <div className={style.contactIcon}>{item.icon}</div>
              <b className="text-2xl">{item.title}</b>
              <span className="text-xl">{item.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
