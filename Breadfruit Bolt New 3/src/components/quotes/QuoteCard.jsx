import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function QuoteCard({ quote, answers }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate('/checkout', { 
      state: { 
        quote,
        answers
      }
    });
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src={quote.provider.logo} 
              alt={quote.provider.name}
              className="h-12 w-12 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {quote.provider.name}
              </h3>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(quote.provider.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({quote.provider.reviewCount.toLocaleString()} reviews)
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-gray-900">
              ${quote.monthlyPremium}
              <span className="text-sm font-normal text-gray-500">/mo</span>
            </p>
            <p className="text-sm text-gray-500">
              or ${quote.annualPremium}/year
            </p>
          </div>
        </div>

        {/* Coverage Details */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 border-t pt-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Coverage Details</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Type: {quote.coverage.type}</li>
                  <li>Deductible: ${quote.coverage.deductible}</li>
                  <li>Liability Limit: ${quote.coverage.liabilityLimit}</li>
                  <li>Collision Coverage: {quote.coverage.collisionCoverage ? 'Yes' : 'No'}</li>
                  <li>Personal Injury: {quote.coverage.personalInjury ? 'Yes' : 'No'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Available Add-ons</h4>
                <ul className="space-y-2 text-gray-600">
                  {quote.addOns.map(addon => (
                    <li key={addon.id} className="flex justify-between">
                      <span>{addon.name}</span>
                      <span>${addon.price}/mo</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Actions */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary hover:text-primary-600 font-medium"
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
          <motion.button
            onClick={handleSelect}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 font-medium"
          >
            Select Plan
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default QuoteCard;