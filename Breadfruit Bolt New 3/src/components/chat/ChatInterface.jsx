import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ChatMessage from './ChatMessage';
import ChatProgress from './ChatProgress';
import { chatFlow } from '../../data/chatQuestions';

function ChatInterface({ onComplete }) {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('initial');
  const [customerInfo, setCustomerInfo] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (chatFlow.initial) {
      setMessages([
        { 
          content: chatFlow.initial.message, 
          options: chatFlow.initial.options, 
          type: chatFlow.initial.type,
          placeholder: chatFlow.initial.placeholder,
          required: chatFlow.initial.required,
          isUser: false 
        }
      ]);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getNextStep = (currentStep, selectedOption) => {
    const steps = {
      initial: 'first_name',
      first_name: 'last_name',
      last_name: 'date_of_birth',
      date_of_birth: 'gender',
      gender: 'phone_number',
      phone_number: 'email',
      email: 'residential_address',
      residential_address: 'license_number',
      license_number: 'license_country',
      license_country: 'license_expiry',
      license_expiry: 'driving_experience',
      driving_experience: 'occupation',
      occupation: 'marital_status',
      marital_status: 'additional_drivers',
      additional_drivers: 'vehicle_make',
      vehicle_make: 'vehicle_model',
      vehicle_model: 'vehicle_year',
      vehicle_year: 'vin_number',
      vin_number: 'license_plate',
      license_plate: 'market_value',
      market_value: 'mileage',
      mileage: 'ownership_status',
      ownership_status: selectedOption.id === 'owned' ? 'vehicle_usage' : 'financier_details',
      financier_details: 'vehicle_usage',
      vehicle_usage: selectedOption.id === 'personal' ? 'annual_mileage' : 'business_details',
      business_details: 'annual_mileage',
      annual_mileage: 'safety_features',
      safety_features: 'parking_location',
      parking_location: 'current_insurance',
      current_insurance: selectedOption.id === 'yes_insured' ? 'current_insurer' : 'insurance_years',
      current_insurer: 'policy_number',
      policy_number: 'current_premium',
      current_premium: 'insurance_years',
      insurance_years: 'claims_history',
      claims_history: 'violations',
      violations: 'accidents',
      accidents: 'verification_docs',
      verification_docs: null
    };

    return steps[currentStep] || null;
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [currentStep]: option.id
    }));

    setCustomerInfo(prev => ({
      ...prev,
      [currentStep]: option.text || option.id
    }));

    setMessages(prev => [...prev, { content: option.text || option.id, isUser: true }]);

    const nextStep = getNextStep(currentStep, option);

    if (nextStep && chatFlow[nextStep]) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            content: chatFlow[nextStep].message,
            options: chatFlow[nextStep].options,
            type: chatFlow[nextStep].type,
            placeholder: chatFlow[nextStep].placeholder,
            required: chatFlow[nextStep].required,
            isUser: false
          }
        ]);
        setCurrentStep(nextStep);
      }, 500);
    } else {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { 
            content: "Great! I have all the information I need. Let me find the best insurance quotes for you.",
            isUser: false 
          }
        ]);
        setTimeout(() => onComplete(customerInfo), 1500);
      }, 500);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-[700px] bg-gray-50 rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-6 bg-white border-b">
        <ChatProgress currentStep={currentStep} />
      </div>
      
      <div className="flex items-center p-4 bg-white border-b">
        <img
          src="/images/tanya.jpg"
          alt="Tanya"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <div className="text-lg font-semibold">Tanya</div>
          <div className="text-sm text-gray-500">Insurance Assistant</div>
        </div>
        <div className="ml-2 w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.content}
              isUser={message.isUser}
              options={message.options}
              type={message.type}
              placeholder={message.placeholder}
              required={message.required}
              onOptionSelect={handleOptionSelect}
              selectedOption={selectedOptions[currentStep]}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </motion.div>
  );
}

export default ChatInterface;