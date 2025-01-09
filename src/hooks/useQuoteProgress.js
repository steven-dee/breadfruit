import { useState, useEffect } from 'react';
import { calculateProgress } from '../data/questions/utils/questionSequence';

export function useQuoteProgress(currentQuestion, answers) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!currentQuestion) return;
    const newProgress = calculateProgress(currentQuestion, answers);
    setProgress(newProgress);
  }, [currentQuestion, answers]);

  return progress;
}