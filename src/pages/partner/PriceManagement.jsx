import PriceManagement from '../../components/partner/pricing/PriceManagement';

function PriceManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Price Management</h1>
        <p className="mt-2 text-sm text-gray-600">
          Manage and update your insurance product pricing
        </p>
      </div>
      <PriceManagement />
    </div>
  );
}

export default PriceManagementPage;