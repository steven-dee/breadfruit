import { useState } from 'react';
import { motion } from 'framer-motion';

function NICInput({ value = '', onChange }) {
  const [noNIC, setNoNIC] = useState(value === 'NO_NIC');

  const handleNICChange = (e) => {
    const input = e.target.value.toUpperCase();
    // Only allow 5 characters
    if (input.length <= 5) {
      onChange(input);
    }
  };

  const handleCheckboxChange = (e) => {
    setNoNIC(e.target.checked);
    if (e.target.checked) {
      onChange('NO_NIC');
    } else {
      onChange('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <input
        type="text"
        value={value === 'NO_NIC' ? '' : value}
        onChange={handleNICChange}
        disabled={noNIC}
        placeholder="St. Lucian NIC #"
        className={`w-full px-6 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl appearance-none focus:outline-none text-lg transition-colors ${
          noNIC ? 'opacity-50' : 'hover:border-gray-300'
        }`}
        maxLength={5}
      />

      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="no-nic"
          checked={noNIC}
          onChange={handleCheckboxChange}
          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <label htmlFor="no-nic" className="ml-2 text-gray-900">
          They don't have a St. Lucian NIC #
        </label>
      </div>
    </motion.div>
  );
}

export default NICInput;