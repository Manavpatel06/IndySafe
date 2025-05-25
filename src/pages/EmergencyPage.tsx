import React from 'react';
import { Phone, AlertTriangle, Info, ExternalLink, Shield } from 'lucide-react';

export const EmergencyPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Emergency Header */}
      <div className="bg-red-600 text-white p-6 rounded-xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
          <AlertTriangle className="h-8 w-8 mr-2" />
          Emergency Resources
        </h1>
        <p className="text-lg">
          Access critical emergency information and services for Indianapolis residents.
        </p>
      </div>
      
      {/* Emergency Contact Cards */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Emergency Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="bg-red-600 p-4 flex items-center text-white">
              <Phone className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-semibold">Emergency: 911</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-3">
                For immediate life-threatening emergencies requiring police, fire, or medical response.
              </p>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="text-red-800 text-sm flex items-start">
                  <Info className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Only call 911 for genuine emergencies. Misuse may delay response to real emergencies.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="bg-blue-700 p-4 flex items-center text-white">
              <Phone className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-semibold">Non-Emergency: 317-327-3811</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-3">
                Indianapolis Metropolitan Police Department non-emergency line for situations not requiring immediate response.
              </p>
              <ul className="text-gray-700 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-2 flex-shrink-0">•</span>
                  <span>Report suspicious activity</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-2 flex-shrink-0">•</span>
                  <span>Noise complaints</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-2 flex-shrink-0">•</span>
                  <span>Minor traffic incidents</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="bg-blue-700 p-4 flex items-center text-white">
              <ExternalLink className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-semibold">Indy.gov Emergency Services</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-3">
                Official city emergency resources and information portal.
              </p>
              <a 
                href="https://www.indy.gov/agency/emergency-services" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
              >
                Visit Website
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* What To Do In An Emergency */}
      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">What To Do In An Emergency</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-700 pl-4">
            <h3 className="text-lg font-semibold mb-2">1. Stay Calm and Assess the Situation</h3>
            <p className="text-gray-600">
              Take a deep breath and quickly determine if there is immediate danger. If possible, move to a safe location.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-700 pl-4">
            <h3 className="text-lg font-semibold mb-2">2. Call for Help</h3>
            <p className="text-gray-600">
              Dial 911 for emergency services. Speak clearly, provide your location, and describe the emergency situation.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-700 pl-4">
            <h3 className="text-lg font-semibold mb-2">3. Follow Emergency Instructions</h3>
            <p className="text-gray-600">
              Listen carefully to the 911 operator and follow their instructions. They may guide you through emergency procedures until help arrives.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-700 pl-4">
            <h3 className="text-lg font-semibold mb-2">4. Provide First Aid If Necessary and Safe</h3>
            <p className="text-gray-600">
              If you are trained and it is safe to do so, provide first aid to injured persons until emergency services arrive.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-700 pl-4">
            <h3 className="text-lg font-semibold mb-2">5. Share Information with Emergency Responders</h3>
            <p className="text-gray-600">
              When help arrives, provide clear information about what happened, who is involved, and any actions already taken.
            </p>
          </div>
        </div>
      </section>
      
      {/* Emergency Types */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Emergency Response Guide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
              <h3 className="text-lg font-semibold">Medical Emergency</h3>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-gray-600">
                Common signs include difficulty breathing, chest pain, severe bleeding, sudden dizziness, or loss of consciousness.
              </p>
              
              <h4 className="font-medium text-gray-800">What to do:</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-red-100 text-red-700 rounded-full mr-2 flex-shrink-0">1</span>
                  <span>Call 911 immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-red-100 text-red-700 rounded-full mr-2 flex-shrink-0">2</span>
                  <span>Keep the person still and comfortable</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-red-100 text-red-700 rounded-full mr-2 flex-shrink-0">3</span>
                  <span>Do not give food or water</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-red-100 text-red-700 rounded-full mr-2 flex-shrink-0">4</span>
                  <span>If trained, administer CPR if needed and safe to do so</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4">
              <h3 className="text-lg font-semibold">Fire Emergency</h3>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-gray-600">
                If you detect smoke, see flames, or hear a fire alarm, act immediately.
              </p>
              
              <h4 className="font-medium text-gray-800">What to do:</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-orange-100 text-orange-700 rounded-full mr-2 flex-shrink-0">1</span>
                  <span>Alert others by yelling "Fire!" and pull the fire alarm if available</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-orange-100 text-orange-700 rounded-full mr-2 flex-shrink-0">2</span>
                  <span>Evacuate immediately - do not collect belongings</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-orange-100 text-orange-700 rounded-full mr-2 flex-shrink-0">3</span>
                  <span>If smoke is present, stay low to the ground</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-orange-100 text-orange-700 rounded-full mr-2 flex-shrink-0">4</span>
                  <span>Call 911 once you are safely outside</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-orange-100 text-orange-700 rounded-full mr-2 flex-shrink-0">5</span>
                  <span>Never re-enter a burning building</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
              <h3 className="text-lg font-semibold">Severe Weather</h3>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-gray-600">
                Indiana experiences tornadoes, severe thunderstorms, flooding, and winter storms.
              </p>
              
              <h4 className="font-medium text-gray-800">What to do:</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-2 flex-shrink-0">1</span>
                  <span>Stay informed through weather alerts on your phone or radio</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-2 flex-shrink-0">2</span>
                  <span>For tornadoes, go to the lowest floor, interior room, away from windows</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-2 flex-shrink-0">3</span>
                  <span>For flooding, move to higher ground immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mr-2 flex-shrink-0">4</span>
                  <span>Avoid driving through flooded roads</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4">
              <h3 className="text-lg font-semibold">Power Outage</h3>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-gray-600">
                Power outages can occur due to severe weather, equipment failure, or other emergencies.
              </p>
              
              <h4 className="font-medium text-gray-800">What to do:</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full mr-2 flex-shrink-0">1</span>
                  <span>Report the outage to IPL at 317-261-8111</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full mr-2 flex-shrink-0">2</span>
                  <span>Keep refrigerator and freezer doors closed</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full mr-2 flex-shrink-0">3</span>
                  <span>Use flashlights instead of candles when possible</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full mr-2 flex-shrink-0">4</span>
                  <span>Unplug electronic equipment to prevent damage from power surges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Preparedness Kit */}
      <section className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Shield className="h-8 w-8 text-blue-700 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Emergency Preparedness Kit</h2>
        </div>
        
        <p className="text-gray-600 mb-6">
          Every household should have an emergency kit ready with these essential items:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Water',
              description: 'One gallon per person per day for at least three days',
              icon: '💧'
            },
            {
              title: 'Food',
              description: 'Non-perishable food for at least three days',
              icon: '🥫'
            },
            {
              title: 'Flashlight',
              description: 'With extra batteries',
              icon: '🔦'
            },
            {
              title: 'First Aid Kit',
              description: 'With essential medical supplies',
              icon: '🩹'
            },
            {
              title: 'Battery-powered Radio',
              description: 'To receive emergency information',
              icon: '📻'
            },
            {
              title: 'Medications',
              description: 'A seven-day supply of medications',
              icon: '💊'
            },
            {
              title: 'Personal Documents',
              description: 'Copies of important documents in waterproof container',
              icon: '📄'
            },
            {
              title: 'Cell Phone with Charger',
              description: 'Include a backup battery if possible',
              icon: '📱'
            },
            {
              title: 'Cash',
              description: 'Small bills and coins for emergencies',
              icon: '💵'
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 flex items-start space-x-3">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Pro tip:</strong> Check your emergency kit every six months to replace expired items and update contents based on your family's changing needs.
          </p>
        </div>
      </section>
    </div>
  );
};