'use client';

import style from '@/styles/About.module.scss';

export default function AboutAnimation() {
  return (
    <>
      <div className={`relative flex h-[600px] items-center justify-center ${style.aboutRight}`}>
        <div className={`relative h-full w-full ${style.aboutContainer}`}>
          <div className={`absolute top-0 left-0 h-full w-full ${style.aboutRightBg}`} />
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`${style.aboutRightShape} ${style.aboutRightShape + index}`}
            />
          ))}
          <div className={style.aboutSkill}>
            <div className={style.aboutSkillItem}>HTML</div>
            <div className={style.aboutSkillItem}>CSS</div>
            <div className={style.aboutSkillItem}>JS</div>
            <div className={style.aboutSkillItem}>React</div>
          </div>
          <div
            className={`absolute top-[50%] left-[50%] w-[80%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[12px] ${style.aboutCode}`}
          >
            <div className={style.aboutCodeHeader}>
              {[...Array(3)].map((_, index) => (
                <div
                  className={style.aboutDot}
                  key={index}
                />
              ))}
            </div>
            <div className={style.aboutCodeContent}>
              <div className={style.aboutCodeLine}>
                <span className="keyword">const</span> {`publisher = {`}
              </div>
              <div className={style.aboutCodeLine}>
                name: <span className="string">'구원모'</span>,
              </div>
              <div className={style.aboutCodeLine}>
                role: <span className="string">'Web Publisher'</span>,
              </div>
              <div className={style.aboutCodeLine}>
                skills: [<span className="string">'HTML'</span>,<span className="string">'CSS'</span>,
                <span className="string">'JS'</span>],
              </div>
              <div className={style.aboutCodeLine}>
                passion: <span className="keyword">true</span>,
              </div>
              <div className={style.aboutCodeLine}>
                <span className="function">code</span>
                {`: () =>`}
                <span className="string">'🚀'</span>
              </div>
              <div className={style.aboutCodeLine}>
                ;<span className="cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
