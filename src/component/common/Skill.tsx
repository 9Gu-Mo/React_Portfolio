// type
interface Props {
  id: string;
  icon: ReactNode;
  title: string;
  desc: string;
  skill: string[];
}

// react
import { ReactNode } from 'react';

// style
import style from '@/styles/Skill.module.scss';

// component
import IconSkillDesign from '@/component/icon/IconSkillDesign';
import IconSkillDevelop from '@/component/icon/IconSkillDevelop';
import IconSkillFramework from '@/component/icon/IconSkillFramework';
import IconSkillJavascript from '@/component/icon/IconSkillJavascript';
import IconSkillMarkup from '@/component/icon/IconSkillMarkup';

const skillArr: Props[] = [
  {
    id: 'markup',
    icon: <IconSkillMarkup />,
    title: 'Markup & Styling',
    desc: '시맨틱 마크업과 접근성을 고려한 구조적인 HTML 작성. CSS3, Flexbox, Grid를 활용한 레이아웃 구현',
    skill: ['HTML5', 'CSS3', 'SASS/SCSS(module)', 'Styled-Components', 'tailwind'],
  },
  {
    id: 'javascript',
    icon: <IconSkillJavascript />,
    title: 'JavaScript',
    desc: 'ES6+ 문법을 활용한 인터랙티브한 UI 구현. DOM 조작 및 이벤트 핸들링 처리',
    skill: ['Javascript(ES6)', 'Typescript'],
  },
  {
    id: 'Framework',
    icon: <IconSkillFramework />,
    title: 'Framework & Library',
    desc: 'React, Next.js를 활용한 컴포넌트 기반 UI 개발. 상태 관리 및 라우팅 구현 경험',
    skill: ['React', 'Next.js', 'jQuery', 'Vue'],
  },
  {
    id: 'Design',
    icon: <IconSkillDesign />,
    title: 'Design Tools',
    desc: 'Figma, Adobe XD를 활용한 디자인 시안 분석 및 정확한 UI 구현. 디자이너와의 원활한 협업',
    skill: ['Adobe PhotoShop', 'Adobe XD', 'Figma'],
  },
  {
    id: 'Development',
    icon: <IconSkillDevelop />,
    title: 'Version Control System',
    desc: '버전 관리 시스템을 활용한 협업 및 코드 형상 관리. 브랜치 전략을 통한 효율적인 개발 워크플로우 구축',
    skill: ['Git', 'GitLab', 'GitHub', 'SVN'],
  },
];

export default function Skill() {
  return (
    <>
      <ul className={`${style.skill} flex flex-wrap gap-8`}>
        {skillArr.map((item, index) => (
          <li
            key={item.id}
            id={item.id}
            className={`${style.skillItem} min-h-[250px] w-full md:w-[calc((100%-40px)/3)]`}
            data-aos="fade-down"
            data-aos-duration={1000}
            data-aos-delay={10 * index}
          >
            <div className="flex h-full flex-col gap-6 rounded-[10px] border-1 p-8">
              <span
                className={`${style.skillIcon} block flex h-[50px] w-[50px] items-center justify-center rounded-[10px] p-2`}
              >
                {item.icon}
              </span>
              <strong className="text-3xl">{item.title}</strong>
              <p className="text-2xl">{item.desc}</p>
              <ul className="flex flex-wrap items-start gap-4">
                {item.skill.map((item, index) => (
                  <li
                    className={`${style.skillTag} rounded-xl px-3 py-2 text-xl`}
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
