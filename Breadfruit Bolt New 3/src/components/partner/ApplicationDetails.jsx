function ApplicationDetails({ application }) {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg font-medium text-gray-900">Application Details</h3>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{application.customerName}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900">{application.email}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Vehicle</dt>
            <dd className="mt-1 text-sm text-gray-900">{application.vehicle}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Usage</dt>
            <dd className="mt-1 text-sm text-gray-900">{application.usage}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Driving Experience</dt>
            <dd className="mt-1 text-sm text-gray-900">{application.experience}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Coverage Type</dt>
            <dd className="mt-1 text-sm text-gray-900">{application.coverageType}</dd>
          </div>
        </dl>

        <div className="mt-6 space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            Approve
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
            Reject
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Request More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetails;