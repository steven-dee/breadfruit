function PriceBreakdown({ basePremium, selectedAddOns, addOns, paymentType }) {
  const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
    const addOn = addOns.find(a => a.id === addOnId);
    return total + (addOn ? addOn.price : 0);
  }, 0);

  const total = basePremium + addOnTotal;
  const annualTotal = total * (paymentType === 'annual' ? 12 : 1);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Price Breakdown</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Base Premium</span>
          <span className="text-gray-900">${basePremium.toFixed(2)}</span>
        </div>
        
        {selectedAddOns.map(addOnId => {
          const addOn = addOns.find(a => a.id === addOnId);
          return (
            <div key={addOnId} className="flex justify-between">
              <span className="text-gray-500">{addOn.name}</span>
              <span className="text-gray-900">${addOn.price.toFixed(2)}</span>
            </div>
          );
        })}

        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-medium">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">
              ${annualTotal.toFixed(2)}/{paymentType === 'annual' ? 'year' : 'month'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceBreakdown;