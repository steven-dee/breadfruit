import ChatAvatar from './ChatAvatar';

function ChatHeader() {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <ChatAvatar />
            <div>
              <span className="font-medium">Tanya</span>
              <span className="text-gray-600"> from </span>
              <span className="text-gray-600">Breadfruit</span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;