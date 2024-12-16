import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

function BulkUpload() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
    } else {
      toast.error('Please select a valid CSV file');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file first');
      return;
    }

    setIsUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      setFile(null);
      toast.success('Prices updated successfully!');
    }, 2000);
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Bulk Price Update</h3>
          <p className="text-sm text-gray-500">
            Upload a CSV file to update multiple prices at once. Download the template below to ensure correct formatting.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => {/* Download template logic */}}
            className="text-primary hover:text-primary-600"
          >
            Download Template
          </button>
          <span className="text-gray-300">|</span>
          <a
            href="#"
            className="text-primary hover:text-primary-600"
          >
            View Format Guide
          </a>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary transition-colors">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div className="mt-4">
              <label className="relative cursor-pointer">
                <span className="text-primary hover:text-primary-600">Upload a file</span>
                <input
                  type="file"
                  className="sr-only"
                  accept=".csv"
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-xs text-gray-500 mt-1">CSV only, max 5MB</p>
            </div>
          </div>
        </div>

        {file && (
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="ml-2 text-sm text-gray-900">{file.name}</span>
            </div>
            <button
              onClick={() => setFile(null)}
              className="text-gray-400 hover:text-gray-500"
            >
              Remove
            </button>
          </div>
        )}

        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleUpload}
            disabled={!file || isUploading}
            className={`px-4 py-2 rounded-md text-white ${
              !file || isUploading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-primary hover:bg-primary-600'
            }`}
          >
            {isUploading ? 'Uploading...' : 'Upload and Update Prices'}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default BulkUpload;