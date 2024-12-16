import { motion } from 'framer-motion';

function QuoteProgress({ progress }) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <div className="relative">
        <div className="h-2 bg-gray-700 rounded-full">
          <motion.div 
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="absolute -bottom-6 w-full text-center">
          <span className="text-sm text-primary">
            {progress}% Complete
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuoteProgress;