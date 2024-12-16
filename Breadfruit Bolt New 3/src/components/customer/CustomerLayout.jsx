import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../stores/auth';
import CustomerHeader from './CustomerHeader';

function CustomerLayout() {
  const { user } = useAuth();

  if (!user || user.role !== 'customer') {
    return <Navigate to="/partner/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <CustomerHeader />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default CustomerLayout;