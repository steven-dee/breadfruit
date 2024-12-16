import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

function BankAccountManager() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    bankName: 'First Caribbean Bank',
    accountNumber: '****1234',
    accountName: 'John Smith',
    branchCode: '001'
  });

  const [newBankDetails, setNewBankDetails] = useState({
    bankName: '',
    accountNumber: '',
    accountName: '',
    branchCode: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would make an API call
    setFormData(newBankDetails);
    setIsEditing(false);
    toast.success('Bank account details updated successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Bank Account Details</h2>
        <button
          onClick={() => {
            if (!isEditing) {
              setNewBankDetails(formData);
            }
            setIsEditing(!isEditing);
          }}
          className="text-primary hover:text-primary-600"
        >
          {isEditing ? 'Cancel' : 'Change Account'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Bank Name</label>
            <input
              type="text"
              required
              value={newBankDetails.bankName}
              onChange={(e) => setNewBankDetails({ ...newBankDetails, bankName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Account Number</label>
            <input
              type="text"
              required
              value={newBankDetails.accountNumber}
              onChange={(e) => setNewBankDetails({ ...newBankDetails, accountNumber: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Account Name</label>
            <input
              type="text"
              required
              value={newBankDetails.accountName}
              onChange={(e) => setNewBankDetails({ ...newBankDetails, accountName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Branch Code</label>
            <input
              type="text"
              required
              value={newBankDetails.branchCode}
              onChange={(e) => setNewBankDetails({ ...newBankDetails, branchCode: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Save Changes
          </motion.button>
        </form>
      ) : (
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">Bank Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{formData.bankName}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Account Number</dt>
            <dd className="mt-1 text-sm text-gray-900">{formData.accountNumber}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Account Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{formData.accountName}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Branch Code</dt>
            <dd className="mt-1 text-sm text-gray-900">{formData.branchCode}</dd>
          </div>
        </dl>
      )}
    </div>
  );
}

export default BankAccountManager;