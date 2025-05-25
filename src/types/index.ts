export interface MessageType {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  isEmergency?: boolean;
  links?: { text: string; url: string }[];
}

export interface ChatResponseType {
  keywords: string[];
  text: string;
  isEmergency: boolean;
  links?: { text: string; url: string }[];
}