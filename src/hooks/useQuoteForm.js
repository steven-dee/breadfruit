import { useState, useCallback } from 'react';

export function useQuoteForm() {
  const [formValues, setFormValues] = useState({});

  const handleFieldChange = useCallback((fieldId, value) => {
    setFormValues(prev => ({
      ...prev,
      [fieldId]: value
    }));
  }, []);

  const handleFormSubmit = useCallback((questionId, values) => {
    setFormValues(prev => ({
      ...prev,
      [questionId]: values
    }));
  }, []);

  return {
    formValues,
    handleFieldChange,
    handleFormSubmit
  };
}