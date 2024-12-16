function ChatProgress({ currentStep }) {
  const steps = [
    { id: 'insurance', name: 'Insurance Type', number: '1' },
    { id: 'vehicle', name: 'Vehicle Details', number: '2' },
    { id: 'driver', name: 'Driver History', number: '3' },
    { id: 'insurance_history', name: 'Insurance History', number: '4' },
    { id: 'personal', name: 'Personal Details', number: '5' },
    { id: 'documents', name: 'Supporting Documents', number: '6' }
  ];

  const getCurrentSectionIndex = () => {
    // Insurance Type section
    if (['initial', 'auto', 'home', 'life', 'business'].includes(currentStep)) {
      return 0;
    }
    
    // Vehicle Details section
    if (['vehicle_year', 'vin_number', 'license_plate', 'vehicle_type', 
         'market_value', 'mileage', 'ownership_status', 'financier_details',
         'vehicle_usage', 'annual_mileage', 'safety_features', 
         'parking_location'].includes(currentStep)) {
      return 1;
    }
    
    // Driver History section
    if (['driving_record'].includes(currentStep)) {
      return 2;
    }

    // Insurance History section
    if (['insurance_history', 'claims_history', 'insurance_cancelled', 
         'cancellation_reason'].includes(currentStep)) {
      return 3;
    }

    // Personal Details section
    if (['location', 'modifications'].includes(currentStep)) {
      return 4;
    }

    // Supporting Documents section
    if (['verification_docs', 'identity_verification'].includes(currentStep)) {
      return 5;
    }

    return 0;
  };

  const getStepStatus = (stepIndex) => {
    const currentSectionIndex = getCurrentSectionIndex();
    
    if (stepIndex < currentSectionIndex) return 'completed';
    if (stepIndex === currentSectionIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="mb-6">
      <div className="relative">
        {/* Progress Bar */}
        <div className="overflow-hidden h-2 mb-8 text-xs flex rounded bg-gray-200">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500 ${
                getStepStatus(index) !== 'upcoming' ? 'bg-primary' : 'bg-transparent'
              }`}
              style={{ width: `${100 / steps.length}%` }}
            />
          ))}
        </div>

        {/* Step Numbers and Labels */}
        <div className="flex justify-between absolute w-full" style={{ top: '-12px' }}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center"
              style={{ width: `${100 / steps.length}%` }}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mb-2 ${
                  getStepStatus(index) === 'completed' ? 'bg-primary text-white' :
                  getStepStatus(index) === 'current' ? 'bg-primary text-white' :
                  'bg-white text-gray-400 border-2 border-gray-300'
                }`}
              >
                {step.number}
              </div>
              <div
                className={`text-xs font-medium text-center ${
                  getStepStatus(index) === 'completed' ? 'text-primary' :
                  getStepStatus(index) === 'current' ? 'text-gray-900' :
                  'text-gray-400'
                }`}
              >
                {step.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatProgress;