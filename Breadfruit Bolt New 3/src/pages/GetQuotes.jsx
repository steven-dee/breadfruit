import { useState, useEffect } from 'react';
import { getQuestionSequence } from '../data/questions';
import { useQuoteNavigation } from '../hooks/useQuoteNavigation';
import { useQuoteProgress } from '../hooks/useQuoteProgress';
import QuoteContainer from '../components/quote/QuoteContainer';
import '../styles/buttons.css';

function GetQuotes() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answers, setAnswers] = useState({});
  const { handleNext, handleBack, handleExit } = useQuoteNavigation();
  const progress = useQuoteProgress(currentQuestion, answers);

  // Initialize first question
  useEffect(() => {
    const sequence = getQuestionSequence(1);
    setCurrentQuestion(sequence[0]);
  }, []);

  const handleAnswer = (answer) => {
    // Save answer
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));

    // Get next question
    const next = handleNext(currentQuestion, answers, answer);
    if (next) {
      setCurrentQuestion(next);
    }
  };

  const handleBackClick = () => {
    const prev = handleBack();
    if (prev) {
      setCurrentQuestion(prev);
    }
  };

  if (!currentQuestion) return null;

  return (
    <QuoteContainer
      currentQuestion={currentQuestion}
      answers={answers}
      progress={progress}
      onAnswer={handleAnswer}
      onBack={handleBackClick}
      onExit={handleExit}
    />
  );
}

export default GetQuotes;