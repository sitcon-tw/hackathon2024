import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import '~/globals.css';
import { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'SITCON Hackathon 2024'
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-NWJD4852" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWJD4852"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
