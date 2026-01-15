import IconFigma from '@/component/icon/IconFigma';
import IconGitHub from '@/component/icon/IconGitHub';
import IconGitLab from '@/component/icon/IconGitLab';
import IconHtml from '@/component/icon/IconHtml';
import IconJira from '@/component/icon/IconJira';
import IconJquery from '@/component/icon/IconJquery';
import IconJs from '@/component/icon/IconJs';
import IconNext from '@/component/icon/IconNext';
import IconPs from '@/component/icon/IconPs';
import IconReact from '@/component/icon/IconReact';
import IconSass from '@/component/icon/IconSass';
import IconSlack from '@/component/icon/IconSlack';
import IconTs from '@/component/icon/IconTs';
import IconVite from '@/component/icon/IconVite';
import IconVue from '@/component/icon/IconVue';
import IconZustand from '@/component/icon/IconZustand';

export default function Skill() {
  return (
    <>
      <div className="flex gap-4">
        {/* DEV */}
        <IconReact />
        <IconJs />
        <IconTs />
        <IconJquery />
        <IconNext />
        <IconVue />
        <IconZustand />
        <IconVite />

        {/* PUB */}
        <IconHtml />
        <IconSass />

        {/* TOOL & WORKFLOW */}
        <IconFigma />
        <IconPs />
        <IconJira />
        <IconGitLab />
        <IconGitHub />
        <IconSlack />
      </div>
    </>
  );
}
