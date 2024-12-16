import { useState } from 'react';
import DashboardStats from '../../components/dashboard/DashboardStats';
import PolicyList from '../../components/dashboard/PolicyList';
import PaymentHistory from '../../components/customer/PaymentHistory';
import ClaimsStatus from '../../components/customer/ClaimsStatus';
import DocumentCenter from '../../components/customer/DocumentCenter';
import { mockCustomerPolicies, mockCustomerStats } from '../../data/mockPolicies';

function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { name: 'Active Policies', value: mockCustomerStats.activePolicies },
    { name: 'Total Monthly Premium', value: `$${mockCustomerStats.totalPremium}` },
    { name: 'Next Payment Due', value: mockCustomerStats.nextPayment }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <DashboardStats stats={stats} />
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">My Policies</h2>
              <PolicyList policies={mockCustomerPolicies} />
            </div>
          </>
        );
      case 'payments':
        return <PaymentHistory />;
      case 'claims':
        return <ClaimsStatus />;
      case 'documents':
        return <DocumentCenter />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Insurance Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          View and manage your insurance policies
        </p>
      </div>

      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', name: 'Overview' },
            { id: 'payments', name: 'Payments' },
            { id: 'claims', name: 'Claims' },
            { id: 'documents', name: 'Documents' }
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

      {renderTabContent()}
    </div>
  );
}

export default CustomerDashboard;