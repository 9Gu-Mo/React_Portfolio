import { create } from 'zustand';

export type Theme = 'light' | 'dark';

interface Props {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<Props>((set) => ({
  theme: 'light',

  setTheme: (theme) => {
    const html = document.documentElement;

    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
    set({ theme });
  },

  toggleTheme: () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    const nextTheme: Theme = isDark ? 'light' : 'dark';

    html.classList.toggle('dark');
    localStorage.setItem('theme', nextTheme);
    set({ theme: nextTheme });
  },
}));
