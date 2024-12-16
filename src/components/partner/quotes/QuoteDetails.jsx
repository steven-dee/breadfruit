import { format } from 'date-fns';
import { DocumentTextIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

function QuoteDetails({ quote, onStatusChange }) {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Quote Details</h3>
          <div className="space-x-2">
            <button
              onClick={() => onStatusChange(quote.id, 'approved')}
              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <CheckCircleIcon className="h-4 w-4 mr-1" />
              Approve
            </button>
            <button
              onClick={() => onStatusChange(quote.id, 'rejected')}
              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <XCircleIcon className="h-4 w-4 mr-1" />
              Reject
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-5">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {quote.customerName || 'Anonymous User'}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">Quote Date</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {format(new Date(quote.createdAt || new Date()), 'MMMM d, yyyy')}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">Coverage Type</dt>
            <dd className="mt-1 text-sm text-gray-900">{quote.coverage.type}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">Monthly Premium</dt>
            <dd className="mt-1 text-sm text-gray-900">${quote.monthlyPremium}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">Annual Premium</dt>
            <dd className="mt-1 text-sm text-gray-900">${quote.annualPremium}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                quote.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                quote.status === 'approved' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {quote.status || 'Pending'}
              </span>
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900">Coverage Details</h4>
          <div className="mt-2 border rounded-md p-4">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Deductible</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  ${quote.coverage.deductible}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Liability Limit</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  ${quote.coverage.liabilityLimit}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Collision Coverage</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {quote.coverage.collisionCoverage ? 'Yes' : 'No'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Personal Injury</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {quote.coverage.personalInjury ? 'Yes' : 'No'}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-900">Selected Add-ons</h4>
          <ul className="mt-2 border rounded-md divide-y">
            {quote.addOns.map(addon => (
              <li key={addon.id} className="px-4 py-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-900">{addon.name}</span>
                  <span className="text-sm text-gray-500">${addon.price}/mo</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <button className="inline-flex items-center text-sm text-primary hover:text-primary-600">
            <DocumentTextIcon className="h-5 w-5 mr-1" />
            View Full Quote Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteDetails;