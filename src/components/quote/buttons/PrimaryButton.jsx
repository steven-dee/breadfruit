import { motion } from 'framer-motion';

function PrimaryButton({ children, onClick, disabled }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-3 px-6 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {children}
    </motion.button>
  );
}

export default PrimaryButton;