import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, AlertTriangle, MapPin } from 'lucide-react';
import { useChatbot } from '../../hooks/useChatbot';
import { ChatMessage } from './ChatMessage';

export const ChatbotWidget: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { messages, sendMessage, isTyping, isOpen, toggleChat } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const quickResponses = [
    { text: 'Report hazard', icon: <AlertTriangle className="h-4 w-4" /> },
    { text: 'Emergency info', icon: <MapPin className="h-4 w-4" /> },
    { text: 'Safety tips', icon: null },
  ];

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className={`fixed z-50 bottom-6 right-6 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-600 rotate-90' : 'bg-blue-700 hover:bg-blue-800'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed z-40 bottom-24 right-6 w-full sm:w-96 bg-white rounded-lg shadow-xl transition-all duration-300 flex flex-col ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 150px)' }}
      >
        {/* Chat header */}
        <div className="bg-blue-700 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <h3 className="font-semibold">IndySafe Assistant</h3>
          </div>
          <button
            onClick={toggleChat}
            className="text-blue-100 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat messages */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4" style={{ maxHeight: '400px' }}>
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="bg-gray-200 rounded-full p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
              <span className="text-sm">Assistant is typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick responses */}
        <div className="px-4 py-2 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {quickResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => {
                  sendMessage(response.text);
                }}
                className="flex items-center space-x-1 text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
              >
                {response.icon && response.icon}
                <span>{response.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat input */}
        <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Type your message"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className={`p-2 rounded-full ${
                inputValue.trim() ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-300'
              } text-white transition-colors`}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};