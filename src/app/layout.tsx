"use client";
import React, { ReactNode, useState } from 'react';
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
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible);
  };

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
        <button 
          onClick={toggleChatbot} 
          style={{
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            zIndex: 1000,
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer'
          }}
        >
          {isChatbotVisible ? 'Hide Chatbot' : 'Show Chatbot'}
        </button>
        {isChatbotVisible && (
          <iframe
            height="430"
            width="350"
            src="https://console.dialogflow.com/api-client/demo/embedded/1f5969de-0161-489a-95b9-b8822a76fd57"
            style={{ 
              position: 'fixed', 
              bottom: '70px', 
              right: '20px', 
              border: 'none',
              zIndex: 999
            }}
          ></iframe>
        )}
      </body>
    </html>
  );
}

export default Layout;
