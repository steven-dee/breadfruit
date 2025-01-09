import { motion } from 'framer-motion';

function LicenseSelect({ value, onChange }) {
  const options = [
    { id: 'yes', label: 'Yes' },
    { id: 'no', label: 'No' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto space-y-4"
    >
      {options.map((option) => (
        <motion.button
          key={option.id}
          onClick={() => onChange(option.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center justify-between ${
            value === option.id
              ? 'border-2 border-primary bg-white text-gray-900'
              : 'bg-white text-gray-900 shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]'
          }`}
        >
          <span className="text-lg">{option.label}</span>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center
            ${value === option.id 
              ? 'bg-primary' 
              : 'border-2 border-gray-200'}`}
          >
            {value === option.id && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-4 h-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </motion.svg>
            )}
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}

export default LicenseSelect;