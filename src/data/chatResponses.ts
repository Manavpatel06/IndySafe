import { ChatResponseType } from '../types';

export const chatResponses: ChatResponseType[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    text: "Hello! I'm the IndySafe Assistant. How can I help you with public safety today?",
    isEmergency: false,
  },
  {
    keywords: ['hazard', 'report', 'dangerous'],
    text: "To report a hazard, you can use our reporting form. Would you like me to guide you through the process?",
    isEmergency: false,
    links: [{ text: 'Go to Hazard Reporting', url: '/hazards' }],
  },
  {
    keywords: ['emergency', 'urgent', 'help', '911'],
    text: "If this is a life-threatening emergency, please call 911 immediately. For non-emergency situations, you can reach Indianapolis Metropolitan Police at 317-327-3811.",
    isEmergency: true,
    links: [{ text: 'Emergency Resources', url: '/emergency' }],
  },
  {
    keywords: ['weather', 'storm', 'tornado', 'flood', 'heat'],
    text: "For current weather alerts and emergency weather information, please check our alerts page. During severe weather, seek shelter in an interior room on the lowest floor of your building, away from windows.",
    isEmergency: false,
    links: [{ text: 'Weather Alerts', url: '/alerts' }],
  },
  {
    keywords: ['fire', 'burning', 'smoke'],
    text: "If you're experiencing a fire emergency, evacuate immediately and call 911. Do not re-enter the building for any reason. If you're reporting a fire hazard, please provide details about the location and nature of the hazard.",
    isEmergency: true,
  },
  {
    keywords: ['flood', 'flooding', 'water'],
    text: "Flooding can be dangerous. Never walk or drive through flood waters. Six inches of moving water can knock you down, and one foot of water can sweep your vehicle away. If you're in a flood-prone area, move to higher ground.",
    isEmergency: true,
    links: [{ text: 'Flood Safety Tips', url: '/emergency' }],
  },
  {
    keywords: ['power', 'outage', 'electricity'],
    text: "For power outages, contact Indianapolis Power & Light (IPL) at 317-261-8111. Keep refrigerator and freezer doors closed, use flashlights instead of candles, and be cautious with generators (never use indoors or in enclosed spaces).",
    isEmergency: false,
  },
  {
    keywords: ['traffic', 'accident', 'crash', 'road'],
    text: "For traffic incidents, check our alerts page for major disruptions. If you're reporting an accident with injuries, please call 911. For non-injury accidents, you can call IMPD's non-emergency line at 317-327-3811.",
    isEmergency: false,
    links: [{ text: 'Traffic Alerts', url: '/alerts' }],
  },
  {
    keywords: ['medical', 'injury', 'hurt', 'ambulance'],
    text: "For medical emergencies, call 911 immediately. If you're seeking general medical advice, please contact your healthcare provider. I can provide information about emergency medical resources in Indianapolis.",
    isEmergency: true,
    links: [{ text: 'Medical Emergency Tips', url: '/emergency' }],
  },
  {
    keywords: ['alert', 'notification', 'subscribe'],
    text: "You can manage your emergency alert subscriptions through our alerts page. Receive notifications about severe weather, traffic incidents, and other emergencies affecting your area.",
    isEmergency: false,
    links: [{ text: 'Manage Alert Subscriptions', url: '/alerts' }],
  },
  {
    keywords: ['safety', 'tips', 'advice'],
    text: "We offer safety tips for various situations including severe weather, home safety, and emergency preparedness. Is there a specific type of safety information you're looking for?",
    isEmergency: false,
    links: [{ text: 'Safety Resources', url: '/emergency' }],
  },
  {
    keywords: ['contact', 'phone', 'call', 'number'],
    text: "Important contacts: Emergency: 911, IMPD Non-Emergency: 317-327-3811, IPL (Power): 317-261-8111, Citizens Energy (Gas/Water): 317-924-3311. Is there a specific department you're trying to reach?",
    isEmergency: false,
  },
  {
    keywords: ['prepare', 'kit', 'emergency kit'],
    text: "Every household should have an emergency kit with water (1 gallon per person per day), non-perishable food, flashlight, first aid supplies, medications, and important documents. Check your kit every six months to replace expired items.",
    isEmergency: false,
    links: [{ text: 'Emergency Preparedness', url: '/emergency' }],
  },
  {
    keywords: ['evacuation', 'evacuate', 'shelter'],
    text: "If you need to evacuate, take your emergency kit, secure your home, follow recommended evacuation routes, and go to designated shelters if necessary. Listen to local officials for specific instructions.",
    isEmergency: true,
  },
  {
    keywords: ['child', 'children', 'kid', 'kids', 'safety'],
    text: "For child safety concerns, ensure children know how to call 911, have emergency contacts memorized, and understand basic safety rules. If you're reporting a child in danger, please contact 911 or Child Protective Services at 1-800-800-5556.",
    isEmergency: false,
  },
  {
    keywords: ['pet', 'animal', 'dog', 'cat'],
    text: "Include pets in your emergency plans. Have carriers ready, ID tags updated, and supplies for each pet. Never leave pets behind during evacuations. For lost pets, contact Indianapolis Animal Care Services at 317-327-1397.",
    isEmergency: false,
  },
  {
    keywords: ['water', 'drinking', 'boil'],
    text: "If a boil water advisory is in effect, bring water to a rolling boil for at least 3 minutes before drinking or cooking. Use bottled water for brushing teeth. Check our alerts page for current advisories.",
    isEmergency: false,
    links: [{ text: 'Current Advisories', url: '/alerts' }],
  },
  {
    keywords: ['crime', 'suspicious', 'theft', 'break-in'],
    text: "To report suspicious activity or non-emergency crimes, call IMPD at 317-327-3811. For crimes in progress or emergencies, call 911. You can also submit anonymous tips through Crime Stoppers at 317-262-TIPS.",
    isEmergency: false,
  },
  {
    keywords: ['thanks', 'thank you'],
    text: "You're welcome! If you have any other questions about public safety in Indianapolis, feel free to ask. Stay safe!",
    isEmergency: false,
  },
];