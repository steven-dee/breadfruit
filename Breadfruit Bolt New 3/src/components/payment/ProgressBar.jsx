import { useState, useEffect } from 'react';

function ProgressBar({ currentStep }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentStep / 2) * 100); // Only go up to step 2
  }, [currentStep]);

  const milestones = [
    { step: 1, label: 'Payment Successfully Authorized' },
    { step: 2, label: 'Insurance Carrier Verifying Application' },
    { step: 3, label: 'Policy Activated. You\'re Insured!' }
  ];

  return (
    <div className="w-full space-y-12">
      {/* Progress Bar */}
      <div className="relative pt-8">
        <div className="overflow-hidden h-3 rounded-full bg-gray-200">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
          />
        </div>

        {/* Milestones */}
        <div className="absolute w-full top-0 flex justify-between">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.step}
              className="relative"
              style={{ left: `${index === 0 ? '0%' : index === 1 ? '50%' : '100%'}`, transform: 'translateX(-50%)' }}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 transition-all duration-500 ${
                  currentStep >= milestone.step
                    ? 'border-primary bg-primary'
                    : 'border-gray-300 bg-white'
                } flex items-center justify-center`}
              >
                {currentStep > milestone.step && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="absolute w-32 text-center" style={{ top: '24px', left: '-48px' }}>
                <span className={`text-sm font-medium ${
                  currentStep >= milestone.step ? 'text-primary' : 'text-gray-500'
                }`}>
                  {milestone.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Success Message */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-green-800">
              Payment Successfully Authorized
            </h3>
            <div className="mt-2 text-sm text-green-700">
              <p className="leading-relaxed">
                Your payment has been authorized. This is just a payment-hold on your account. Once the insurer verifies your information, the payment will be debited from your account and you will be sent your policy documents via email and they will be uploaded to your Breadfruit account. Insurance carriers typically take 24-48 hours to finalize their verification process. No need to check back, we'll notify you when the process is complete. In the event the insurance carrier cannot verify your information, Breadfruit will release the payment authorization from your bank account and you will regain access to those funds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;