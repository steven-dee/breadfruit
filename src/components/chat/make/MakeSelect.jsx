import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function MakeSelect({ value, onChange }) {
  // Common car makes - in a real app this would come from an API/database
  const makes = [
    'Toyota',
    'Honda',
    'Nissan',
    'Ford',
    'Chevrolet',
    'Hyundai',
    'Kia',
    'Mazda'
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
          <option value="" disabled hidden>Select make</option>
          {makes.map(make => (
            <option key={make} value={make} className="text-gray-900">{make}</option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default MakeSelect;