// types
import type { Metadata, Viewport } from 'next';

// next

// layout
import MainLayout from '@/component/layout/MainLayout';

// style & font
import { pretendard } from '@/app/fonts';
import '@/styles/globals.scss';

// providers
import AOSProvider from '@/app/providers/AOSProvider';
import DeviceDetector from '@/component/DeviceDetector';

export const metadata: Metadata = {
  title: 'GWM Portfolio',
  description: '웹 퍼블리셔 구원모 포트폴리오',

  // 오픈그래프
  openGraph: {
    title: 'GWM Portfolio',
    description: '웹 퍼블리셔 구원모 포트폴리오',
    url: 'https://react-portfolio-iota-ten-41.vercel.app',
    siteName: 'GWM Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1920,
        height: 1080,
        alt: 'GWM Portfolio OG Image',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${pretendard.className} overflow-x-hidden`}
    >
      <body>
        <AOSProvider>
          <DeviceDetector />
          <MainLayout>{children}</MainLayout>
        </AOSProvider>
      </body>
    </html>
  );
}
