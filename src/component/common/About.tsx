'use client';

interface Props {
  desc: string;
}

const about: Props[] = [
  {
    desc: 'React 및 Next.js 환경에서의 퍼블리싱 경험을 바탕으로 컴포넌트 구조에 맞춘 마크업과 스타일링을 수행해왔습니다. props, children 등 컴포넌트 설계를 이해하고, TypeScript 기반의 타입 구조를 고려하여 상태 변화에 따른 UI 분기와 예외 케이스를 반영한 유지보수 중심의 마크업을 지향합니다.',
  },
  {
    desc: '웹 표준과 웹 접근성을 준수하며 사용자 경험을 최우선으로 생각합니다. HTML5, CSS3, JavaScript를 기반으로 반응형 웹사이트를 제작하고, 프로젝트 특성에 맞는 프레임워크와 도구를 활용해 퍼블리싱 효율과 완성도를 함께 높여왔습니다.',
  },
  {
    desc: '디자인과 개발 사이에서 가교 역할을 수행하며, 디자이너의 의도를 정확하게 구현하고 개발자와의 원활한 협업을 통해 일관성 있고 확장 가능한 UI를 만드는 데 기여해왔습니다.',
  },
];

// component
import AboutAnimation from '@/component/common/AboutAnimation';

// style
import style from '@/styles/About.module.scss';

export default function About() {
  return (
    <>
      <div className={style.about}>
        <div className="flex flex-wrap gap-15 md:flex-nowrap">
          <div
            className={`${style.aboutCon} flex w-full flex-col gap-14 md:w-1/2`}
            data-aos="fade-up"
            data-aos-duration={1200}
          >
            <h3 className="text-4xl">
              안녕하세요, <strong>5년차 웹 퍼블리셔</strong> 구원모입니다.
            </h3>
            <ul className="flex flex-col gap-14">
              {about.map((item, index) => (
                <li
                  key={index}
                  className="text-3xl"
                >
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>
          <AboutAnimation />
        </div>
      </div>
    </>
  );
}
