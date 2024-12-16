import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CurrencyInput({ value, onChange, placeholder }) {
  const [displayValue, setDisplayValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      setDisplayValue(formatValue(value));
    }
  }, [value, isFocused]);

  const handleChange = (e) => {
    // Remove all non-numeric characters
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setDisplayValue(formatValue(numericValue));
    onChange(numericValue ? parseInt(numericValue) : '');
  };

  const handleFocus = () => {
    setIsFocused(true);
    // Show only numbers when focused
    setDisplayValue(value || '');
  };

  const handleBlur = () => {
    setIsFocused(false);
    setDisplayValue(formatValue(value));
  };

  const formatValue = (val) => {
    if (!val) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <input
        type="text"
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="w-full p-4 bg-[#1e2937] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-center text-lg"
      />
    </motion.div>
  );
}

export default CurrencyInput;