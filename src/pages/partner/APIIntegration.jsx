import { useState } from 'react';
import APIConfiguration from '../../components/partner/api/APIConfiguration';
import APITester from '../../components/partner/api/APITester';

function APIIntegration() {
  const [activeTab, setActiveTab] = useState('configuration');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">API Integration</h1>
        <p className="mt-2 text-sm text-gray-600">
          Configure and test your insurance API integration
        </p>
      </div>

      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'configuration', name: 'Configuration' },
            { id: 'testing', name: 'API Testing' }
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

      {activeTab === 'configuration' ? <APIConfiguration /> : <APITester />}
    </div>
  );
}

export default APIIntegration;