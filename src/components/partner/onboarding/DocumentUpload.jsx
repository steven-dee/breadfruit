import { useState } from 'react';
import { motion } from 'framer-motion';

function DocumentUpload({ onSubmit, onBack, data = {} }) {
  const [formData, setFormData] = useState({
    businessRegistration: data.businessRegistration || null,
    insuranceLicense: data.insuranceLicense || null,
    financialStatements: data.financialStatements || null,
    taxCompliance: data.taxCompliance || null,
    termsAccepted: data.termsAccepted || false
  });

  const [uploadStatus, setUploadStatus] = useState({});

  const handleFileChange = (documentType, file) => {
    setFormData(prev => ({
      ...prev,
      [documentType]: file
    }));
    
    // Simulate file upload
    setUploadStatus(prev => ({
      ...prev,
      [documentType]: 'uploading'
    }));
    
    setTimeout(() => {
      setUploadStatus(prev => ({
        ...prev,
        [documentType]: 'completed'
      }));
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    onSubmit(formData);
  };

  const documents = [
    {
      type: 'businessRegistration',
      label: 'Business Registration Certificate',
      description: 'Upload a copy of your business registration certificate'
    },
    {
      type: 'insuranceLicense',
      label: 'Insurance License',
      description: 'Upload your current insurance license'
    },
    {
      type: 'financialStatements',
      label: 'Financial Statements',
      description: 'Upload your latest audited financial statements'
    },
    {
      type: 'taxCompliance',
      label: 'Tax Compliance Certificate',
      description: 'Upload your current tax compliance certificate'
    }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        {documents.map((doc) => (
          <div key={doc.type} className="relative">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {doc.label}
                </label>
                <p className="text-sm text-gray-500">{doc.description}</p>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary-600">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          className="sr-only"
                          onChange={(e) => handleFileChange(doc.type, e.target.files[0])}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX, JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
            {uploadStatus[doc.type] && (
              <div className="absolute top-2 right-2">
                {uploadStatus[doc.type] === 'uploading' ? (
                  <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I accept the terms and conditions and confirm that all uploaded documents are accurate
          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <motion.button
          type="button"
          onClick={onBack}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Back
        </motion.button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Submit Application
        </motion.button>
      </div>
    </form>
  );
}

export default DocumentUpload;