import { useState } from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

function PolicyDocumentViewer({ quote, provider }) {
  const [isOpen, setIsOpen] = useState(false);

  const documents = [
    {
      id: 'policy-terms',
      name: 'Policy Terms & Conditions',
      description: 'Full details of your insurance coverage, terms, and conditions'
    },
    {
      id: 'coverage-summary',
      name: 'Coverage Summary',
      description: 'Quick overview of what is and isn\'t covered'
    },
    {
      id: 'payment-terms',
      name: 'Payment Terms',
      description: 'Monthly payment schedule and cancellation policies'
    }
  ];

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-primary hover:text-primary-600 font-medium"
      >
        <DocumentTextIcon className="h-5 w-5 mr-2" />
        View Policy Documents
      </button>

      {isOpen && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4">
            Policy Documents from {provider.name}
          </h4>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
              >
                <h5 className="text-base font-medium text-gray-900">{doc.name}</h5>
                <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                <button
                  className="mt-2 text-sm text-primary hover:text-primary-600 font-medium"
                  onClick={() => window.open(`/documents/${doc.id}.pdf`, '_blank')}
                >
                  Open PDF
                </button>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Please review all policy documents carefully before proceeding with your purchase.
            If you have any questions, our support team is here to help.
          </p>
        </div>
      )}
    </div>
  );
}

export default PolicyDocumentViewer;