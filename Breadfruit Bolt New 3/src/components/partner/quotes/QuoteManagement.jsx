import { useState } from 'react';
import QuoteList from './QuoteList';
import QuoteDetails from './QuoteDetails';
import QuoteFilters from './QuoteFilters';
import { mockQuotes } from '../../../data/mockQuotes';

function QuoteManagement() {
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: 'all',
    type: 'all'
  });

  const handleQuoteSelect = (quote) => {
    setSelectedQuote(quote);
  };

  const handleStatusChange = (quoteId, newStatus) => {
    // In a real app, this would make an API call
    console.log(`Updating quote ${quoteId} status to ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Quote Management</h2>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600">
          Create New Quote
        </button>
      </div>

      <QuoteFilters filters={filters} onFilterChange={setFilters} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuoteList
          quotes={mockQuotes}
          onQuoteSelect={handleQuoteSelect}
          selectedQuoteId={selectedQuote?.id}
          filters={filters}
        />
        
        {selectedQuote ? (
          <QuoteDetails
            quote={selectedQuote}
            onStatusChange={handleStatusChange}
          />
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-500">Select a quote to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuoteManagement;