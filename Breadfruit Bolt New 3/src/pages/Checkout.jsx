import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddOnSelector from '../components/checkout/AddOnSelector';
import PaymentSelector from '../components/checkout/PaymentSelector';
import PriceBreakdown from '../components/checkout/PriceBreakdown';
import PolicyDocumentViewer from '../components/documents/PolicyDocumentViewer';
import PremiumFinanceAgreement from '../components/documents/PremiumFinanceAgreement';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { quote, provider } = location.state || {};

  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [paymentType, setPaymentType] = useState('monthly');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  if (!quote || !provider) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">No quote selected</h2>
        <p className="mt-2 text-gray-600">Please select an insurance quote first.</p>
        <button
          onClick={() => navigate('/get-quotes')}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600"
        >
          Get Quotes
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions before proceeding.');
      return;
    }
    navigate('/payment', {
      state: {
        quote,
        provider,
        selectedAddOns,
        paymentType
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Complete Your Purchase</h1>

        <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Selected Plan</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-900">{provider.name}</p>
              <p className="text-sm text-gray-500">{quote.coverage.type}</p>
            </div>
            <p className="text-xl font-bold text-gray-900">${quote.monthlyPremium}/mo</p>
          </div>
          
          <PolicyDocumentViewer quote={quote} provider={provider} />
          
          {paymentType === 'monthly' && (
            <PremiumFinanceAgreement quote={quote} provider={provider} />
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add-ons</h2>
            <AddOnSelector
              addOns={quote.addOns}
              onAddOnsChange={setSelectedAddOns}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Schedule</h2>
            <PaymentSelector
              monthlyPremium={quote.monthlyPremium}
              annualPremium={quote.annualPremium}
              onPaymentTypeChange={setPaymentType}
            />
          </div>

          <PriceBreakdown
            basePremium={quote.monthlyPremium}
            selectedAddOns={selectedAddOns}
            addOns={quote.addOns}
            paymentType={paymentType}
          />

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the terms and conditions of the premium financing agreement and I have reviewed all policy documents
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-600 transition-colors"
          >
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;