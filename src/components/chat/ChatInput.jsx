import { useState } from 'react';

function ChatInput({ placeholder = '', value = '', onChange = () => {}, type = 'text' }) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`w-full px-6 py-4 rounded-xl text-gray-900 placeholder-gray-400 text-lg
        focus:outline-none focus:ring-0
        ${isFocused || hasValue ? 'border-2 border-primary' : 'border border-gray-200'}`}
    />
  );
}

export default ChatInput;