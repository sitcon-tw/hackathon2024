'use client';
import '@/assets/styles/index.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';
import { useMobile } from '@/utils/RWD';

export default function RootLayout({ children }: RootLayoutProps) {
  const isMobile = useMobile();
  return (
    <html lang="en">
      <body>
        <Header />
        <Box
          marginLeft={isMobile ? '0%' : '3%'}
          marginRight={isMobile ? '0%' : '4%'}
          marginBottom="20vh"
        >
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  );
}
