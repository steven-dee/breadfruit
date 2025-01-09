import { useState } from 'react';
import { questions, getNextQuestion, isQuestionComplete } from '../data/questions/questionFlow';

export function useQuestionFlow() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [values, setValues] = useState({});

  const handleInputChange = (field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const currentQuestion = getNextQuestion();
  const isComplete = currentQuestion ? isQuestionComplete(currentQuestion, values) : false;
  const progress = Math.round((currentQuestionIndex / questions.length) * 100);

  return {
    currentQuestion,
    values,
    handleInputChange,
    handleNext,
    isComplete,
    progress,
    totalQuestions: questions.length
  };
}