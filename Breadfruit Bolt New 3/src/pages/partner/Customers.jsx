import { useState } from 'react';
import { format } from 'date-fns';

const mockCustomers = [
  {
    id: 'C001',
    name: 'John Smith',
    email: 'john.smith@example.com',
    activePolicies: 2,
    totalPremium: 250.00,
    joinedDate: '2023-01-15',
    status: 'Active'
  },
  {
    id: 'C002',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    activePolicies: 1,
    totalPremium: 150.00,
    joinedDate: '2023-03-20',
    status: 'Active'
  }
];

function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage and view customer information
        </p>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Active Policies
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Premium
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Joined Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockCustomers.map((customer) => (
              <tr
                key={customer.id}
                className={selectedCustomer?.id === customer.id ? 'bg-gray-50' : undefined}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                          customer.name
                        )}`}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {customer.name}
                      </div>
                      <div className="text-sm text-gray-500">{customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.activePolicies}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${customer.totalPremium.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(customer.joinedDate), 'MMM d, yyyy')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => setSelectedCustomer(customer)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCustomer && (
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Customer Details
          </h3>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Customer ID</dt>
              <dd className="mt-1 text-sm text-gray-900">{selectedCustomer.id}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {selectedCustomer.name}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {selectedCustomer.email}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Active Policies
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {selectedCustomer.activePolicies}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Total Premium
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                ${selectedCustomer.totalPremium.toFixed(2)}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Joined Date</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {format(new Date(selectedCustomer.joinedDate), 'MMMM d, yyyy')}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}

export default Customers;