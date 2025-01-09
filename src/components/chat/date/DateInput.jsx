import { motion } from 'framer-motion';

function DateInput({ value, onChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <input
        type="date"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-6 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl appearance-none focus:outline-none text-lg transition-colors hover:border-gray-300"
        max={new Date().toISOString().split('T')[0]}
      />
    </motion.div>
  );
}

export default DateInput;