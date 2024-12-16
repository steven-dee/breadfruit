function PaymentSelector({ monthlyPremium, annualPremium, onPaymentTypeChange }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <input
          type="radio"
          id="monthly"
          name="payment-type"
          value="monthly"
          defaultChecked
          onChange={() => onPaymentTypeChange('monthly')}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
        />
        <label htmlFor="monthly" className="ml-3">
          <span className="block text-sm font-medium text-gray-900">Monthly Payment</span>
          <span className="block text-sm text-gray-500">${monthlyPremium}/month</span>
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="annual"
          name="payment-type"
          value="annual"
          onChange={() => onPaymentTypeChange('annual')}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
        />
        <label htmlFor="annual" className="ml-3">
          <span className="block text-sm font-medium text-gray-900">Annual Payment</span>
          <span className="block text-sm text-gray-500">${annualPremium}/year (Save ${(monthlyPremium * 12 - annualPremium).toFixed(2)})</span>
        </label>
      </div>
    </div>
  );
}

export default PaymentSelector;