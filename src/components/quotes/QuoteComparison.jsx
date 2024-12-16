import { useState } from 'react';
import { mockQuotes } from '../../data/mockQuotes';

function QuoteComparison({ quoteData, onQuoteSelect }) {
  const [sortBy, setSortBy] = useState('price');
  const [filterBy, setFilterBy] = useState('all');

  const sortQuotes = (quotes) => {
    return [...quotes].sort((a, b) => {
      if (sortBy === 'price') {
        return a.monthlyPremium - b.monthlyPremium;
      }
      return b.provider.rating - a.provider.rating;
    });
  };

  const filteredQuotes = sortQuotes(mockQuotes).filter(quote => {
    if (filterBy === 'all') return true;
    return quote.coverage.type.toLowerCase() === filterBy;
  });

  // Find best offers
  const lowestPrice = Math.min(...filteredQuotes.map(q => q.monthlyPremium));
  const lowestDeductible = Math.min(...filteredQuotes.map(q => q.coverage.deductible));
  const highestLiability = Math.max(...filteredQuotes.map(q => parseInt(q.coverage.liabilityLimit.replace(/,/g, ''))));

  const Badge = ({ text, color }) => (
    <div className={`absolute -top-3 -right-3 px-3 py-1 ${color} text-white text-xs font-semibold rounded-full shadow-lg`}>
      {text}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Quotes</h2>
      
      <div className="flex justify-between mb-6">
        <div className="flex space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
          </select>
          
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="all">All Coverage Types</option>
            <option value="basic">Basic</option>
            <option value="comprehensive">Comprehensive</option>
            <option value="premium">Premium</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredQuotes.map((quote) => (
          <div
            key={quote.id}
            className="relative border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            {quote.monthlyPremium === lowestPrice && (
              <Badge text="Best Price" color="bg-green-500" />
            )}
            {quote.coverage.deductible === lowestDeductible && (
              <div className="absolute -top-3 left-1/4 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-lg">
                Lowest Deductible
              </div>
            )}
            {parseInt(quote.coverage.liabilityLimit.replace(/,/g, '')) === highestLiability && (
              <div className="absolute -top-3 left-2/4 px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                Highest Coverage
              </div>
            )}

            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <img
                  src={quote.provider.logo}
                  alt={quote.provider.name}
                  className="h-12 w-12 object-contain"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {quote.provider.name}
                  </h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
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
                    <span className="ml-2 text-sm text-gray-500">
                      ({quote.provider.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  ${quote.monthlyPremium}/mo
                </p>
                <p className="text-sm text-gray-500">
                  or ${quote.annualPremium}/year
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Coverage Details</h4>
                <ul className="mt-2 text-sm text-gray-500 space-y-1">
                  <li>Type: {quote.coverage.type}</li>
                  <li>Deductible: ${quote.coverage.deductible}</li>
                  <li>Liability Limit: ${quote.coverage.liabilityLimit}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Available Add-ons</h4>
                <ul className="mt-2 text-sm text-gray-500 space-y-1">
                  {quote.addOns.map((addon) => (
                    <li key={addon.id}>
                      {addon.name}: ${addon.price}/mo
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => onQuoteSelect(quote)}
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
              >
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuoteComparison;