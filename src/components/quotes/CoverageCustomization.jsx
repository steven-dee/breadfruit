import { useState } from 'react';
import PolicyDocumentViewer from '../documents/PolicyDocumentViewer';

function CoverageCustomization({ quote, onSubmit }) {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [paymentType, setPaymentType] = useState('monthly');

  const calculateTotal = () => {
    const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
      const addOn = quote.addOns.find(a => a.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);

    const baseAmount = paymentType === 'monthly' ? quote.monthlyPremium : quote.annualPremium;
    return baseAmount + (paymentType === 'monthly' ? addOnTotal : addOnTotal * 12);
  };

  const handleSubmit = () => {
    onSubmit({
      ...quote,
      selectedAddOns,
      paymentType,
      finalPrice: calculateTotal()
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Customize Your Coverage</h2>

      <PolicyDocumentViewer quote={quote} provider={quote.provider} />

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Optional Add-ons</h3>
        <div className="space-y-4">
          {quote.addOns.map((addOn) => (
            <div
              key={addOn.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <h4 className="font-medium text-gray-900">{addOn.name}</h4>
                <p className="text-sm text-gray-500">${addOn.price}/month</p>
              </div>
              <button
                onClick={() => {
                  setSelectedAddOns(prev =>
                    prev.includes(addOn.id)
                      ? prev.filter(id => id !== addOn.id)
                      : [...prev, addOn.id]
                  );
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedAddOns.includes(addOn.id)
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {selectedAddOns.includes(addOn.id) ? 'Selected' : 'Add'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Schedule</h3>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="payment-type"
                value="monthly"
                checked={paymentType === 'monthly'}
                onChange={(e) => setPaymentType(e.target.value)}
                className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="ml-2">
                Monthly - ${quote.monthlyPremium}/month
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment-type"
                value="annual"
                checked={paymentType === 'annual'}
                onChange={(e) => setPaymentType(e.target.value)}
                className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="ml-2">
                Annual - ${quote.annualPremium}/year (Save ${(quote.monthlyPremium * 12 - quote.annualPremium).toFixed(2)})
              </span>
            </label>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-medium text-gray-900">Total</span>
            <span className="text-2xl font-bold text-gray-900">
              ${calculateTotal().toFixed(2)}/{paymentType === 'monthly' ? 'month' : 'year'}
            </span>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-600 transition-colors"
          >
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoverageCustomization;