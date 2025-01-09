import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatContainer from '../components/chat/ChatContainer';
import ChatMessage from '../components/chat/ChatMessage';
import ChatInputGroup from '../components/chat/ChatInputGroup';
import ChatButton from '../components/chat/ChatButton';
import ModelSelect from '../components/chat/model/ModelSelect';
import MakeSelect from '../components/chat/make/MakeSelect';
import YearSelect from '../components/chat/year/YearSelect';
import ColorSelect from '../components/chat/color/ColorSelect';
import DriverSelect from '../components/chat/driver/DriverSelect';
import NICInput from '../components/chat/nic/NICInput';
import PassportInput from '../components/chat/passport/PassportInput';
import PassportCountrySelect from '../components/chat/passport/PassportCountrySelect';
import DateInput from '../components/chat/date/DateInput';
import LicenseSelect from '../components/chat/license/LicenseSelect';
import { useQuestionFlow } from '../hooks/useQuestionFlow';
import { QUESTION_TYPES } from '../data/questions/questionFlow';

function GetQuotes() {
  const navigate = useNavigate();
  const { 
    currentQuestion, 
    values, 
    handleInputChange, 
    handleNext, 
    isComplete,
    progress 
  } = useQuestionFlow();

  useEffect(() => {
    if (!currentQuestion) {
      navigate('/quotes', { state: { answers: values } });
    }
  }, [currentQuestion, values, navigate]);

  if (!currentQuestion) {
    return null;
  }

  const renderQuestionInput = () => {
    switch (currentQuestion.type) {
      case QUESTION_TYPES.TEXT_INPUT:
        return (
          <ChatInputGroup 
            values={values} 
            onChange={handleInputChange} 
          />
        );
      case QUESTION_TYPES.YEAR_SELECT:
        return (
          <YearSelect
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      case QUESTION_TYPES.MAKE_SELECT:
        return (
          <MakeSelect
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      case QUESTION_TYPES.MODEL_SELECT:
        return (
          <ModelSelect
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      case QUESTION_TYPES.COLOR_SELECT:
        return (
          <ColorSelect
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      case QUESTION_TYPES.DRIVER_SELECT:
        return (
          <DriverSelect
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      case QUESTION_TYPES.NIC_INPUT:
        return (
          <NICInput
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      case QUESTION_TYPES.PASSPORT_INPUT:
        return (
          <PassportInput
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      case QUESTION_TYPES.PASSPORT_COUNTRY:
        return (
          <PassportCountrySelect
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      case QUESTION_TYPES.DATE_INPUT:
        return (
          <DateInput
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      case QUESTION_TYPES.LICENSE_SELECT:
        return (
          <LicenseSelect
            value={values[currentQuestion.field] || ''}
            onChange={(value) => handleInputChange(currentQuestion.field, value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ChatContainer>
      <div className="space-y-6">
        {currentQuestion.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            showTriangle={message.showTriangle}
          />
        ))}
      </div>
      <div className="mt-8">
        {renderQuestionInput()}
      </div>
      <ChatButton 
        onClick={handleNext}
        disabled={!isComplete}
      >
        Next
      </ChatButton>
    </ChatContainer>
  );
}

export default GetQuotes;