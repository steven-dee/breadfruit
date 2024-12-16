import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuoteStore } from '../../stores/quotes';
import { toast } from 'react-hot-toast';

function QuoteCard({ quote, customerInfo }) {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const addApplication = useQuoteStore(state => state.addApplication);

  const handleSelect = () => {
    const application = {
      customerName: customerInfo.name || 'Anonymous User',
      email: customerInfo.email || 'anonymous@example.com',
      quote: {
        ...quote,
        selectedAt: new Date().toISOString()
      },
      vehicle: customerInfo.vehicle || 'Not specified',
      usage: customerInfo.usage || 'Not specified',
      experience: customerInfo.experience || 'Not specified'
    };

    const newApplication = addApplication(application);
    toast.success('Quote selected! Proceeding to checkout.');
    navigate('/checkout', { 
      state: { 
        quote,
        provider: quote.provider,
        applicationId: newApplication.id
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-lg font-semibold">{quote.provider.name[0]}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{quote.provider.name}</h3>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-sm text-gray-600">
                {quote.provider.rating} ({quote.provider.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">${quote.monthlyPremium}/mo</p>
          <p className="text-sm text-gray-500">or ${quote.annualPremium}/year</p>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <div className="mt-4 border-t pt-4">
            <h4 className="font-semibold mb-2">Coverage Details</h4>
            <ul className="space-y-2 text-sm">
              <li>Type: {quote.coverage.type}</li>
              <li>Deductible: ${quote.coverage.deductible}</li>
              <li>Liability Limit: ${quote.coverage.liabilityLimit}</li>
              <li>Collision Coverage: {quote.coverage.collisionCoverage ? 'Yes' : 'No'}</li>
              <li>Personal Injury: {quote.coverage.personalInjury ? 'Yes' : 'No'}</li>
            </ul>

            <h4 className="font-semibold mt-4 mb-2">Available Add-ons</h4>
            <ul className="space-y-2 text-sm">
              {quote.addOns.map(addon => (
                <li key={addon.id}>
                  {addon.name}: ${addon.price}/mo
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handleSelect}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Select Plan
        </button>
      </div>
    </div>
  );
}

export default QuoteCard;