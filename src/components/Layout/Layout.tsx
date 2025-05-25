import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ChatbotWidget } from '../Chatbot/ChatbotWidget';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <ChatbotWidget />
      <Footer />
    </div>
  );
};