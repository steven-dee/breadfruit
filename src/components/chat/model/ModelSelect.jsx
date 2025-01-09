import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function ModelSelect({ value, onChange }) {
  // This would typically come from an API or database
  const models = [
    'Corolla',
    'Camry',
    'RAV4',
    'Highlander',
    'Civic',
    'Accord',
    'CR-V',
    'Pilot'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-6 py-4 bg-white border border-gray-200 text-gray-400 rounded-xl appearance-none focus:outline-none hover:border-gray-300 text-lg transition-colors"
        >
          <option value="" disabled hidden>Select model</option>
          {models.map(model => (
            <option key={model} value={model} className="text-gray-900">{model}</option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default ModelSelect;