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
import { ReactNode, useState } from 'react';

// style
import LayerModal from '@/component/common/LayerModal';
import { cn } from '@/lib/utils';
import style from '@/styles/Contact.module.scss';

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
    url: 'https://github.com/9Gu-Mo/React_Portfolio',
    desc: 'https://github.com/9Gu-Mo/React_Portfolio',
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
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isLayerOpen, setIsLayerOpen] = useState(false);

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

      <button
        type="button"
        onClick={() => setIsAlertOpen(true)}
      >
        오픈
      </button>
      <LayerModal
        type="layer"
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        title="알림"
        width={500}
      >
        처리가 성공적으로 완료되었습니다.
      </LayerModal>
    </>
  );
}
