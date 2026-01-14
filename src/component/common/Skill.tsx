import IconFigma from '@/component/icon/IconFigma';
import IconGitLab from '@/component/icon/IconGitLab';
import IconHtml from '@/component/icon/IconHtml';
import IconJira from '@/component/icon/IconJira';
import IconJquery from '@/component/icon/IconJquery';
import IconJs from '@/component/icon/IconJs';
import IconPs from '@/component/icon/IconPs';
import IconReact from '@/component/icon/IconReact';
import IconSass from '@/component/icon/IconSass';
import IconSlack from '@/component/icon/IconSlack';

export default function Skill() {
  return (
    <>
      <div className="flex">
        <IconReact />
        <IconHtml />
        <IconSass />
        <IconFigma />
        <IconPs />
        <IconJira />
        <IconGitLab />
        <IconJquery />
        <IconSlack />
        <IconJs />
      </div>
    </>
  );
}
