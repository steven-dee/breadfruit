import { motion } from 'framer-motion';

function QuoteHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-6 md:mb-8"
    >
      <h1 className="text-xl md:text-2xl text-white mb-2">
        We do <span className="text-primary">insurance</span> now
      </h1>
      <p className="text-sm md:text-base text-gray-400">
        Free quotes, secure form, competitive offers.
      </p>
    </motion.div>
  );
}

export default QuoteHeader;