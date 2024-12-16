import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function PricingTable({ isEditing, onSave, onCancel }) {
  const [prices, setPrices] = useState([
    {
      id: 1,
      product: 'Basic Auto Insurance',
      coverage: 'Third Party',
      basePrice: 89.99,
      minAge: 18,
      maxAge: 65,
      riskFactor: 1.0
    },
    {
      id: 2,
      product: 'Comprehensive Auto Insurance',
      coverage: 'Full Coverage',
      basePrice: 149.99,
      minAge: 21,
      maxAge: 70,
      riskFactor: 1.2
    },
    {
      id: 3,
      product: 'Premium Auto Insurance',
      coverage: 'Full Coverage + Extras',
      basePrice: 199.99,
      minAge: 25,
      maxAge: 75,
      riskFactor: 1.5
    }
  ]);

  const [editedPrices, setEditedPrices] = useState([]);

  useEffect(() => {
    setEditedPrices(prices);
  }, [isEditing]);

  const handlePriceChange = (id, field, value) => {
    setEditedPrices(prev =>
      prev.map(price =>
        price.id === id ? { ...price, [field]: parseFloat(value) || value } : price
      )
    );
  };

  const handleSave = () => {
    onSave(editedPrices);
  };

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Coverage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Base Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Min Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Max Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Risk Factor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {(isEditing ? editedPrices : prices).map((price) => (
              <tr key={price.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {price.product}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {price.coverage}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {isEditing ? (
                    <input
                      type="number"
                      value={price.basePrice}
                      onChange={(e) => handlePriceChange(price.id, 'basePrice', e.target.value)}
                      className="w-24 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      step="0.01"
                    />
                  ) : (
                    `$${price.basePrice}`
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {isEditing ? (
                    <input
                      type="number"
                      value={price.minAge}
                      onChange={(e) => handlePriceChange(price.id, 'minAge', e.target.value)}
                      className="w-20 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  ) : (
                    price.minAge
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {isEditing ? (
                    <input
                      type="number"
                      value={price.maxAge}
                      onChange={(e) => handlePriceChange(price.id, 'maxAge', e.target.value)}
                      className="w-20 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    />
                  ) : (
                    price.maxAge
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {isEditing ? (
                    <input
                      type="number"
                      value={price.riskFactor}
                      onChange={(e) => handlePriceChange(price.id, 'riskFactor', e.target.value)}
                      className="w-20 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      step="0.1"
                    />
                  ) : (
                    price.riskFactor
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && (
        <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600"
          >
            Save Changes
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default PricingTable;