import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/partner/dashboard', icon: HomeIcon },
  { name: 'Applications', href: '/partner/applications', icon: ClipboardDocumentListIcon },
  { name: 'Policies', href: '/partner/policies', icon: DocumentTextIcon },
  { name: 'Customers', href: '/partner/customers', icon: UserGroupIcon },
  { name: 'Price Management', href: '/partner/price-management', icon: CurrencyDollarIcon },
  { name: 'API Integration', href: '/partner/api-integration', icon: CodeBracketIcon },
  { name: 'Analytics', href: '/partner/analytics', icon: ChartBarIcon },
];

function PartnerSidebar() {
  const location = useLocation();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img className="h-8 w-auto" src="/logo.svg" alt="Breadfruit Insurance" />
        </div>
        <nav className="mt-8 flex-1 flex flex-col" aria-label="Sidebar">
          <div className="px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={clsx(
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={clsx(
                      isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default PartnerSidebar;