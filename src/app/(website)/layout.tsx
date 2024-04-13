import '@/assets/styles/index.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
