import ChatMessage from './messages/ChatMessage';
import InputGroup from './form/InputGroup';
import NextButton from './buttons/NextButton';

function QuestionScreen() {
  return (
    <div className="space-y-6">
      <ChatMessage />
      <InputGroup />
      <NextButton />
    </div>
  );
}

export default QuestionScreen;