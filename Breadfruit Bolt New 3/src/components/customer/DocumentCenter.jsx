import { DocumentTextIcon } from '@heroicons/react/24/outline';

function DocumentCenter() {
  const documents = [
    {
      id: 1,
      name: 'Auto Insurance Policy',
      type: 'Policy Document',
      date: '2023-01-15',
      size: '2.4 MB'
    },
    {
      id: 2,
      name: 'Premium Finance Agreement',
      type: 'Agreement',
      date: '2023-01-15',
      size: '1.2 MB'
    },
    {
      id: 3,
      name: 'Insurance Card',
      type: 'Card',
      date: '2023-01-15',
      size: '156 KB'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">My Documents</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {documents.map((doc) => (
            <li key={doc.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DocumentTextIcon className="h-6 w-6 text-gray-400" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      {doc.type} • {doc.date} • {doc.size}
                    </p>
                  </div>
                </div>
                <button className="text-primary hover:text-primary-600">
                  Download
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Documents</h3>
        <p className="text-gray-600 mb-4">
          Need to share documents with us? Upload them securely here.
        </p>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600">
          Upload Document
        </button>
      </div>
    </div>
  );
}

export default DocumentCenter;