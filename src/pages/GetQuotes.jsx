import { useState } from 'react';
import ChatInterface from '../components/chat/ChatInterface';
import QuoteComparison from '../components/quotes/QuoteComparison';
import CoverageCustomization from '../components/quotes/CoverageCustomization';
import { useNavigate } from 'react-router-dom';

function GetQuotes() {
  const [step, setStep] = useState(1);
  const [quoteData, setQuoteData] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const navigate = useNavigate();

  const handleChatComplete = (data) => {
    setQuoteData(data);
    setStep(2);
  };

  const handleQuoteSelect = (quote) => {
    setSelectedQuote(quote);
    setStep(3);
  };

  const handleCoverageSubmit = (customizedQuote) => {
    navigate('/checkout', { 
      state: { 
        quote: customizedQuote,
        provider: selectedQuote.provider
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {step === 1 && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Chat with Tanya to Get Your Quote
            </h1>
            <ChatInterface onComplete={handleChatComplete} />
          </div>
        )}
        
        {step === 2 && quoteData && (
          <QuoteComparison 
            quoteData={quoteData}
            onQuoteSelect={handleQuoteSelect}
          />
        )}
        
        {step === 3 && selectedQuote && (
          <CoverageCustomization 
            quote={selectedQuote}
            onSubmit={handleCoverageSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default GetQuotes;