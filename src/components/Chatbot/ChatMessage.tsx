import React from 'react';
import { MessageType } from '../../types';
import { User, Bot, AlertTriangle } from 'lucide-react';

interface ChatMessageProps {
  message: MessageType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        <div className="flex items-start space-x-2">
          {!isUser && (
            <div className="flex-shrink-0 mt-1">
              {message.isEmergency ? (
                <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
              ) : (
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-blue-700" />
                </div>
              )}
            </div>
          )}
          
          <div className={`space-y-1 ${!isUser ? 'ml-2' : ''}`}>
            {message.links && message.links.length > 0 && (
              <div className="mt-2 space-y-1">
                {message.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-sm ${
                      isUser ? 'text-blue-200 hover:text-white' : 'text-blue-600 hover:text-blue-800'
                    } underline`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
            
            <p className={`text-sm ${isUser ? 'text-right' : ''}`}>{message.text}</p>
            
            {message.timestamp && (
              <p className={`text-xs ${isUser ? 'text-blue-300' : 'text-gray-500'}`}>
                {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            )}
          </div>
          
          {isUser && (
            <div className="flex-shrink-0 mt-1">
              <div className="h-8 w-8 bg-blue-700 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};