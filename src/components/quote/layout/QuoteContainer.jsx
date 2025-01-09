import { XMarkIcon } from '@heroicons/react/24/outline';

function QuoteContainer({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top green border */}
      <div className="h-1 bg-emerald-400" />
      
      {/* Header */}
      <div className="border-b">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/tanya.jpg" 
              alt="Tanya"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <span className="font-medium">Tanya</span>
              <span className="text-gray-600"> from </span>
              <span className="text-gray-600">Breadfruit</span>
            </div>
          </div>
          <button>
            <XMarkIcon className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        {children}
      </div>

      {/* Help button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-medium flex items-center gap-2">
          <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-current">?</span>
          Help
        </button>
      </div>
    </div>
  );
}

export default QuoteContainer;