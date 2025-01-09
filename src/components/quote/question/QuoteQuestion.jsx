import { motion } from 'framer-motion';
import QuoteOption from './QuoteOption';

function QuoteQuestion({ question, options = [], selected, onSelect }) {
  if (!question || !options) return null;

  const questionText = typeof question === 'string' ? question : question.question;

  return (
    <div className="text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12"
      >
        {questionText}
      </motion.h2>
      
      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col gap-4 max-w-sm mx-auto">
        {options.map((option) => (
          <QuoteOption
            key={option.value}
            value={option.value}
            label={option.label}
            selected={selected === option.value}
            onClick={() => onSelect(option.value)}
            layout="mobile"
          />
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-center gap-6">
        {options.map((option) => (
          <QuoteOption
            key={option.value}
            value={option.value}
            label={option.label}
            selected={selected === option.value}
            onClick={() => onSelect(option.value)}
            layout="desktop"
          />
        ))}
      </div>
    </div>
  );
}

export default QuoteQuestion;