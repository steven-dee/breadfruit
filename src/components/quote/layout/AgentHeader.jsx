import { XMarkIcon } from '@heroicons/react/24/outline';

function AgentHeader({ name, company, avatar }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img 
          src={avatar} 
          alt={name}
          className="w-10 h-10 rounded-full"
        />
        <div className="text-sm">
          <span className="font-medium text-gray-900">{name}</span>
          <span className="text-gray-500"> from </span>
          <span className="text-primary">{company}</span>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <XMarkIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default AgentHeader;