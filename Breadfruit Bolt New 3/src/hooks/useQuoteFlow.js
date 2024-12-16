import { useState, useMemo } from 'react';
import { questions } from '../data/quoteQuestions';

export function useQuoteFlow() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [vehicleIndex, setVehicleIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const totalVehicles = selectedAnswers.vehicles ? parseInt(selectedAnswers.vehicles) : 1;
  
  const progress = useMemo(() => {
    const totalQuestions = questions.length * (totalVehicles > 1 ? totalVehicles : 1);
    return Math.round((currentQuestionIndex / totalQuestions) * 100);
  }, [currentQuestionIndex, totalVehicles]);

  const handleAnswer = (answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));

    if (currentQuestion.id === 'vehicles') {
      setVehicleIndex(0);
    } else if (vehicleIndex < totalVehicles - 1) {
      setVehicleIndex(prev => prev + 1);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      if (totalVehicles > 1) {
        setVehicleIndex(0);
      }
    }
  };

  return {
    currentQuestion,
    progress,
    selectedAnswers,
    handleAnswer,
    vehicleIndex,
    totalVehicles
  };
}