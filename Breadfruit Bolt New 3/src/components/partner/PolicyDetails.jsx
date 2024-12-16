import { format } from 'date-fns';

function PolicyDetails({ policy }) {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg font-medium text-gray-900">Policy Details</h3>
        <p className="mt-1 text-sm text-gray-500">Policy #{policy.policyNumber}</p>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{policy.customerName}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Policy Type</dt>
            <dd className="mt-1 text-sm text-gray-900">{policy.type}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Start Date</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {format(new Date(policy.startDate), 'MMMM d, yyyy')}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Monthly Premium</dt>
            <dd className="mt-1 text-sm text-gray-900">${policy.premium}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                ${policy.status === 'Active' ? 'bg-green-100 text-green-800' :
                  policy.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'}`}>
                {policy.status}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Coverage Details</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul className="list-disc pl-4">
                <li>Liability Coverage: $300,000</li>
                <li>Collision Deductible: $500</li>
                <li>Comprehensive Deductible: $250</li>
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-6 space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Edit Policy
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default PolicyDetails;