import { motion } from 'framer-motion';

function QuoteOption({ value, label, selected, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(value)}
      className={`
        w-24 h-24 rounded-lg text-2xl font-medium transition-all duration-200
        ${selected === value 
          ? 'bg-primary text-white shadow-lg shadow-primary/30' 
          : 'bg-[#1e2937] text-white hover:bg-[#2d3745]'
        }
      `}
    >
      {label}
    </motion.button>
  );
}

export default QuoteOption;