'use client';

import { useDeviceStore } from '@/stores/useDeviceStore';
import { useEffect } from 'react';

export default function DeviceDetector() {
  const detectDevice = useDeviceStore((state) => state.detectDevice);

  useEffect(() => {
    detectDevice(); // 초기 감지

    const handleResize = () => detectDevice();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [detectDevice]);

  return null;
}
