// local fonts 사용
import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/pretendard/Pretendard-Thin.subset.woff2',
      weight: '100',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraLight.subset.woff2',
      weight: '200',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Light.subset.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Regular.subset.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Bold.subset.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraBold.subset.woff2',
      weight: '800',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Black.subset.woff2',
      weight: '900',
    },
  ],
  display: 'swap',
});
