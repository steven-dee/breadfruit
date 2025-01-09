import { getQuestionSequence } from './questionSequence';

// Helper to get next question
export const getNextQuestion = (currentId, answers) => {
  const totalVehicles = answers.vehicles ? parseInt(answers.vehicles) : 1;
  const sequence = getQuestionSequence(totalVehicles);
  
  const currentIndex = sequence.findIndex(q => q.id === currentId);
  if (currentIndex === -1) return null;

  for (let i = currentIndex + 1; i < sequence.length; i++) {
    const question = sequence[i];
    if (!question.showIf || question.showIf(answers)) {
      return question;
    }
  }
  return null;
};

// Helper to get vehicle index from question ID
export const getVehicleIndex = (questionId) => {
  const match = questionId.match(/_(\d+)$/);
  return match ? parseInt(match[1]) : null;
};

// Helper to get base question ID without vehicle index
export const getBaseQuestionId = (questionId) => {
  return questionId.replace(/_\d+$/, '');
};