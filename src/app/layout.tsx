import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
        <iframe
          height="430"
          width="350"
          src="https://console.dialogflow.com/api-client/demo/embedded/1f5969de-0161-489a-95b9-b8822a76fd57"
          style={{ position: 'fixed', bottom: '20px', right: '20px', border: 'none' }}
        ></iframe>
      </body>
    </html>
  );
}

export default Layout;
