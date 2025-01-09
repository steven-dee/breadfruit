import { motion } from 'framer-motion';

function QuestionNavigation({ onBack, onExit, progress }) {
  return (
    <div className="flex justify-between items-center mb-8">
      {onBack && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="text-gray-400 hover:text-white text-sm flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>
      )}
      
      {progress > 0 && (
        <div className="text-sm text-gray-400">
          {progress}% Complete
        </div>
      )}

      {onExit && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExit}
          className="text-gray-400 hover:text-white text-sm flex items-center"
        >
          Exit
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      )}
    </div>
  );
}

export default QuestionNavigation;