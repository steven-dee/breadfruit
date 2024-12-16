import { format } from 'date-fns';

function QuoteList({ quotes, onQuoteSelect, selectedQuoteId, filters }) {
  const filteredQuotes = quotes.filter(quote => {
    if (filters.status !== 'all' && quote.status !== filters.status) return false;
    if (filters.type !== 'all' && quote.coverage.type !== filters.type) return false;
    // Add more filter logic as needed
    return true;
  });

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="px-4 py-5 border-b">
        <h3 className="text-lg font-medium text-gray-900">Recent Quotes</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {filteredQuotes.map((quote) => (
          <li
            key={quote.id}
            className={`cursor-pointer hover:bg-gray-50 ${
              selectedQuoteId === quote.id ? 'bg-gray-50' : ''
            }`}
            onClick={() => onQuoteSelect(quote)}
          >
            <div className="px-4 py-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Quote #{quote.id}
                  </p>
                  <p className="text-sm text-gray-500">
                    {quote.customerName || 'Anonymous User'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    ${quote.monthlyPremium}/mo
                  </p>
                  <p className="text-sm text-gray-500">
                    {format(new Date(quote.createdAt || new Date()), 'MMM d, yyyy')}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  quote.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  quote.status === 'approved' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {quote.status || 'Pending'}
                </span>
                <span className="text-sm text-gray-500">
                  {quote.coverage.type}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuoteList;