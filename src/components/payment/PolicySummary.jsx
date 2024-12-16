function PolicySummary({ quote, provider, selectedAddOns, paymentType }) {
  const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
    const addOn = quote.addOns.find(a => a.id === addOnId);
    return total + (addOn ? addOn.price : 0);
  }, 0);

  const monthlyTotal = quote.monthlyPremium + addOnTotal;
  const annualTotal = paymentType === 'annual' ? quote.annualPremium + (addOnTotal * 12) : monthlyTotal * 12;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Policy Summary</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-700">Insurance Provider</h4>
          <p className="text-gray-900">{provider.name}</p>
        </div>

        <div>
          <h4 className="font-medium text-gray-700">Coverage Type</h4>
          <p className="text-gray-900">{quote.coverage.type}</p>
        </div>

        <div>
          <h4 className="font-medium text-gray-700">Selected Add-ons</h4>
          {selectedAddOns.length > 0 ? (
            <ul className="list-disc list-inside text-gray-900">
              {selectedAddOns.map(addOnId => {
                const addOn = quote.addOns.find(a => a.id === addOnId);
                return (
                  <li key={addOnId}>
                    {addOn.name} (${addOn.price}/mo)
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-gray-500">No add-ons selected</p>
          )}
        </div>

        <div>
          <h4 className="font-medium text-gray-700">Payment Schedule</h4>
          <p className="text-gray-900">
            {paymentType === 'annual' ? 'Annual Payment' : 'Monthly Payment'}
          </p>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-900">Total Premium</span>
            <span className="text-xl font-bold text-gray-900">
              ${paymentType === 'annual' ? annualTotal.toFixed(2) : monthlyTotal.toFixed(2)}/
              {paymentType === 'annual' ? 'year' : 'month'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicySummary;