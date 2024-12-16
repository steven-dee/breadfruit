import { useState } from 'react';
import { format } from 'date-fns';
import { mockApplications } from '../../data/mockApplications';
import { toast } from 'react-hot-toast';

function Applications() {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredApplications = filter === 'all' 
    ? mockApplications 
    : mockApplications.filter(app => app.status.toLowerCase() === filter);

  const handleStatusChange = (applicationId, newStatus) => {
    // In a real app, this would make an API call
    toast.success(`Application ${applicationId} status updated to ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Insurance Applications</h2>
          <p className="mt-1 text-sm text-gray-600">
            Review and manage new insurance applications
          </p>
        </div>
        <div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="all">All Applications</option>
            <option value="pending">Pending</option>
            <option value="under review">Under Review</option>
            <option value="approved">Approved</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Applications List */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-4 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Applications</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredApplications.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelectedApplication(app)}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedApplication?.id === app.id ? 'bg-gray-50' : ''
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{app.customerName}</p>
                    <p className="text-sm text-gray-500">{app.vehicle}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    app.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    app.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {app.status}
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>{format(new Date(app.submittedAt), 'MMM d, yyyy')}</span>
                  <span>${app.premium}/month</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Details */}
        {selectedApplication ? (
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Application Details</h3>
            </div>
            <div className="p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{selectedApplication.customerName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900">{selectedApplication.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Vehicle</dt>
                  <dd className="mt-1 text-sm text-gray-900">{selectedApplication.vehicle}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Usage</dt>
                  <dd className="mt-1 text-sm text-gray-900">{selectedApplication.usage}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Driving Experience</dt>
                  <dd className="mt-1 text-sm text-gray-900">{selectedApplication.experience}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Coverage Type</dt>
                  <dd className="mt-1 text-sm text-gray-900">{selectedApplication.coverageType}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Monthly Premium</dt>
                  <dd className="mt-1 text-sm text-gray-900">${selectedApplication.premium}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Submitted Documents</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <ul className="list-disc list-inside">
                      {selectedApplication.documents.map((doc, index) => (
                        <li key={index}>{doc}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              <div className="mt-6 space-x-3">
                <button
                  onClick={() => handleStatusChange(selectedApplication.id, 'Approved')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange(selectedApplication.id, 'Under Review')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Mark for Review
                </button>
                <button
                  onClick={() => handleStatusChange(selectedApplication.id, 'Rejected')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-500">Select an application to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Applications;