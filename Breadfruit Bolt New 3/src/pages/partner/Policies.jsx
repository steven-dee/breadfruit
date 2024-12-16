import { useState } from 'react';
import PolicyList from '../../components/partner/PolicyList';
import PolicyDetails from '../../components/partner/PolicyDetails';
import { mockPartnerPolicies } from '../../data/mockPolicies';

function Policies() {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Active Policies</h1>
        <p className="mt-2 text-sm text-gray-600">
          View and manage all active insurance policies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <PolicyList
            policies={mockPartnerPolicies}
            onSelect={setSelectedPolicy}
          />
        </div>
        <div>
          {selectedPolicy ? (
            <PolicyDetails policy={selectedPolicy} />
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-500">Select a policy to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Policies;