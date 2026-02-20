'use client';

// component
import IconArrowUp from '@/component/icon/IconArrowUp';
import { motion } from 'framer-motion';

// store
import { useHeaderStore } from '@/stores/useHeaderStore';
import { useThemeStore } from '@/stores/useThemeStore';

export default function FloatUpBtn() {
  const { theme, toggleTheme } = useThemeStore();
  const isPassedTarget = useHeaderStore((state) => state.isPassedTarget);
  const handleClick = () => {
    window.scroll({ top: 0 });
  };

  return (
    <>
      <motion.button
        className={`btn-darkmode fixed right-8 bottom-30 z-50 flex h-[40px] w-[40px] items-center justify-center rounded-full ${isPassedTarget ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClick}
        aria-label="페이지 맨 위로 이동"
      >
        <IconArrowUp
          size={20}
          color={theme === 'dark' ? '#fff' : '#000'}
          aria-hidden="true"
        />
      </motion.button>
    </>
  );
}
