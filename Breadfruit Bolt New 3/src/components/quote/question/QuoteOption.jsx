import { motion } from 'framer-motion';

function QuoteOption({ value, label, selected, onClick, layout = 'mobile' }) {
  const baseClasses = `
    font-medium transition-all duration-200
    ${selected 
      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
      : 'bg-[#1e2937] text-white hover:bg-primary'
    }
  `;

  const mobileClasses = "w-full py-4 rounded-xl text-lg";
  const desktopClasses = "w-24 h-24 rounded-lg text-2xl";

  return (
    <motion.button
      onClick={() => onClick(value)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${layout === 'mobile' ? mobileClasses : desktopClasses}`}
    >
      {label}
    </motion.button>
  );
}

export default QuoteOption;