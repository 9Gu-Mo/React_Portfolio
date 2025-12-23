import { create } from 'zustand';

interface HeaderState {
  isPassedTarget: boolean;
  setIsPassedTarget: (value: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  isPassedTarget: false,
  setIsPassedTarget: (value) => set({ isPassedTarget: value }),
}));
