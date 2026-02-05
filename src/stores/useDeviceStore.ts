import { create } from 'zustand';

type DeviceType = 'mobile' | 'desktop';

interface Props {
  deviceType: DeviceType;
  isMobile: boolean;
  isDesktop: boolean;
  detectDevice: () => void;
}

export const useDeviceStore = create<Props>((set) => ({
  deviceType: 'desktop',
  isMobile: false,
  isDesktop: true,

  detectDevice: () => {
    if (typeof window === 'undefined') return;

    const width = window.innerWidth;
    const isMobile = width < 768;

    set({
      deviceType: isMobile ? 'mobile' : 'desktop',
      isMobile,
      isDesktop: !isMobile,
    });
  },
}));
