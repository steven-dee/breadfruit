import { motion } from 'framer-motion';

function MultiSelect({ options, selected = [], onChange }) {
  const toggleOption = (value) => {
    const newSelected = selected.includes(value)
      ? selected.filter(v => v !== value)
      : [...selected, value];
    onChange(newSelected);
  };

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <motion.button
          key={option.value}
          type="button"
          onClick={() => toggleOption(option.value)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full p-4 text-left rounded-xl transition-all duration-200 ${
            selected.includes(option.value)
              ? 'bg-primary text-white shadow-lg shadow-primary/30'
              : 'bg-[#1e2937] text-white hover:bg-[#2d3745]'
          }`}
        >
          <div className="flex items-center">
            <div className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center ${
              selected.includes(option.value)
                ? 'border-white bg-white'
                : 'border-gray-400'
            }`}>
              {selected.includes(option.value) && (
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              )}
            </div>
            {option.label}
          </div>
        </motion.button>
      ))}
    </div>
  );
}

export default MultiSelect;