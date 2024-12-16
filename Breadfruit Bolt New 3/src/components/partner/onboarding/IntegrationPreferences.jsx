import { useState } from 'react';
import { motion } from 'framer-motion';

function IntegrationPreferences({ onNext, onBack, data = {} }) {
  const [formData, setFormData] = useState({
    integrationType: data.integrationType || '',
    dataFormat: data.dataFormat || '',
    notificationPreference: data.notificationPreference || '',
    customRequirements: data.customRequirements || ''
  });

  const integrationTypes = [
    'API Integration',
    'Web Portal',
    'Hybrid (API + Web Portal)'
  ];

  const dataFormats = [
    'JSON',
    'XML',
    'CSV',
    'PDF'
  ];

  const notificationTypes = [
    'Webhooks',
    'Email',
    'Both Webhook and Email'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Preferred Integration Type
        </label>
        <select
          required
          value={formData.integrationType}
          onChange={(e) => setFormData({ ...formData, integrationType: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="">Select integration type</option>
          {integrationTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Data Format
        </label>
        <select
          required
          value={formData.dataFormat}
          onChange={(e) => setFormData({ ...formData, dataFormat: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="">Select data format</option>
          {dataFormats.map(format => (
            <option key={format} value={format}>{format}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Notification Preference
        </label>
        <select
          required
          value={formData.notificationPreference}
          onChange={(e) => setFormData({ ...formData, notificationPreference: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="">Select notification preference</option>
          {notificationTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Custom Requirements
        </label>
        <select
          value={formData.customRequirements}
          onChange={(e) => setFormData({ ...formData, customRequirements: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="">Select if you have any custom requirements</option>
          <option value="yes">Yes, I have custom requirements</option>
          <option value="no">No custom requirements</option>
        </select>
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
          Next Step
        </motion.button>
      </div>
    </form>
  );
}

export default IntegrationPreferences;