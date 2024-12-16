import { useState } from 'react';
import { motion } from 'framer-motion';

function QuoteFilters() {
  const [sortBy, setSortBy] = useState('price');
  const [coverageType, setCoverageType] = useState('all');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sort by
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="price">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="coverage">Coverage</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Coverage Type
            </label>
            <select
              value={coverageType}
              onChange={(e) => setCoverageType(e.target.value)}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="all">All Types</option>
              <option value="basic">Basic</option>
              <option value="comprehensive">Comprehensive</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
            Reset Filters
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-600">
            Apply Filters
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default QuoteFilters;