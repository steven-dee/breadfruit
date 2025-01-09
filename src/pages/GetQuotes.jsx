import { useNavigate } from 'react-router-dom';
import ChatContainer from '../components/chat/ChatContainer';
import ChatMessage from '../components/chat/ChatMessage';
import ChatInputGroup from '../components/chat/ChatInputGroup';
import QuestionNavigation from '../components/chat/navigation/QuestionNavigation';
import { useQuestionFlow } from '../hooks/useQuestionFlow';
import { renderQuestionInput } from '../utils/questionRenderers';

function GetQuotes() {
  const navigate = useNavigate();
  const { 
    currentQuestion, 
    values, 
    handleInputChange, 
    handleNext,
    handleBack,
    isComplete,
    progress 
  } = useQuestionFlow();

  const handleExit = () => {
    navigate('/');
  };

  if (!currentQuestion) return null;

  return (
    <ChatContainer>
      <QuestionNavigation 
        onBack={handleBack}
        onExit={handleExit}
        progress={progress}
      />
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
        {renderQuestionInput(currentQuestion, values, handleInputChange)}
      </div>
      <button
        onClick={handleNext}
        disabled={!isComplete}
        className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
      >
        Continue
      </button>
    </ChatContainer>
  );
}

export default GetQuotes;