import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Bell, Shield, Map } from 'lucide-react';
import { useChatbot } from '../hooks/useChatbot';

export const HomePage: React.FC = () => {
  const { toggleChat } = useChatbot();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl text-white overflow-hidden">
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Keeping Indianapolis Safe Together</h1>
            <p className="text-xl text-blue-100 mb-8">
              Your real-time public safety assistant for reporting hazards, receiving alerts, and accessing emergency resources.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/emergency" 
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
              >
                <AlertTriangle className="h-5 w-5 mr-2" />
                Emergency Resources
              </Link>
              <Link 
                to="/hazards" 
                className="inline-flex items-center px-6 py-3 bg-white text-blue-800 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                <Map className="h-5 w-5 mr-2" />
                Report a Hazard
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')]"></div>
      </section>

      {/* Feature Blocks */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
          <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold mb-3">Report Hazards</h2>
          <p className="text-gray-600 mb-4">
            Easily report public safety hazards including downed trees, flooding, damaged infrastructure, and more.
          </p>
          <Link 
            to="/hazards" 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            Report Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
          <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Bell className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold mb-3">Emergency Alerts</h2>
          <p className="text-gray-600 mb-4">
            Get timely notifications about severe weather, traffic incidents, and other emergency situations in your area.
          </p>
          <Link 
            to="/alerts" 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            Manage Alerts
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
          <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold mb-3">24/7 Assistance</h2>
          <p className="text-gray-600 mb-4">
            Our AI assistant provides immediate safety information and connects you with emergency services when needed.
          </p>
          <button 
            onClick={toggleChat}
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            Chat Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
      </section>
      
      {/* Emergency Preparedness */}
      <section className="bg-blue-50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3">Emergency Preparedness</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access critical resources to prepare for and respond to emergencies in Indianapolis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Severe Weather',
              description: 'Prepare for tornadoes, flooding, and extreme temperatures.',
              icon: <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            },
            {
              title: 'Power Outages',
              description: 'Know what to do when the electricity goes out.',
              icon: <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            },
            {
              title: 'Fire Safety',
              description: 'Prevention tips and what to do in case of a fire.',
              icon: <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            },
            {
              title: 'Medical Emergency',
              description: 'First aid tips and when to call for medical help.',
              icon: <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="text-blue-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
      
      {/* Community Safety Map */}
      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Indianapolis Safety Map</h2>
          <p className="text-gray-600 mb-6">
            View real-time reported hazards and emergency information across Indianapolis.
          </p>
        </div>
        <div className="h-96 bg-gray-200 relative">
          {/* This would be replaced with an actual map component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Interactive Map Coming Soon</p>
          </div>
          <img 
            src="https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Map placeholder" 
            className="w-full h-full object-cover opacity-25"
          />
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl text-white p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Keep Indianapolis Safe?</h2>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
          Join thousands of residents using IndySafe to report hazards, receive alerts, and stay informed.
        </p>
        <button 
          onClick={toggleChat}
          className="px-8 py-3 bg-white text-blue-800 hover:bg-blue-50 font-medium rounded-lg transition-colors"
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
};