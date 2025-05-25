import React, { useState } from 'react';
import { AlertTriangle, Camera, MapPin, Send, CheckCircle } from 'lucide-react';

export const HazardsPage: React.FC = () => {
  const [formStep, setFormStep] = useState<number>(1);
  const [hazardType, setHazardType] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [contactInfo, setContactInfo] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const hazardTypes = [
    { id: 'road', name: 'Road Hazard', description: 'Potholes, debris, traffic light issues' },
    { id: 'weather', name: 'Weather Damage', description: 'Flooding, downed trees, ice' },
    { id: 'infrastructure', name: 'Infrastructure Issue', description: 'Damaged sidewalks, bridges, buildings' },
    { id: 'utilities', name: 'Utility Problem', description: 'Downed power lines, water leaks, gas smell' },
    { id: 'environmental', name: 'Environmental Hazard', description: 'Chemical spills, air quality, water contamination' },
    { id: 'other', name: 'Other Hazard', description: 'Any other public safety concern' },
  ];

  const nextStep = () => {
    window.scrollTo(0, 0);
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    setFormStep(formStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log({
        hazardType,
        location,
        description,
        contactInfo,
      });
    }, 1500);
  };

  const resetForm = () => {
    setHazardType('');
    setLocation('');
    setDescription('');
    setContactInfo('');
    setFormStep(1);
    setSubmitted(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-xl mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
          <AlertTriangle className="h-8 w-8 mr-2" />
          Report a Hazard
        </h1>
        <p className="text-lg">
          Help keep Indianapolis safe by reporting public hazards to the appropriate authorities.
        </p>
      </div>
      
      {submitted ? (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your hazard report has been submitted successfully. The appropriate department will review your report and take necessary action.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Report Details:</h3>
            <p className="text-gray-600"><strong>Hazard Type:</strong> {hazardType}</p>
            <p className="text-gray-600"><strong>Location:</strong> {location}</p>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            A confirmation has been sent to your contact information. You may be contacted for additional details if needed.
          </p>
          <button
            onClick={resetForm}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Report Another Hazard
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Progress Tracker */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div 
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      formStep === step 
                        ? 'bg-blue-600 text-white' 
                        : formStep > step 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {formStep > step ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      step
                    )}
                  </div>
                  <span className={`text-sm mt-1 ${formStep === step ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                    {step === 1 ? 'Hazard Type' : step === 2 ? 'Location' : 'Details'}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-3">
              <div className={`h-1 ${formStep > 1 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
              <div className={`h-1 ${formStep > 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1: Hazard Type */}
            {formStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Hazard Type</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hazardTypes.map((type) => (
                    <div key={type.id} className="relative">
                      <input
                        type="radio"
                        id={type.id}
                        name="hazardType"
                        value={type.name}
                        checked={hazardType === type.name}
                        onChange={() => setHazardType(type.name)}
                        className="peer sr-only"
                        required={formStep === 1}
                      />
                      <label
                        htmlFor={type.id}
                        className="flex flex-col h-full p-4 border-2 rounded-lg cursor-pointer transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:bg-gray-50"
                      >
                        <span className="text-lg font-medium text-gray-800">{type.name}</span>
                        <span className="text-sm text-gray-500">{type.description}</span>
                        <div className="absolute top-4 right-4 h-5 w-5 border-2 rounded-full peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:after:absolute peer-checked:after:content-[''] peer-checked:after:left-1/2 peer-checked:after:top-1/2 peer-checked:after:h-2 peer-checked:after:w-2 peer-checked:after:rounded-full peer-checked:after:bg-white peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2"></div>
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!hazardType}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      hazardType 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    } transition-colors`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Location */}
            {formStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Hazard Location</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Address or Intersection
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="E.g., 200 E Washington St or 10th and Meridian"
                        required={formStep === 2}
                      />
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg flex items-start">
                    <div className="mr-3 mt-1">
                      <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-blue-800">
                        Please provide as specific a location as possible. Include nearby landmarks or cross streets if the exact address is unknown.
                      </p>
                    </div>
                  </div>
                  
                  {/* Placeholder for a map component */}
                  <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive Map Coming Soon</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Photo (Optional)
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Camera className="h-8 w-8 text-gray-400 mb-2" />
                          <p className="mb-1 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, or HEIC (MAX. 10MB)
                          </p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" accept="image/*" />
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!location}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      location 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    } transition-colors`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Additional Details */}
            {formStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Hazard Description
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe the hazard in detail. Include information about potential dangers and how long it has been present."
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Information (Optional)
                    </label>
                    <input
                      type="email"
                      id="contactInfo"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email address for follow-up questions"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      We'll only use this to contact you about this report if needed.
                    </p>
                  </div>
                  
                  <div className="flex items-start mt-4">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-700">
                        I confirm this is a genuine hazard report and the information provided is accurate to the best of my knowledge.
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitting || !description}
                    className={`px-6 py-2 rounded-lg font-medium flex items-center ${
                      !submitting && description
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    } transition-colors`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Report
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
      
      {/* Additional Information */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Important Information</h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mr-3 mt-0.5">
              <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              <strong>For emergencies</strong>, please call 911 immediately instead of using this form.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="mr-3 mt-0.5">
              <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              All reports are reviewed by city staff within 1-2 business days and routed to the appropriate department.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="mr-3 mt-0.5">
              <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              If you provide contact information, you may receive updates on the status of your report.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="mr-3 mt-0.5">
              <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              False reports may result in legal consequences. Please only submit accurate information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};