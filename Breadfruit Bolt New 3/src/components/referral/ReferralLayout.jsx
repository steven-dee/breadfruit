import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../stores/auth';
import ReferralHeader from './ReferralHeader';

function ReferralLayout() {
  const { user } = useAuth();

  if (!user || user.role !== 'referral') {
    return <Navigate to="/referral/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <ReferralHeader />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default ReferralLayout;