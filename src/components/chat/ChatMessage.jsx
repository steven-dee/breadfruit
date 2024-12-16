import { useState } from 'react';
import { motion } from 'framer-motion';

function ChatMessage({ message, isUser, options, onOptionSelect, type, placeholder, required }) {
  const [inputValue, setInputValue] = useState('');
  const [selectedFiles, setSelectedFiles] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'file') {
      onOptionSelect({ id: 'files', text: 'Files uploaded', files: selectedFiles });
    } else {
      onOptionSelect({ id: inputValue, text: inputValue });
    }
    setInputValue('');
  };

  const handleFileChange = (docId) => (e) => {
    if (e.target.files[0]) {
      setSelectedFiles(prev => ({
        ...prev,
        [docId]: e.target.files[0]
      }));
    }
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`max-w-[85%] rounded-2xl px-6 py-4 ${
          isUser
            ? 'bg-primary text-white'
            : 'bg-white text-gray-900 shadow-md'
        }`}
      >
        <p className="text-[16px] leading-6 font-medium">{message}</p>
        
        {!isUser && (
          <div className="mt-4 space-y-3">
            {type === 'text' || type === 'email' || type === 'tel' || type === 'date' ? (
              <form onSubmit={handleSubmit} className="flex space-x-3">
                <input
                  type={type}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={placeholder}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-600 transition-colors font-medium"
                >
                  Send
                </button>
              </form>
            ) : type === 'file' ? (
              <div className="space-y-4">
                {required.map(doc => (
                  <div key={doc.id} className="flex items-center space-x-3">
                    <input
                      type="file"
                      onChange={handleFileChange(doc.id)}
                      className="hidden"
                      id={`file-${doc.id}`}
                    />
                    <label
                      htmlFor={`file-${doc.id}`}
                      className={`flex-1 px-4 py-3 rounded-xl border-2 border-dashed cursor-pointer text-center transition-colors ${
                        selectedFiles[doc.id] ? 'border-primary bg-primary-50 text-primary' : 'border-gray-200 hover:border-primary text-gray-600'
                      }`}
                    >
                      {selectedFiles[doc.id] ? selectedFiles[doc.id].name : doc.text}
                    </label>
                  </div>
                ))}
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(selectedFiles).length !== required.length}
                  className="w-full px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary-600 transition-colors disabled:opacity-50 font-medium"
                >
                  Upload Documents
                </button>
              </div>
            ) : options?.length > 0 && (
              <div className="space-y-3">
                {options.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => onOptionSelect(option)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full text-left px-6 py-4 text-[15px] rounded-xl transition-all bg-white text-gray-900 hover:bg-gray-50 shadow-sm border border-gray-100 font-medium"
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default ChatMessage;