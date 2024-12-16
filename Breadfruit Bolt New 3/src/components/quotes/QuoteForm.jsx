import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from './StepIndicator';

function QuoteForm({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    insuranceType: '',
    vehicleInfo: {
      make: '',
      model: '',
      year: '',
      usage: ''
    },
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      drivingExperience: ''
    }
  });

  const steps = [
    { number: 1, name: 'Insurance Type' },
    { number: 2, name: 'Vehicle Details' },
    { number: 3, name: 'Personal Info' }
  ];

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <StepIndicator steps={steps} currentStep={currentStep} />
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">What type of insurance do you need?</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Auto', 'Home', 'Business', 'Life'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => {
                    updateFormData('insuranceType', type.toLowerCase());
                    handleNext();
                  }}
                  className="p-6 border-2 rounded-lg text-left hover:border-primary hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <h3 className="text-lg font-medium text-gray-900">{type}</h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Tell us about your vehicle</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Make</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  onChange={(e) => updateFormData('vehicleInfo', { make: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Model</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  onChange={(e) => updateFormData('vehicleInfo', { model: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  onChange={(e) => updateFormData('vehicleInfo', { year: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Usage</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  onChange={(e) => updateFormData('vehicleInfo', { usage: e.target.value })}
                >
                  <option value="">Select usage</option>
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  onChange={(e) => updateFormData('personalInfo', { name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  onChange={(e) => updateFormData('personalInfo', { email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  onChange={(e) => updateFormData('personalInfo', { phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Driving Experience</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  onChange={(e) => updateFormData('personalInfo', { drivingExperience: e.target.value })}
                >
                  <option value="">Select experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-600"
              >
                Get Quotes
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default QuoteForm;