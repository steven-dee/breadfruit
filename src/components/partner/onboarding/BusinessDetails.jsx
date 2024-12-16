import { useState } from 'react';
import { motion } from 'framer-motion';

function BusinessDetails({ onNext, onBack, data = {} }) {
  const [formData, setFormData] = useState({
    insuranceTypes: data.insuranceTypes || [],
    markets: data.markets || [],
    annualPremium: data.annualPremium || '',
    employeeCount: data.employeeCount || '',
    businessModel: data.businessModel || '',
    targetMarket: data.targetMarket || ''
  });

  const insuranceTypeOptions = [
    'Auto Insurance',
    'Home Insurance',
    'Life Insurance',
    'Business Insurance',
    'Marine Insurance',
    'Liability Insurance'
  ];

  const marketOptions = [
    'Anguilla',
    'Antigua and Barbuda',
    'Aruba',
    'Bahamas',
    'Barbados',
    'Belize',
    'Bermuda',
    'British Virgin Islands',
    'Cayman Islands',
    'Cuba',
    'Curaçao',
    'Dominica',
    'Dominican Republic',
    'Grenada',
    'Guadeloupe',
    'Haiti',
    'Jamaica',
    'Martinique',
    'Montserrat',
    'Puerto Rico',
    'Saint Barthélemy',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Vincent and the Grenadines',
    'Sint Maarten',
    'Trinidad and Tobago',
    'Turks and Caicos Islands',
    'U.S. Virgin Islands'
  ];

  const premiumRanges = [
    '< $1 million',
    '$1-5 million',
    '$5-10 million',
    '$10-50 million',
    '$50-100 million',
    '> $100 million'
  ];

  const employeeRanges = [
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '501-1000',
    '1000+'
  ];

  const businessModelOptions = [
    'Direct Insurance',
    'Reinsurance',
    'Broker',
    'MGA/MGU',
    'InsurTech',
    'Other'
  ];

  const targetMarketOptions = [
    'Individual Consumers',
    'Small Businesses',
    'Mid-Market Companies',
    'Large Enterprises',
    'Specialty Markets',
    'All Segments'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Insurance Types Offered
          </label>
          <div className="grid grid-cols-2 gap-2">
            {insuranceTypeOptions.map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.insuranceTypes.includes(type)}
                  onChange={(e) => {
                    const newTypes = e.target.checked
                      ? [...formData.insuranceTypes, type]
                      : formData.insuranceTypes.filter(t => t !== type);
                    setFormData({ ...formData, insuranceTypes: newTypes });
                  }}
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-600">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Markets your company serves
          </label>
          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
            {marketOptions.map((market) => (
              <label key={market} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.markets.includes(market)}
                  onChange={(e) => {
                    const newMarkets = e.target.checked
                      ? [...formData.markets, market]
                      : formData.markets.filter(m => m !== market);
                    setFormData({ ...formData, markets: newMarkets });
                  }}
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-600">{market}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Annual Premium Volume
            </label>
            <select
              required
              value={formData.annualPremium}
              onChange={(e) => setFormData({ ...formData, annualPremium: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="">Select range</option>
              {premiumRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Employees
            </label>
            <select
              required
              value={formData.employeeCount}
              onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="">Select range</option>
              {employeeRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Business Model
          </label>
          <select
            required
            value={formData.businessModel}
            onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Select business model</option>
            {businessModelOptions.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Target Market
          </label>
          <select
            required
            value={formData.targetMarket}
            onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Select target market</option>
            {targetMarketOptions.map(market => (
              <option key={market} value={market}>{market}</option>
            ))}
          </select>
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
          Next Step
        </motion.button>
      </div>
    </form>
  );
}

export default BusinessDetails;