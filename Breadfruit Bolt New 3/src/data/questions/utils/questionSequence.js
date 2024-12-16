import { vehicleQuestions, perVehicleQuestions } from '../vehicleQuestions';
import { vehicleDetailsQuestions } from '../vehicleDetailsQuestions';
import { insuranceQuestions } from '../insuranceQuestions';
import { personalQuestions } from '../personalQuestions';
import { drivingHistoryQuestions } from '../drivingHistoryQuestions';
import { contactQuestions } from '../contactQuestions';

export const getQuestionSequence = (totalVehicles) => {
  const sequence = [];

  // Add initial vehicle count question
  sequence.push(...vehicleQuestions);

  // Add questions for each vehicle
  for (let i = 0; i < totalVehicles; i++) {
    // Basic vehicle info
    sequence.push(...perVehicleQuestions.map(q => ({
      ...q,
      vehicleIndex: i,
      id: `${q.id}_${i}`
    })));

    // Detailed vehicle info
    sequence.push(...vehicleDetailsQuestions.map(q => ({
      ...q,
      vehicleIndex: i,
      id: `${q.id}_${i}`
    })));
  }

  // Add remaining questions in the correct order
  sequence.push(
    ...insuranceQuestions,
    ...personalQuestions,
    ...drivingHistoryQuestions,
    ...contactQuestions
  );

  return sequence;
};

export const calculateProgress = (currentQuestion, answers) => {
  if (!currentQuestion) return 0;
  
  const totalVehicles = answers.vehicles ? parseInt(answers.vehicles) : 1;
  const sequence = getQuestionSequence(totalVehicles);
  
  // Find current question index
  const currentIndex = sequence.findIndex(q => q.id === currentQuestion.id);
  if (currentIndex === -1) return 0;

  // Calculate total questions based on user's answers
  const totalQuestions = sequence.reduce((total, q) => {
    if (q.type === 'multiQuestion') {
      return total + q.questions.length;
    }
    if (q.showIf && !q.showIf(answers, q.vehicleIndex)) {
      return total;
    }
    return total + 1;
  }, 0);

  // Calculate progress
  const progress = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  return Math.min(progress, 100);
};