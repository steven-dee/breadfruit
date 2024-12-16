import { useState } from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

function PremiumFinanceAgreement({ quote, provider }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-primary hover:text-primary-600 font-medium"
      >
        <DocumentTextIcon className="h-5 w-5 mr-2" />
        View Premium Financing Agreement
      </button>

      {isOpen && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4">
            Premium Financing Agreement
          </h4>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h5 className="text-base font-medium text-gray-900">Terms of Financing</h5>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>Monthly Payment Amount: ${quote.monthlyPremium}</p>
              <p>Number of Payments: 12</p>
              <p>Interest Rate: 15% APR</p>
              <p>Total Amount Financed: ${quote.annualPremium}</p>
            </div>
            <div className="mt-4">
              <button
                className="text-sm text-primary hover:text-primary-600 font-medium"
                onClick={() => window.open('/documents/premium-finance-agreement.pdf', '_blank')}
              >
                Download Full Agreement (PDF)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PremiumFinanceAgreement;