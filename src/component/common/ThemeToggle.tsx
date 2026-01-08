// component
import IconDark from '@/component/icon/IconDark';

// store
import { useThemeStore } from '@/stores/useThemeStore';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      type="button"
      onClick={toggleTheme}
    >
      <IconDark
        size="30px"
        color={theme === 'dark' ? '#fff' : '#000'}
      />
    </button>
  );
}
