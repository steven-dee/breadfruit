import { motion } from 'framer-motion';

function PassportInput({ value, onChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value.toUpperCase())}
        placeholder="Passport ID Number"
        className="w-full px-6 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl appearance-none focus:outline-none text-lg transition-colors hover:border-gray-300"
      />
    </motion.div>
  );
}

export default PassportInput;