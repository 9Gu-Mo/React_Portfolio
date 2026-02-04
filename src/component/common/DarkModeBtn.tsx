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
      >
        <IconDark
          size="30px"
          color={theme === 'dark' ? '#fff' : '#000'}
        />
      </button>
    </>
  );
}
