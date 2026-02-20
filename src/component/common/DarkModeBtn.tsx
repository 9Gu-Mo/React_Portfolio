'use client';

// component
import IconDark from '@/component/icon/IconDark';

// store
import { useThemeStore } from '@/stores/useThemeStore';

export default function DarkModeBtn() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="btn-darkmode fixed right-8 bottom-8 z-50 flex h-[40px] w-[40px] items-center justify-center rounded-full"
        aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
        aria-pressed={theme === 'dark'}
      >
        <IconDark
          size={30}
          color={theme === 'dark' ? '#fff' : '#000'}
          aria-hidden="true"
        />
      </button>
    </>
  );
}
