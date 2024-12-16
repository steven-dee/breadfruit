import { useState } from 'react';
import { motion } from 'framer-motion';
import FormField from './FormField';

function FormQuestion({ question, onSelect, answers }) {
  const [formValues, setFormValues] = useState({});

  const handleFieldChange = (fieldId, value) => {
    setFormValues(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelect(formValues);
  };

  const getTitle = () => {
    if (typeof question.getTitleWithName === 'function') {
      return question.getTitleWithName(answers);
    }
    return question.question || '';
  };

  return (
    <div className="max-w-md mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-white text-center mb-4"
      >
        {getTitle()}
      </motion.h2>
      
      {question.subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center mb-8"
        >
          {question.subtitle}
        </motion.p>
      )}

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {question.fields?.map((field) => (
          <FormField
            key={field.id}
            field={field}
            value={formValues[field.id] || ''}
            onChange={handleFieldChange}
          />
        ))}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-600 transition-colors"
        >
          Continue
        </motion.button>
      </motion.form>
    </div>
  );
}

export default FormQuestion;