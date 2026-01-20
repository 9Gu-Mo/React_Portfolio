import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark';

interface Props {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<Props>()(
  persist(
    (set, get) => ({
      theme: 'light',

      setTheme: (theme) => {
        if (typeof window === 'undefined') return;

        const html = document.documentElement;

        if (theme === 'dark') {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }

        set({ theme });
      },

      toggleTheme: () => {
        if (typeof window === 'undefined') return;

        const { theme } = get();
        const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

        document.documentElement.classList.toggle('dark', nextTheme === 'dark');
        set({ theme: nextTheme });
      },
    }),
    {
      name: 'theme-storage',
    },
  ),
);
