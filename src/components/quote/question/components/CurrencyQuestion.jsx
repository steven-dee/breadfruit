import { useState } from 'react';
import { motion } from 'framer-motion';
import CurrencyInput from '../../inputs/CurrencyInput';

function CurrencyQuestion({ question, onSelect, vehicleIndex, totalVehicles }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      onSelect(value);
    }
  };

  return (
    <div className="text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-white mb-8"
      >
        {question.question}
      </motion.h2>
      
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-6">
        <CurrencyInput
          value={value}
          onChange={setValue}
          placeholder={question.placeholder}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!value}
          className={`w-full p-4 rounded-xl font-medium transition-all duration-200 ${
            value 
              ? 'bg-primary text-white hover:bg-primary-600' 
              : 'bg-gray-600 text-gray-300 cursor-not-allowed'
          }`}
        >
          Continue
        </motion.button>
      </form>
    </div>
  );
}

export default CurrencyQuestion;