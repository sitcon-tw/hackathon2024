import '@/assets/styles/index.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SITCON hackathon 2024',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Box marginLeft='3%' marginRight='4%' marginBottom='20vh'>
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  );
}
