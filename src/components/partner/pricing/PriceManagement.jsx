import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingTable from './PricingTable';
import BulkUpload from './BulkUpload';
import PricingHistory from './PricingHistory';
import UnderwritingParameters from './UnderwritingParameters';
import { toast } from 'react-hot-toast';

function PriceManagement() {
  const [activeTab, setActiveTab] = useState('pricing');

  const handleUnderwritingParamsSave = (params) => {
    // In a real app, this would make an API call
    console.log('Saving underwriting parameters:', params);
    toast.success('Underwriting parameters updated successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'pricing', name: 'Base Pricing' },
            { id: 'underwriting', name: 'Underwriting Parameters' },
            { id: 'bulk', name: 'Bulk Upload' },
            { id: 'history', name: 'Price History' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'pricing' && <PricingTable />}
      {activeTab === 'underwriting' && <UnderwritingParameters onSave={handleUnderwritingParamsSave} />}
      {activeTab === 'bulk' && <BulkUpload />}
      {activeTab === 'history' && <PricingHistory />}
    </div>
  );
}

export default PriceManagement;