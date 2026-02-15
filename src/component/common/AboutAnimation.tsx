'use client';

// style
import style from '@/styles/About.module.scss';

export default function AboutAnimation() {
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration={1200}
        data-aos-delay={300}
        className={`relative flex h-[600px] w-full items-center justify-center md:w-1/2 ${style.aboutRight}`}
      >
        <div className={`relative h-full w-full ${style.aboutContainer}`}>
          <div className={`absolute top-0 left-0 h-full w-full ${style.aboutRightBg}`} />
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`absolute rounded-[50%] opacity-40 blur-[40px] ${style.aboutRightShape} ${style[`aboutRightShape${index + 1}`]}`}
            />
          ))}
          <div className={`absolute h-full w-full ${style.aboutSkill}`}>
            <div
              className={`absolute top-[15%] left-[15%] flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#13151a] text-xl font-bold text-[#4f9eff] [animation-delay:0s] ${style.aboutSkillItem}`}
            >
              HTML
            </div>
            <div
              className={`absolute top-[25%] right-[20%] flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#13151a] text-xl font-bold text-[#4f9eff] [animation-delay:1s] ${style.aboutSkillItem}`}
            >
              SCSS
            </div>
            <div
              className={`absolute bottom-[25%] left-[10%] flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#13151a] text-xl font-bold text-[#4f9eff] [animation-delay:2s] ${style.aboutSkillItem}`}
            >
              JS
            </div>
            <div
              className={`absolute right-[15%] bottom-[15%] flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#13151a] text-xl font-bold text-[#4f9eff] [animation-delay:1.5s] ${style.aboutSkillItem}`}
            >
              React
            </div>
          </div>
          <div
            className={`absolute top-[50%] left-[50%] w-full max-w-[500px] overflow-hidden rounded-[12px] md:w-[80%] ${style.aboutCode}`}
          >
            <div className={`flex items-center gap-4 p-6 ${style.aboutCodeHeader}`}>
              {[...Array(3)].map((_, index) => (
                <div
                  className={`h-[12px] w-[12px] rounded-[12px] ${index === 0 ? 'bg-[#ff5f57]' : index === 1 ? 'bg-[#ffbd2e]' : 'bg-[#28c840]'} ${style.aboutDot}`}
                  key={index}
                />
              ))}
            </div>
            <div className={`flex flex-col gap-1 p-6 text-2xl ${style.aboutCodeContent}`}>
              <div className={style.aboutCodeLine}>
                <span className="keyword text-[#9b59ff]">const</span> {`publisher = {`}
              </div>
              <div className={style.aboutCodeLine}>
                name: <span className="string text-[#ff4f9a]">'구원모'</span>,
              </div>
              <div className={style.aboutCodeLine}>
                role: <span className="string text-[#ff4f9a]">'Web Publisher'</span>,
              </div>
              <div className={style.aboutCodeLine}>
                skills: [<span className="string text-[#ff4f9a]">'React'</span>,
                <span className="string text-[#ff4f9a]">'HTML'</span>,
                <span className="string text-[#ff4f9a]">'SCSS'</span>,
                <span className="string text-[#ff4f9a]">'JS'</span>
                ],
              </div>
              <div className={style.aboutCodeLine}>
                years: <span className="keyword text-[#9b59ff]">5년+</span>,
              </div>
              <div className={style.aboutCodeLine}>
                <span className="function text-[#4f9eff]">code</span>
                {`: () =>`}
                <span className="string text-[#ff4f9a]">'🚀'</span>
              </div>
              <div className={`flex items-end gap-2 ${style.aboutCodeLine}`}>
                ;<span className={`inline-block h-[16px] w-[1px] bg-[#4f9eff] ${style.aboutCodeCursor}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
