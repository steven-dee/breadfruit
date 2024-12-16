import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuoteCard from '../components/quotes/QuoteCard';
import QuoteFilters from '../components/quotes/QuoteFilters';
import { generateQuotes } from '../utils/quoteGenerator';

function Quotes() {
  const location = useLocation();
  const answers = location.state?.answers || {};
  const quotes = generateQuotes(answers);

  return (
    <div className="min-h-screen bg-[#1e1e3f] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Insurance Quotes
          </h1>
          <p className="text-gray-400">
            We found {quotes.length} competitive quotes for you
          </p>
        </motion.div>

        <QuoteFilters />

        <div className="mt-8 space-y-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <QuoteCard quote={quote} answers={answers} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quotes;