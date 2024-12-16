import { useState } from 'react';
import { motion } from 'framer-motion';

function MultiQuestion({ question, onSelect }) {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const allQuestionsAnswered = question.questions.every(q => answers[q.id] !== undefined);

  const handleContinue = () => {
    if (allQuestionsAnswered) {
      onSelect(answers);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
      >
        Has anyone on this policy had:
      </motion.h2>

      <div className="space-y-8">
        {question.questions.map((q) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-white text-lg mb-4" dangerouslySetInnerHTML={{ __html: formatQuestion(q.question) }} />
            <div className="flex justify-center gap-4">
              {q.options.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => handleAnswer(q.id, option.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`question-option ${
                    answers[q.id] === option.value
                      ? 'question-option-selected'
                      : 'question-option-default'
                  }`}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {allQuestionsAnswered && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleContinue}
          className="w-full mt-8 p-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-600"
        >
          Continue
        </motion.button>
      )}
    </div>
  );
}

function formatQuestion(question) {
  return question
    .replace(/(\d+)/g, '<strong>$1</strong>')
    .replace(/tickets/g, '<strong>tickets</strong>')
    .replace(/DUI/g, '<strong>DUI</strong>')
    .replace(/conviction/g, '<strong>conviction</strong>');
}

export default MultiQuestion;