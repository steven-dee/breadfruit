import { motion } from 'framer-motion';
import QuoteNavigation from './navigation/QuoteNavigation';
import QuoteHeader from './header/QuoteHeader';
import QuoteProgress from './progress/QuoteProgress';
import QuestionRenderer from './question/QuestionRenderer';

function QuoteContainer({ 
  currentQuestion,
  answers,
  progress,
  onAnswer,
  onBack,
  onExit
}) {
  return (
    <div className="min-h-screen bg-[#1e1e3f] px-4 py-6 md:py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-navy-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-xl"
        >
          <QuoteNavigation onBack={onBack} onExit={onExit} />
          <QuoteHeader />
          <QuoteProgress progress={progress} />
          <QuestionRenderer
            question={currentQuestion}
            answers={answers}
            onAnswer={onAnswer}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default QuoteContainer;