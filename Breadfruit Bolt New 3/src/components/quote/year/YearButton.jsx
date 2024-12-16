import { motion } from 'framer-motion';

function YearButton({ year, selected, onClick, layout = 'mobile' }) {
  const baseClasses = `
    font-medium transition-all duration-200
    ${selected 
      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
      : 'bg-[#1e2937] text-white hover:bg-primary'
    }
  `;

  const mobileClasses = "w-full py-4 rounded-xl text-lg";
  const desktopClasses = "w-full aspect-[3/2] rounded-lg text-base flex items-center justify-center";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${layout === 'mobile' ? mobileClasses : desktopClasses}`}
    >
      {year}
    </motion.button>
  );
}

export default YearButton;