import { useState } from 'react';

function AddOnSelector({ addOns, onAddOnsChange }) {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleAddOnToggle = (addOn) => {
    const newSelection = selectedAddOns.includes(addOn.id)
      ? selectedAddOns.filter(id => id !== addOn.id)
      : [...selectedAddOns, addOn.id];
    
    setSelectedAddOns(newSelection);
    onAddOnsChange(newSelection);
  };

  return (
    <div className="space-y-4">
      {addOns.map((addOn) => (
        <div key={addOn.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
          <div>
            <h4 className="font-medium text-gray-900">{addOn.name}</h4>
            <p className="text-sm text-gray-500">${addOn.price}/mo</p>
          </div>
          <button
            onClick={() => handleAddOnToggle(addOn)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
              ${selectedAddOns.includes(addOn.id)
                ? 'bg-primary text-white hover:bg-primary-600'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
          >
            {selectedAddOns.includes(addOn.id) ? 'Selected' : 'Add'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AddOnSelector;