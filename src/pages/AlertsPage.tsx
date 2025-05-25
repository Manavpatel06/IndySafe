import React, { useState } from 'react';
import { Bell, BellOff, Check, X, AlertTriangle, Clock, MapPin, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export const AlertsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'subscribe'>('current');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [subscribedAlertTypes, setSubscribedAlertTypes] = useState<string[]>([
    'Weather', 'Traffic', 'Public Safety'
  ]);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [expandedAlertId, setExpandedAlertId] = useState<number | null>(null);

  const toggleExpandAlert = (id: number) => {
    if (expandedAlertId === id) {
      setExpandedAlertId(null);
    } else {
      setExpandedAlertId(id);
    }
  };

  const toggleAlertType = (type: string) => {
    if (subscribedAlertTypes.includes(type)) {
      setSubscribedAlertTypes(subscribedAlertTypes.filter(t => t !== type));
    } else {
      setSubscribedAlertTypes([...subscribedAlertTypes, type]);
    }
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const alerts = [
    {
      id: 1,
      type: 'Weather',
      title: 'Severe Thunderstorm Warning',
      description: 'The National Weather Service has issued a severe thunderstorm warning for Indianapolis and surrounding areas. Expect heavy rain, strong winds, and possible hail. Stay indoors and away from windows.',
      fullDetails: 'Thunderstorms are expected to intensify this evening with wind gusts up to 60 mph and quarter-sized hail possible. Heavy rainfall may lead to localized flooding in low-lying areas. The storm system is moving northeast at 25 mph and is expected to affect the Indianapolis metro area from 7:00 PM to 9:30 PM.',
      location: 'Indianapolis Metro Area',
      timestamp: '2025-06-15T18:30:00',
      severity: 'high',
    },
    {
      id: 2,
      type: 'Traffic',
      title: 'Major Accident on I-65',
      description: 'A multi-vehicle accident on I-65 Northbound near the 38th Street exit is causing significant delays. Two lanes are blocked. Seek alternate routes.',
      fullDetails: 'Emergency services are on the scene of a three-vehicle collision on I-65 Northbound near the 38th Street exit. Two right lanes are currently blocked, and traffic is backed up for approximately 3 miles. Crews estimate clearance will take 1-2 hours. Motorists are advised to use US-31 or Meridian Street as alternate routes.',
      location: 'I-65 Northbound at 38th Street',
      timestamp: '2025-06-15T16:45:00',
      severity: 'medium',
    },
    {
      id: 3,
      type: 'Public Safety',
      title: 'Boil Water Advisory',
      description: 'A boil water advisory has been issued for the east side of Indianapolis due to a water main break. Residents should boil water for drinking and cooking.',
      fullDetails: 'Citizens Energy Group has issued a precautionary boil water advisory for residents east of Emerson Avenue between Washington Street and 38th Street. The advisory follows a 24-inch water main break at the intersection of 10th Street and Ritter Avenue. Repairs are underway, but residents in the affected area should boil water for at least 3 minutes before consuming or using for food preparation. The advisory is expected to remain in effect for 48 hours while water quality testing is conducted.',
      location: 'East Indianapolis - East of Emerson Ave between Washington St and 38th St',
      timestamp: '2025-06-15T10:15:00',
      severity: 'medium',
    },
    {
      id: 4,
      type: 'Public Safety',
      title: 'Hazardous Material Spill',
      description: 'A chemical spill has been reported near Keystone Avenue and 46th Street. Authorities are advising residents to avoid the area.',
      fullDetails: 'Indianapolis Fire Department and hazardous materials teams are responding to a chemical spill from a commercial vehicle near Keystone Avenue and 46th Street. As a precaution, residents within a half-mile radius are advised to remain indoors with windows closed and HVAC systems turned off until further notice. The spilled material has been identified as a non-toxic but irritating cleaning solution. Cleanup is expected to continue through the evening, and nearby roads may remain closed until tomorrow morning.',
      location: 'Keystone Avenue and 46th Street',
      timestamp: '2025-06-15T14:20:00',
      severity: 'high',
    },
    {
      id: 5,
      type: 'Weather',
      title: 'Heat Advisory',
      description: 'A heat advisory is in effect for Indianapolis with temperatures expected to reach 95°F with high humidity. Take precautions to avoid heat-related illness.',
      fullDetails: 'The National Weather Service has issued a heat advisory for Marion County and surrounding areas from 11 AM to 8 PM today. Heat index values may reach 105-110°F due to temperatures in the mid-90s and high humidity. Residents are advised to drink plenty of fluids, stay in air-conditioned rooms, stay out of the sun, and check on relatives and neighbors. Young children and pets should never be left unattended in vehicles. Cooling centers will be open at city community centers throughout the advisory period.',
      location: 'All of Marion County',
      timestamp: '2025-06-15T09:00:00',
      severity: 'medium',
    },
  ];

  const alertTypes = [
    { id: 'Weather', label: 'Weather Alerts', description: 'Severe weather warnings, watches, and advisories' },
    { id: 'Traffic', label: 'Traffic Alerts', description: 'Major accidents, road closures, and construction' },
    { id: 'Public Safety', label: 'Public Safety', description: 'Emergencies, evacuations, and safety advisories' },
    { id: 'Community', label: 'Community Alerts', description: 'Local events, neighborhood notifications' },
    { id: 'Utilities', label: 'Utility Alerts', description: 'Power outages, water advisories, service disruptions' },
  ];

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'low':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 rounded-xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
          <Bell className="h-8 w-8 mr-2" />
          Emergency Alerts
        </h1>
        <p className="text-lg">
          Stay informed about emergencies and hazards affecting Indianapolis and your local area.
        </p>
      </div>
      
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-20 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 flex items-center animate-fade-in-slide">
          <Check className="h-5 w-5 mr-2" />
          <span>Alert preferences updated successfully!</span>
          <button 
            onClick={() => setShowSuccessMessage(false)}
            className="ml-3 text-green-100 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      
      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('current')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'current'
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Current Alerts
            </span>
          </button>
          <button
            onClick={() => setActiveTab('subscribe')}
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === 'subscribe'
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="flex items-center justify-center">
              <Bell className="h-5 w-5 mr-2" />
              Manage Subscriptions
            </span>
          </button>
        </div>
        
        <div className="p-6">
          {/* Current Alerts Tab */}
          {activeTab === 'current' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Active Alerts</h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {alerts.length} Active
                </span>
              </div>
              
              {alerts.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No Active Alerts</h3>
                  <p className="text-gray-500">
                    There are currently no active emergency alerts for Indianapolis.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`border rounded-lg overflow-hidden transition-all duration-200 ${
                        expandedAlertId === alert.id ? 'shadow-md' : ''
                      }`}
                    >
                      <div 
                        className={`border-l-4 ${getSeverityStyles(alert.severity)} cursor-pointer`}
                        onClick={() => toggleExpandAlert(alert.id)}
                      >
                        <div className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center">
                                <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 mr-2">
                                  {alert.type}
                                </span>
                                <span className="text-xs text-gray-500 flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {formatDate(alert.timestamp)}
                                </span>
                              </div>
                              <h3 className="font-semibold text-gray-800 mt-1">{alert.title}</h3>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                              {expandedAlertId === alert.id ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                          <p className="text-gray-600 text-sm mt-1">{alert.description}</p>
                          
                          <div className="flex items-center text-xs text-gray-500 mt-2">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{alert.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {expandedAlertId === alert.id && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <div className="space-y-3">
                            <h4 className="font-medium text-gray-700">Detailed Information</h4>
                            <p className="text-sm text-gray-600">{alert.fullDetails}</p>
                            
                            <div className="pt-2">
                              <a
                                href="#"
                                className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                              >
                                View on Map
                                <ArrowRight className="h-4 w-4 ml-1" />
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-800">
                      <strong>Stay informed:</strong> Alerts are sourced from official emergency management systems, the National Weather Service, and local authorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Subscription Management Tab */}
          {activeTab === 'subscribe' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Alert Subscription Settings</h2>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex">
                  <div className="mr-3">
                    <Bell className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-800">
                      Subscribe to emergency alerts to receive timely notifications about emergencies and hazards affecting Indianapolis and your local area.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">Alert Notifications</h3>
                    <p className="text-sm text-gray-500">
                      Receive notifications for emergency alerts
                    </p>
                  </div>
                  <button
                    onClick={() => setSubscribed(!subscribed)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      subscribed ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        subscribed ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </button>
                </div>
                
                <div className={subscribed ? '' : 'opacity-50 pointer-events-none'}>
                  <h3 className="font-medium text-gray-800 mb-3">Alert Types</h3>
                  <div className="space-y-3">
                    {alertTypes.map((type) => (
                      <div key={type.id} className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id={`alert-type-${type.id}`}
                              name={`alert-type-${type.id}`}
                              type="checkbox"
                              checked={subscribedAlertTypes.includes(type.id)}
                              onChange={() => toggleAlertType(type.id)}
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                              disabled={!subscribed}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor={`alert-type-${type.id}`}
                              className="font-medium text-gray-700"
                            >
                              {type.label}
                            </label>
                            <p className="text-gray-500">{type.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={subscribed ? '' : 'opacity-50 pointer-events-none'}>
                  <h3 className="font-medium text-gray-800 mb-3">Notification Methods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Email Notifications</h4>
                        <button
                          className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600"
                          disabled={!subscribed}
                        >
                          <span className="sr-only">Enable email notifications</span>
                          <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                        </button>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="your@email.com"
                          disabled={!subscribed}
                        />
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-700">SMS Notifications</h4>
                        <button
                          className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
                          disabled={!subscribed}
                        >
                          <span className="sr-only">Enable SMS notifications</span>
                          <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                        </button>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="(317) 555-0123"
                          disabled={!subscribed || true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={subscribed ? '' : 'opacity-50 pointer-events-none'}>
                  <h3 className="font-medium text-gray-800 mb-3">Location Settings</h3>
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zipcode"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="46204"
                        disabled={!subscribed}
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Receive alerts specific to your area
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="location-tracking"
                        name="location-tracking"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        disabled={!subscribed}
                      />
                      <label htmlFor="location-tracking" className="ml-2 block text-sm text-gray-700">
                        Enable location tracking for more accurate alerts
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSubscribe}
                    disabled={!subscribed}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      subscribed 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    } transition-colors`}
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">About Emergency Alerts</h2>
        
        <div className="prose max-w-none text-gray-600">
          <p>
            The IndySafe Emergency Alert System provides timely information about emergencies and hazardous situations affecting Indianapolis residents. These alerts are designed to help you make informed decisions to protect yourself, your family, and your property.
          </p>
          
          <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">How Alerts Work</h3>
          <p>
            Alerts are issued by authorized agencies including the Indianapolis Department of Public Safety, National Weather Service, and other emergency management organizations. When an emergency situation arises, these agencies assess the threat and issue alerts to affected areas.
          </p>
          
          <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Alert Levels</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="text-red-600 font-medium">High Severity</span>: Immediate threat to life, safety, or property requiring immediate action</li>
            <li><span className="text-orange-600 font-medium">Medium Severity</span>: Significant situation that may become serious, requiring preparation or caution</li>
            <li><span className="text-yellow-600 font-medium">Low Severity</span>: Minor incidents or general information requiring awareness</li>
          </ul>
          
          <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Privacy Information</h3>
          <p>
            Your privacy is important to us. Location data and contact information collected for alert purposes are used solely for providing emergency notifications and will never be shared with third parties for marketing or other non-emergency purposes.
          </p>
        </div>
      </div>
    </div>
  );
};