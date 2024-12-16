function StepIndicator({ steps, currentStep }) {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-center">
        {steps.map((step, index) => (
          <li key={step.name} className={`relative ${index !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              {index !== steps.length - 1 && (
                <div className={`h-0.5 w-full ${currentStep > step.number ? 'bg-primary' : 'bg-gray-200'}`} />
              )}
            </div>
            <div className="relative flex items-center justify-center">
              <span
                className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${currentStep > step.number ? 'bg-primary text-white' :
                    currentStep === step.number ? 'border-2 border-primary text-primary' :
                    'border-2 border-gray-300 text-gray-500'}`}
              >
                {step.number}
              </span>
              <span className="absolute -bottom-6 text-xs font-medium text-gray-500">
                {step.name}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default StepIndicator;