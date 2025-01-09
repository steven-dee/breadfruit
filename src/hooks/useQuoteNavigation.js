import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNextQuestion } from '../data/questions';

export function useQuoteNavigation() {
  const navigate = useNavigate();
  const [questionHistory, setQuestionHistory] = useState([]);

  const handleNext = useCallback((currentQuestion, answers, answer) => {
    // Add current question to history
    setQuestionHistory(prev => [...prev, currentQuestion]);

    // Get next question
    const next = getNextQuestion(currentQuestion.id, {
      ...answers,
      [currentQuestion.id]: answer
    });

    if (next) {
      return next;
    } else {
      // No more questions, proceed to quotes
      navigate('/quotes', { state: { answers } });
      return null;
    }
  }, [navigate]);

  const handleBack = useCallback(() => {
    const prevQuestion = questionHistory[questionHistory.length - 1];
    if (prevQuestion) {
      setQuestionHistory(prev => prev.slice(0, -1));
      return prevQuestion;
    }
    return null;
  }, [questionHistory]);

  const handleExit = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return {
    handleNext,
    handleBack,
    handleExit
  };
}