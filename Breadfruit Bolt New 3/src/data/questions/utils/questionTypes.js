export const getQuestionType = (question) => {
  if (!question) return null;
  
  if (question.type === 'multiQuestion') return 'MultiQuestion';
  if (question.type === 'form') return 'FormQuestion';
  if (question.type === 'currency') return 'CurrencyQuestion';
  
  // Vehicle-specific questions
  const baseId = question.id.split('_')[0];
  if (baseId === 'vehicleYear') return 'YearSelector';
  if (baseId === 'vehicleMake') return 'MakeSelector';
  if (baseId === 'vehicleModel') return 'ModelSelector';
  if (baseId === 'vehicleTrim') return 'TrimSelector';
  
  // Other questions
  if (question.id === 'currentInsurer') return 'InsuranceSelector';
  return 'QuoteQuestion';
};