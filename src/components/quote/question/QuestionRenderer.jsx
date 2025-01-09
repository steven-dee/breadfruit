import { motion } from 'framer-motion';
import QuoteQuestion from './QuoteQuestion';
import YearSelector from '../year/YearSelector';
import MakeSelector from '../make/MakeSelector';
import ModelSelector from '../model/ModelSelector';
import TrimSelector from '../trim/TrimSelector';
import InsuranceSelector from '../insurance/InsuranceSelector';
import MultiQuestion from '../incidents/MultiQuestion';
import FormQuestion from '../form/FormQuestion';
import CurrencyQuestion from './components/CurrencyQuestion';

const questionComponents = {
  YearSelector,
  MakeSelector,
  ModelSelector,
  TrimSelector,
  InsuranceSelector,
  MultiQuestion,
  FormQuestion,
  QuoteQuestion,
  CurrencyQuestion
};

function QuestionRenderer({ question, answers, onAnswer }) {
  if (!question) return null;

  const questionType = getQuestionType(question);
  const Component = questionComponents[questionType];
  
  if (!Component) return null;

  const vehicleIndex = question.vehicleIndex || 0;
  const totalVehicles = answers.vehicles ? parseInt(answers.vehicles) : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto"
    >
      <Component
        question={question}
        options={question.options}
        selected={answers[question.id]}
        onSelect={onAnswer}
        vehicleIndex={vehicleIndex}
        totalVehicles={totalVehicles}
        answers={answers}
      />
    </motion.div>
  );
}

function getQuestionType(question) {
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
}

export default QuestionRenderer;