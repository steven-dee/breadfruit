import { motion } from 'framer-motion';

function YearButton({ year, selected, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full py-3 rounded-lg text-base font-medium transition-all duration-200
        ${selected 
          ? 'bg-primary text-white shadow-lg shadow-primary/30' 
          : 'bg-[#1e2937] text-white hover:bg-[#2d3745]'
        }
      `}
    >
      {selected && (
        <motion.div
          layoutId="selectedYear"
          className="absolute inset-0 bg-primary rounded-lg"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">
        {year}
      </span>
    </motion.button>
  );
}

export default YearButton;