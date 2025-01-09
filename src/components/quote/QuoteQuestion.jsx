import { motion } from 'framer-motion';
import QuoteOption from './QuoteOption';

function QuoteQuestion({ question, options, selected, onSelect }) {
  return (
    <div className="text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white mb-12"
      >
        {question}
      </motion.h2>
      
      <div className="flex justify-center gap-6">
        {options.map((option) => (
          <QuoteOption
            key={option.value}
            value={option.value}
            label={option.label}
            selected={selected}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default QuoteQuestion;