import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { MessageType } from '../types';
import { chatResponses } from '../data/chatResponses';

interface ChatContextType {
  messages: MessageType[];
  sendMessage: (text: string) => void;
  isTyping: boolean;
  isOpen: boolean;
  toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '1',
      text: "Hello! I'm the IndySafe Assistant. How can I help you with public safety today?",
      sender: 'bot',
      timestamp: new Date().toISOString(),
      isEmergency: false,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Process user message and generate response
  const sendMessage = async (text: string) => {
    const userMessage: MessageType = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Find appropriate response based on user input
    const lowerText = text.toLowerCase();
    
    // Check if it's an emergency-related query
    const isEmergencyQuery = 
      lowerText.includes('emergency') || 
      lowerText.includes('help') || 
      lowerText.includes('urgent') ||
      lowerText.includes('danger') ||
      lowerText.includes('911');

    // Look for matching responses
    let responseFound = false;
    let botResponse: MessageType | null = null;

    for (const response of chatResponses) {
      for (const keyword of response.keywords) {
        if (lowerText.includes(keyword)) {
          botResponse = {
            id: Date.now().toString(),
            text: response.text,
            sender: 'bot',
            timestamp: new Date().toISOString(),
            isEmergency: response.isEmergency || isEmergencyQuery,
            links: response.links,
          };
          responseFound = true;
          break;
        }
      }
      if (responseFound) break;
    }

    // If no predefined response found, use AI to generate a contextual response
    if (!botResponse) {
      const aiResponse = await generateAIResponse(text, isEmergencyQuery);
      botResponse = {
        id: Date.now().toString(),
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date().toISOString(),
        isEmergency: isEmergencyQuery,
      };
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse!]);
      setIsTyping(false);
    }, 1000);
  };

  const generateAIResponse = async (text: string, isEmergency: boolean): Promise<string> => {
    // Simulate AI response generation
    const commonResponses = [
      "I understand your concern. Could you provide more details about the situation?",
      "I'm here to help. Let me guide you through the available resources.",
      "Your safety is our priority. Here's what you can do in this situation:",
      "I can help you with that. Would you like information about specific safety measures?",
    ];

    const emergencyResponses = [
      "This sounds like an emergency situation. Please call 911 immediately if you or others are in immediate danger.",
      "Your safety is critical. Have you contacted emergency services? If not, please call 911 right away.",
      "This requires immediate attention. While I can provide information, please ensure you've contacted emergency services first.",
    ];

    // Simulate response delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return isEmergency 
      ? emergencyResponses[Math.floor(Math.random() * emergencyResponses.length)]
      : commonResponses[Math.floor(Math.random() * commonResponses.length)];
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, isTyping, isOpen, toggleChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatbot = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatProvider');
  }
  return context;
};